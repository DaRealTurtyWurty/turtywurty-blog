export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            description: 'The name of the category.'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'A slug is the path of the URL for this category. It should be unique and descriptive.',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'A short description of the category.'
        }
    ]
}