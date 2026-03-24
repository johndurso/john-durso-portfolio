import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, createPost } from "@/lib/posts";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "change-this-secret";

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("x-admin-secret");
  return auth === ADMIN_SECRET;
}

export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, date, excerpt, coverImage, content, tags, slug } = body;

    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: "title, content, and slug are required." },
        { status: 400 }
      );
    }

    createPost({
      slug,
      title,
      date: date || new Date().toISOString().split('T')[0],
      excerpt: excerpt || "",
      coverImage: coverImage || "/images/blog-placeholder.jpg",
      content,
      tags: tags || [],
    });

    return NextResponse.json({ success: true, slug }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post." }, { status: 500 });
  }
}