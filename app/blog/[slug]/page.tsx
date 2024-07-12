import {client, urlFor} from "@/app/lib/sanity";
import {FullArticle} from "@/app/lib/interface";
import Image from "next/image";
import Link from "next/link";
import {PortableText} from "@portabletext/react";
import Code from "@/app/components/code";
import Youtube from "@/app/components/youtube";
import Map from "@/app/components/map";

export const revalidate = 60; // 1 minute

async function getData(slug: string) {
    const query = `
    *[_type=='blog' && slug.current == '${slug}'] {
      "slug": slug.current,
        title,
        "description": smallDescription,
        "createdAt": _createdAt,
        "updatedAt": _updatedAt,
        "image": mainImage,
        "author": author->{name, image, "slug": slug.current},
        content
    }[0]`;

    return await client.fetch(query);
}

const components = {
    types: {
        code: ({value}: { value: { language: string, code: string }, isInline: boolean }) => {
            return <Code language={value.language}>{value.code}</Code>;
        },
        image: ({value}: { value: { asset: { _ref: string } }, isInline: boolean }) => {
            const src = urlFor(value.asset._ref).url();
            return <Image src={src} alt={value.asset._ref} width={800} height={400}
                          className="rounded-lg border dark:border-none"/>;
        },
        youtube: ({value, isInline}: { value: { url: string }, isInline: boolean }) => {
            return <Youtube value={value} isInline={isInline}/>;
        },
        geopoint: ({value, isInline}: { value: { lat: number, lng: number }, isInline: boolean }) => {
            return <Map value={value} isInline={isInline}/>;
        },
        table: ({value}: { value: { rows: { cells: string[] }[] } }) => {
            return (
                <table className="table-auto w-full">
                    <tbody>
                    {value.rows.map((row, index) => (
                        <tr key={index}>
                            {row.cells.map((cell, index) => (
                                <td key={index} className="border px-4 py-2">{cell}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            );
        }
    }
};

export default async function BlogArticle({params}: { params: { slug: string } }) {
    const data: FullArticle = await getData(params.slug);
    const author = data.author;

    const updatedIsCreated = new Date(data.createdAt).toDateString() === new Date(data.updatedAt).toDateString();

    return (
        <div className="mt-5">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 text-center block leading-8 tracking-tight">{data.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-center mt-2">{data.description}</p>

            <div className="w-full mt-5 flex flex-row justify-between items-center">
                <Link href={`/person/${author.slug}`}>
                    <div className="flex items-center mt-3 cursor-pointer mb-5">
                        <Image src={urlFor(author.image).url()} alt={author.name} className="h-10 w-10 rounded-full"
                               width={40} height={40}/>
                        <div className="ml-3">
                            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{author.name}</h1>
                            <p className="text-gray-500 dark:text-gray-400">Written by {author.name}</p>
                        </div>
                    </div>
                </Link>

                <div className="text-gray-500 dark:text-gray-400 text-sm mt-auto">
                    <p>Created on: {new Date(data.createdAt).toDateString()}</p>
                    {!updatedIsCreated && <p>Last updated: {new Date(data.updatedAt).toDateString()}</p>}
                </div>
            </div>
            <Image
                src={urlFor(data.image).url()}
                alt={data.title}
                priority
                className="mt-5 w-full h-[400px] object-cover rounded-lg border dark:border-none"
                width={800}
                height={400}/>

            <div
                className="mt-16 text-gray-800 dark:text-gray-100 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:link:text-primary">
                <PortableText value={data.content} components={components}/>
            </div>
        </div>
    );
}