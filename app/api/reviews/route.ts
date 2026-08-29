// app/api/reviews/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Review from "@/models/Review";

// GET: Public gets approved reviews, Admin (with secret header) gets all
export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const secret = request.headers.get("x-admin-secret");

    let reviews;
    if (secret === process.env.ADMIN_SECRET_KEY) {
      reviews = await Review.find().sort({ createdAt: -1 });
    } else {
      reviews = await Review.find({ approved: true }).sort({ createdAt: -1 });
    }

    return NextResponse.json({ success: true, data: reviews });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST: Anyone can submit a review (defaults to approved: false)
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const { name, role, content, rating } = body;

    if (!name || !content || !rating) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newReview = await Review.create({
      name,
      role: role || "Rider",
      content,
      rating: Number(rating),
      approved: false,
    });

    return NextResponse.json(
      { success: true, data: newReview },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PATCH: Admin toggles review approval
export async function PATCH(request: Request) {
  try {
    await connectToDatabase();
    const secret = request.headers.get("x-admin-secret");

    if (secret !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id, approved } = await request.json();
    const updated = await Review.findByIdAndUpdate(
      id,
      { approved },
      { new: true }
    );

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const adminSecret = req.headers.get("x-admin-secret");
  if (adminSecret !== process.env.ADMIN_SECRET_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();
  await Review.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}