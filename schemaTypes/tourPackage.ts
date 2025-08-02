const tourPackage = {
    name: 'tourPackage',
    title: 'Tour Package', // ✅ PERBAIKI INI
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
            validation: (Rule: any) => Rule.required(),
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
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'number',
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
            validation: (Rule: any) => Rule.max(4).required(),
        },
        {
            name: "link",
            title: "Link",
            type: "url",
            validation: (Rule: any) => Rule.uri({
                scheme: ['http', 'https'],
                allowRelative: true,
            }),
        }
    ],
};

export default tourPackage;
