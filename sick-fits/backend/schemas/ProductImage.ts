import 'dotenv/config';

import { cloudinaryImage } from '@keystone-next/cloudinary';
import { text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'advanced_react',
};

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    product: relationship({
      ref: 'Product.photo',
    }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product'],
    },
  },
});
