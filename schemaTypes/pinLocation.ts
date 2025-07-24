const pinLocation = {
  name: 'touristAttraction',
  title: 'Tourist Attraction',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Attraction Title',
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
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
      validation: (Rule: any) =>
        Rule.required().min(-90).max(90).error('Latitude must be between -90 and 90'),
    },
    {
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
      validation: (Rule: any) =>
        Rule.required().min(-180).max(180).error('Longitude must be between -180 and 180'),
    },
  ],
};

export default pinLocation;
