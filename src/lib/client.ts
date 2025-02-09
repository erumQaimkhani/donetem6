/**
 * Creates and exports a Sanity client instance configured with the provided project ID, dataset, and API version.
 * The client is set to use the Content Delivery Network (CDN) for faster response times.
 *
 * @module client
 * @requires next-sanity
 * @requires ../sanity/env
 */
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId} from "../sanity/env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    
});