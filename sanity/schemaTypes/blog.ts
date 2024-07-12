export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Titles should be catchy, descriptive, and not too long.'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'A slug is the path of the URL for this blog post. It should be unique and descriptive.',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Category',
            to: [{ type: 'category' }]
        },
        {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{ type: 'person' }]
        },
        {
            name: 'mainImage',
            type: 'image',
            title: 'Main image',
            description: 'This image will be shown in previews and social media.'
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small description',
            description: 'This description will be shown in previews and social media.'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                { type: 'block' },
                { type: 'image' },
                { type: 'code' },
                { type: 'youtube' },
                { type: 'geopoint' },
                { type: 'table' }
            ]
        }
    ]
}