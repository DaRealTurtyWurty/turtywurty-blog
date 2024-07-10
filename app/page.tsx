import {client, urlFor} from "@/app/lib/sanity";
import {SimpleBlogCard} from "@/app/lib/interface";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

async function getData() {
    const query = `
    *[_type=='blog'] | order(_createdAt desc) {
      title, smallDescription,
        "slug": slug.current,
        "image": mainImage
    }`;

    return await client.fetch(query);
}

export default async function Home() {
    const data: SimpleBlogCard[] = await getData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
            {data.map((blog) => (
                <Card key={blog.slug} className="bg-white dark:bg-gray-800 shadow-md dark:shadow-none rounded-lg overflow-hidden transition-all duration-300 dark:border dark:border-gray-700">
                    <Image
                        src={urlFor(blog.image).url()}
                        alt={blog.title}
                        width={500}
                        height={500}
                        className="rounded-t-lg h-[200px] object-cover w-full"
                    />

                    <CardContent className="mt-5 bg-white dark:bg-gray-800">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{blog.title}</h1>
                        <p className="text-gray-500 mt-2">{blog.smallDescription}</p>
                        <Button asChild className="w-full mt-7 bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-800">
                            <Link href={`/blog/${blog.slug}`}>Read More</Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
