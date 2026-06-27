import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const TAGS = ["project", "testimonial", "siteSettings"];

export async function POST(request: Request) {
  const secret = request.headers.get("x-sanity-secret");

  if (!process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Missing SANITY_REVALIDATE_SECRET" },
      { status: 500 }
    );
  }

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  TAGS.forEach((tag) => revalidateTag(tag, "max"));

  return NextResponse.json({ revalidated: true, tags: TAGS });
}
