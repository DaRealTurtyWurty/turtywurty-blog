import {client, urlFor} from "@/app/lib/sanity";
import {FullPersonWithBlogs, SimpleBlogCard} from "@/app/lib/interface";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ClockIcon} from '@sanity/icons'

export const revalidate = 60; // 1 minute

async function getData(slug: string) {
    const query = `
    *[_type=='person' && slug.current == '${slug}'] {
       name, 
       bio, 
       "slug": slug.current, 
       "createdAt": _createdAt,
       image,
       "blogs": *[_type=='blog' && author._ref == ^._id] | order(_createdAt desc) {
           title,
           smallDescription,
           "slug": slug.current,
           "image": mainImage
       }
    }[0]`;

    return await client.fetch(query);
}

export default async function Person({params}: { params: { slug: string } }) {
    const data: FullPersonWithBlogs = await getData(params.slug);

    return (
        <div className="container mx-auto px-0 py-0 mb-5">
            <div className="flex flex-col gap-5 mt-3 mb-10 bg-accent p-5">
                <div className="flex items-center">
                    <Image
                        src={urlFor(data.image).url()}
                        alt={data.name}
                        className="h-20 w-20 rounded-full border-2"
                        width={100}
                        height={100}
                    />
                    <h1 className="ml-3 text-3xl font-bold text-gray-800 dark:text-gray-100">{data.name}</h1>
                </div>
                <p className="font-medium text-gray-600 dark:text-gray-300">{data.bio}</p>
                <div className="w-full flex align-center justify-end flex-row gap-2">
                    <ClockIcon className="w-5 h-5 self-center"/>
                    <p className="text-gray-600 dark:text-gray-300">Created On: {new Date(data.createdAt).toDateString()}</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold">Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
                {data.blogs.map((blog: SimpleBlogCard) => (
                    <Card key={blog.slug}
                          className="bg-white dark:bg-gray-800 shadow-md dark:shadow-none rounded-lg overflow-hidden transition-all duration-300 dark:border dark:border-gray-700">
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
                            <Button asChild
                                    className="w-full mt-7 bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-800">
                                <Link href={`/blog/${blog.slug}`}>Read More</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}