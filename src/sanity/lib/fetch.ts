import type { QueryParams } from "next-sanity";

import { client } from "@/sanity/lib/client";

type FetchOptions = {
  params?: QueryParams;
  tags?: string[];
  revalidate?: number;
};

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
  revalidate = 60
}: FetchOptions & {
  query: string;
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate,
      tags
    }
  });
}
