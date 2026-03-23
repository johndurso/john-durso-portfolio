import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug, updatePost, deletePost } from "@/lib/posts";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "change-this-secret";

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("x-admin-secret");
  return auth === ADMIN_SECRET;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    updatePost(params.slug, body);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update post." }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    deletePost(params.slug);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete post." }, { status: 500 });
  }
}