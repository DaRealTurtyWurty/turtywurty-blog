export interface BlogCategory {
    name: string;
    slug: string;
    description: string;
    id: string;
}

export interface SimpleBlogCard {
    title: string;
    smallDescription: string;
    slug: string;
    image: any;
}

export interface ArticleAuthor {
    name: string;
    slug: string;
    image: any;
}

export interface FullArticle {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    image: string;
    author: ArticleAuthor;
    content: any;
}

export interface FullPersonWithBlogs {
    name: string;
    bio: string;
    slug: string;
    createdAt: string;
    image: any;
    blogs: SimpleBlogCard[];
}