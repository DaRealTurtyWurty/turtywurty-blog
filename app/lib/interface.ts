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
    image: string;
    author: ArticleAuthor;
    content: any;
}