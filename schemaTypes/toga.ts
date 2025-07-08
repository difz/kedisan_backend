const toga = {
    name : "toga",
    title: "Tanaman Toga",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Nama Toga",
            type: "string",
            validation: (Rule: any) => Rule.required(),   
        },
        {
            name: "description",
            title: "Deskripsi",
            type: "text",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "image",
            title: "Gambar",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "benefits",
            title: "Manfaat",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        }
    ],      
};

export default toga;