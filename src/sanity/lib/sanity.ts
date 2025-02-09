import { createClient  } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'ys8rw8ln', 
  dataset: 'production',       
  apiVersion: '2023-01-01',     
  useCdn: false,               
});
const builder = ImageUrlBuilder(client);

export const urlFor = (source:string) => builder.image(source);
export default client;
