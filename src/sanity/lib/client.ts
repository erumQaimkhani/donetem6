
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create the Sanity client
export const client = createClient({
  projectId: projectId || 'ys8rw8ln', // Fallback to a default project ID if not provided
  dataset: dataset || 'production', // Fallback to a default dataset if not provided
  apiVersion: apiVersion || '2023-01-01', // Fallback to a default API version if not provided
  useCdn: true, // Enable CDN for faster responses
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export const urlFor = (source: SanityImageSource) => builder.image(source).url();

// Default export for the Sanity client
export default client;