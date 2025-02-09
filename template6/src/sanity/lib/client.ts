import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"6gaszzem",
  dataset:"production",
  apiVersion: '202523-01-19',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skvKamp1lohMQO97cygXslPYiU5JbY01nSmRY852ERYEfd9A2od5JKUiNEGbkMg2cgmAgqrZtZGaAZLBGfiSCI9mfJnQItXjgeARrsGJETg8Uxz78NEqzWpGsJvmCZWMxRLbsHwr3wxjkhaO83BkePtbJ1uWBzMdVJ8VlnjZ1NuWx2x2cKIH",
})
