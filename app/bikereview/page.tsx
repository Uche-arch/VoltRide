// app/bikereview/page.tsx
"use client";

import { useState } from "react";
import { Star, CheckCircle2, XCircle, Lock, Eye, EyeOff, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Review {
  _id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  approved: boolean;
  createdAt: string;
}

export default function AdminReviewPage() {
  const [passcode, setPasscode] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/reviews", {
        headers: { "x-admin-secret": passcode },
      });

      if (res.ok) {
        const data = await res.json();
        setReviews(data.data);
        setAuthenticated(true);
      } else {
        setError("Invalid passcode access.");
      }
    } catch (err) {
      setError("An error occurred. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleApproval = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch("/api/reviews", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": passcode,
        },
        body: JSON.stringify({ id, approved: !currentStatus }),
      });

      if (res.ok) {
        setReviews(
          reviews.map((rev) =>
            rev._id === id ? { ...rev, approved: !currentStatus } : rev
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteReview = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this review?")) return;

    try {
      const res = await fetch("/api/reviews", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": passcode,
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setReviews(reviews.filter((rev) => rev._id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md p-8 border border-border bg-card">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="p-3 bg-primary/10 text-primary rounded-full">
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Review Moderation Access</h1>
            <p className="text-sm text-muted-foreground">
              Enter admin passcode to manage website customer reviews.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div className="relative">
              <Input
                type={showPasscode ? "text" : "password"}
                placeholder="Enter Admin Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="h-11 rounded-xl pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPasscode(!showPasscode)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                aria-label={showPasscode ? "Hide passcode" : "Show passcode"}
              >
                {showPasscode ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {error && <p className="text-xs text-destructive font-medium">{error}</p>}
            <Button type="submit" disabled={loading} className="w-full h-11 rounded-xl font-bold">
              {loading ? "Verifying..." : "Access Dashboard"}
            </Button>
          </form>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center border-b border-border pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">Customer Review Manager</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Approve, hide, or delete reviews for your live website.
            </p>
          </div>
          <Button variant="outline" onClick={() => setAuthenticated(false)} className="rounded-xl">
            Lock Access
          </Button>
        </div>

        <div className="space-y-4">
          {reviews.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No reviews submitted yet.</p>
          ) : (
            reviews.map((rev) => (
              <Card key={rev._id} className="p-6 bg-card flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-foreground">{rev.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {rev.role || "Rider"}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">{rev.content}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant={rev.approved ? "default" : "secondary"}
                    onClick={() => toggleApproval(rev._id, rev.approved)}
                    className="rounded-xl font-semibold flex items-center gap-2"
                  >
                    {rev.approved ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                        Live on Site
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-muted-foreground" />
                        Hidden
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => deleteReview(rev._id)}
                    className="rounded-xl text-destructive hover:text-destructive hover:bg-destructive/10 border-border"
                    title="Delete Review"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </main>
  );
}