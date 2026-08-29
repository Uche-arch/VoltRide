// models/Review.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  name: string;
  role?: string;
  content: string;
  rating: number;
  approved: boolean;
  createdAt: Date;
}

const ReviewSchema = new Schema<IReview>(
  {
    name: { type: String, required: true },
    role: { type: String, default: "Rider" },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Review ||
  mongoose.model<IReview>("Review", ReviewSchema);