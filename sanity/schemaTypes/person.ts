export default {
    name: 'person',
    type: 'document',
    title: 'Person',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            description: 'The name of the person.'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'A slug is the path of the URL for this person. It should be unique and descriptive.',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'The image of the person.'
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio',
            description: 'A short bio of the person.'
        }
    ]
}