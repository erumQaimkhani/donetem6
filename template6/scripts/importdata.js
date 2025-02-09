// import { createClient } from '@sanity/client';

// const client = createClient({
//   projectId: '6gaszzem',
//   dataset: 'production',
//   useCdn: true,
//   apiVersion: '2025-01-13',


//   token: 'skvKamp1lohMQO97cygXslPYiU5JbY01nSmRY852ERYEfd9A2od5JKUiNEGbkMg2cgmAgqrZtZGaAZLBGfiSCI9mfJnQItXjgeARrsGJETg8Uxz78NEqzWpGsJvmCZWMxRLbsHwr3wxjkhaO83BkePtbJ1uWBzMdVJ8VlnjZ1NuWx2x2cKIH',
// });

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);

//     const response = await fetch(imageUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${imageUrl}`);
//     }

//     const buffer = await response.arrayBuffer();
//     const bufferImage = Buffer.from(buffer);

//     const asset = await client.assets.upload('image', bufferImage, {
//       filename: imageUrl.split('/').pop(),
//     });

//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// async function uploadProduct(product) {
//   try {
//     const imageId = await uploadImageToSanity(product.imageUrl);

//     if (imageId) {
//       const document = {
//         _type: 'product',
//         title: product.title,
//         price: product.price,
//         productImage: {
//           _type: 'image',
//           asset: {
//             _ref: imageId,
//           },
//         },
//         tags: product.tags,
//         dicountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
//         description: product.description,
//         isNew: product.isNew,
//       };

//       const createdProduct = await client.create(document);
//       console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
//     } else {
//       console.log(`Product ${product.title} skipped due to image upload failure.`);
//     }
//   } catch (error) {
//     console.error('Error uploading product:', error);
//   }
// }

// async function importProducts() {
//   try {
//     const response = await fetch('https://template6-six.vercel.app/api/products');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     const products = await response.json();

//     for (const product of products) {
//       await uploadProduct(product);
//     }
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }

// importProducts();import { createClient } from '@sanity/client'
import axios from 'axios'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'
import { createClient } from 'next-sanity'

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })
// Create Sanity client
const client = createClient({
  projectId: '6gaszzem',
  dataset: 'production',
  useCdn: false,
  token: 'skvKamp1lohMQO97cygXslPYiU5JbY01nSmRY852ERYEfd9A2od5JKUiNEGbkMg2cgmAgqrZtZGaAZLBGfiSCI9mfJnQItXjgeARrsGJETg8Uxz78NEqzWpGsJvmCZWMxRLbsHwr3wxjkhaO83BkePtbJ1uWBzMdVJ8VlnjZ1NuWx2x2cKIH',
  apiVersion: '2021-08-31'
})
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`)
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data)
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    })
    console.log(`Image uploaded successfully: ${asset._id}`)
    return asset._id
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error)
    return null
  }
}
async function importData() {
  try {
    console.log('Fetching products from API...')
    const response = await axios.get('https://fakestoreapi.com/products')
    const products = response.data
    console.log(`Fetched ${products.length} products`)
    for (const product of products) {
      console.log(`Processing product: ${product.title}`)
      let imageRef = null
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image)
      }
      const sanityProduct = {
        _type: 'product',
        name: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: 0,
        priceWithoutDiscount: product.price,
        rating: product.rating?.rate || 0,
        ratingCount: product.rating?.count || 0,
        tags: product.category ? [product.category] : [],
        sizes: [],
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,
          },
        } : undefined,
      }
      console.log('Uploading product to Sanity:', sanityProduct.name)
      const result = await client.create(sanityProduct)
      console.log(`Product uploaded successfully: ${result._id}`)
    }
    console.log('Data import completed successfully!')
  } catch (error) {
    console.error('Error importing data:', error)
  }
}
importData()