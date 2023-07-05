import { createClient } from "@sanity/preview-kit/client";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_ACCESS_TOKEN,
});
