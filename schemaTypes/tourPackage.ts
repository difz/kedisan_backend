const tourPackage = {
    name: 'tourPackage',
    tittle: 'Tour Package',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule:any) => Rule.required(),
        },
        {
            name: 'language',
            title: 'Language(s)',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
            layout: 'tags',
        },
            validation: (Rule: any) => Rule.required(),
        },

        {
            name: 'duration',
            title: 'Duration',
            type: 'number',
            validation: (Rule:any) => Rule.required(),
        },
        {
            name: 'images',
            title: 'images',
            type: 'array',
            of: [{ type: 'image' }],
            option: {
                layout: 'grid',
            },
            validation: (Rule: any) => Rule.max(4).required(),
        },
    ],
};

export default tourPackage;