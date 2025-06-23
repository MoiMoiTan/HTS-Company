import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export type CATEGORIES_QUERYResult = Array<{
  _id: string;
  _type: "categoryType";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: { current: string };
  description?: string;
  image?: any;
}>;

export async function getAllCategories(): Promise<CATEGORIES_QUERYResult> {
  const query = `*[_type == "category"]{
    _id, _type, _createdAt, _updatedAt, _rev, title, slug, description, image
  }`;
  return await client.fetch(query);
}
