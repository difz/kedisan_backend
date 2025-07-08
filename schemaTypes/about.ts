const about = {
    name: 'about',
    title: 'About',
    type: 'document',
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                layout: 'grid',
            },
            validation: (Rule: any) => Rule.max(1),
        }
    ],
};

export default about;