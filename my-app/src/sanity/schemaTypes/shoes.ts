export default {
    name: 'shoe',
    type: 'document',
    title: 'Shoe',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'Name of the product',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
        description: 'Price of the product',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        description: 'Main image of the product',
        options: {
          hotspot: true, // Enable hotspot for better image cropping
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alt Text',
            description: 'Alternative text for the image',
          },
        ],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Detailed description of the product',
      },
    ],
  };
  