// // components/LeaveReviewModal.tsx
// "use client";

// import { useState } from "react";
// import { Star, MessageSquarePlus } from "lucide-react";
// import * as Dialog from "@radix-ui/react-dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// interface LeaveReviewModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onSuccess?: () => void;
// }

// export function LeaveReviewModal({
//   open,
//   onOpenChange,
//   onSuccess,
// }: LeaveReviewModalProps) {
//   const [formData, setFormData] = useState({
//     name: "",
//     role: "",
//     rating: 5,
//     content: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setSubmitted(true);
//         setFormData({ name: "", role: "", rating: 5, content: "" });
//         if (onSuccess) onSuccess();
//         setTimeout(() => {
//           setSubmitted(false);
//           onOpenChange(false);
//         }, 2000);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog.Root open={open} onOpenChange={onOpenChange}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//         <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl text-card-foreground">
//           <Dialog.Title className="text-2xl font-extrabold text-foreground">
//             Leave a Review
//           </Dialog.Title>
//           <Dialog.Description className="mt-1 text-sm text-muted-foreground">
//             Tell us about your experience with our Sleek E-Bikes!
//           </Dialog.Description>

//           {submitted ? (
//             <div className="my-8 text-center text-primary font-bold">
//               Thank you! Your review has been submitted for approval.
//             </div>
//           ) : (
//             <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-foreground">
//                   Full Name
//                 </label>
//                 <Input
//                   required
//                   type="text"
//                   placeholder="Chidi Okonkwo"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="h-11 w-full rounded-xl"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-foreground">
//                   Occupation / Role (Optional)
//                 </label>
//                 <Input
//                   type="text"
//                   placeholder="Daily Rider, Businessman..."
//                   value={formData.role}
//                   onChange={(e) =>
//                     setFormData({ ...formData, role: e.target.value })
//                   }
//                   className="h-11 w-full rounded-xl"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-foreground">
//                   Rating (1 - 5 Stars)
//                 </label>
//                 <div className="flex gap-2 py-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                       key={star}
//                       type="button"
//                       onClick={() => setFormData({ ...formData, rating: star })}
//                       className="p-1 focus:outline-none"
//                     >
//                       <Star
//                         className={`h-6 w-6 ${
//                           star <= formData.rating
//                             ? "fill-amber-400 text-amber-400"
//                             : "text-muted-foreground"
//                         }`}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-foreground">
//                   Your Review
//                 </label>
//                 <Textarea
//                   required
//                   rows={4}
//                   placeholder="Share your experience with the bike..."
//                   value={formData.content}
//                   onChange={(e) =>
//                     setFormData({ ...formData, content: e.target.value })
//                   }
//                   className="rounded-xl p-3"
//                 />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <Button
//                   size="lg"
//                   type="button"
//                   variant="outline"
//                   className="flex-1 rounded-xl"
//                   onClick={() => onOpenChange(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   size="lg"
//                   type="submit"
//                   disabled={loading}
//                   className="flex-1 rounded-xl"
//                 >
//                   <MessageSquarePlus className="mr-2 h-4 w-4" />
//                   {loading ? "Submitting..." : "Submit Review"}
//                 </Button>
//               </div>
//             </form>
//           )}
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }

// // components/LeaveReviewModal.tsx
// "use client";

// import { useState } from "react";
// import { Star, MessageSquarePlus, CheckCircle2 } from "lucide-react";
// import * as Dialog from "@radix-ui/react-dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// interface LeaveReviewModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onSuccess?: () => void;
// }

// export function LeaveReviewModal({
//   open,
//   onOpenChange,
//   onSuccess,
// }: LeaveReviewModalProps) {
//   const [formData, setFormData] = useState({
//     name: "",
//     role: "",
//     rating: 5,
//     content: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setSubmitted(true);
//         setFormData({ name: "", role: "", rating: 5, content: "" });
//         if (onSuccess) onSuccess();

//         // Increased timeout to 4000ms (4 seconds) so users can soak in the confirmation
//         setTimeout(() => {
//           setSubmitted(false);
//           onOpenChange(false);
//         }, 10000);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog.Root open={open} onOpenChange={onOpenChange}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//         <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl text-card-foreground">
//           {!submitted && (
//             <>
//               <Dialog.Title className="text-2xl font-extrabold text-foreground">
//                 Leave a Review
//               </Dialog.Title>
//               <Dialog.Description className="mt-1 text-sm text-muted-foreground">
//                 Tell us about your experience with our Sleek E-Bikes!
//               </Dialog.Description>
//             </>
//           )}

//           {submitted ? (
//             <div className="my-6 flex flex-col items-center justify-center text-center space-y-4 py-6 animate-in fade-in zoom-in duration-300">
//               {/* Glowing animated checkmark icon */}
//               <div className="relative flex items-center justify-center">
//                 <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
//                 <div className="relative rounded-full bg-emerald-500/10 p-4 text-emerald-500 ring-1 ring-emerald-500/30">
//                   <CheckCircle2 className="h-16 w-16" />
//                 </div>
//               </div>

//               <div className="space-y-2 max-w-md">
//                 <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
//                   You’re Absolutely Awesome! 🙌
//                 </h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Thank you for sharing your story. Your feedback keeps our community moving forward and helps other prospective riders make confident choices!
//                 </p>
//               </div>

//               <div className="pt-2">
//                 <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
//                   Submitted for approval
//                 </span>
//               </div>
//             </div>
//           ) : (
//             <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-foreground">
//                   Full Name
//                 </label>
//                 <Input
//                   required
//                   type="text"
//                   placeholder="Chidi Okonkwo"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="h-11 w-full rounded-xl"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-foreground">
//                   Occupation / Role (Optional)
//                 </label>
//                 <Input
//                   type="text"
//                   placeholder="Daily Rider, Businessman..."
//                   value={formData.role}
//                   onChange={(e) =>
//                     setFormData({ ...formData, role: e.target.value })
//                   }
//                   className="h-11 w-full rounded-xl"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-foreground">
//                   Rating (1 - 5 Stars)
//                 </label>
//                 <div className="flex gap-2 py-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                       key={star}
//                       type="button"
//                       onClick={() => setFormData({ ...formData, rating: star })}
//                       className="p-1 focus:outline-none transition-transform hover:scale-110"
//                     >
//                       <Star
//                         className={`h-6 w-6 ${
//                           star <= formData.rating
//                             ? "fill-amber-400 text-amber-400"
//                             : "text-muted-foreground"
//                         }`}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-foreground">
//                   Your Review
//                 </label>
//                 <Textarea
//                   required
//                   rows={4}
//                   placeholder="Share your experience with the bike..."
//                   value={formData.content}
//                   onChange={(e) =>
//                     setFormData({ ...formData, content: e.target.value })
//                   }
//                   className="rounded-xl p-3"
//                 />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <Button
//                   size="lg"
//                   type="button"
//                   variant="outline"
//                   className="flex-1 rounded-xl"
//                   onClick={() => onOpenChange(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   size="lg"
//                   type="submit"
//                   disabled={loading}
//                   className="flex-1 rounded-xl"
//                 >
//                   <MessageSquarePlus className="mr-2 h-4 w-4" />
//                   {loading ? "Submitting..." : "Submit Review"}
//                 </Button>
//               </div>
//             </form>
//           )}
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }


// components/LeaveReviewModal.tsx
"use client";

import { useState } from "react";
import { Star, MessageSquarePlus, CheckCircle2 } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface LeaveReviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function LeaveReviewModal({
  open,
  onOpenChange,
  onSuccess,
}: LeaveReviewModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setSubmitted(false);
    onOpenChange(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", role: "", rating: 5, content: "" });
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl text-card-foreground">
          {!submitted && (
            <>
              <Dialog.Title className="text-2xl font-extrabold text-foreground">
                Leave a Review
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                Tell us about your experience with our Sleek E-Bikes!
              </Dialog.Description>
            </>
          )}

          {submitted ? (
            <div className="my-4 flex flex-col items-center justify-center text-center space-y-5 py-4">
              {/* Glowing animated checkmark icon */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
                <div className="relative rounded-full bg-emerald-500/10 p-4 text-emerald-500 ring-1 ring-emerald-500/30">
                  <CheckCircle2 className="h-16 w-16" />
                </div>
              </div>

              <div className="space-y-2 max-w-md">
                <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                  You’re Absolutely Awesome!
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thank you for sharing your story. Your feedback keeps our community moving forward and helps other prospective riders make confident choices!
                </p>
              </div>

              <div>
                <span className="inline-flex items-center px-4 py-1 text-sm font-semibold text-emerald-500">
                  Submitted for approval
                </span>
              </div>

              {/* Action button to dismiss modal manually */}
              <div className="pt-3 w-full max-w-xs">
                <Button
                  // size="lg"
                  type="button"
                  onClick={handleClose}
                  className="w-full rounded-lg font-bold text-base shadow-md py-6"
                >
                  Alright!
                </Button>
              </div>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Full Name
                </label>
                <Input
                  required
                  type="text"
                  placeholder="Chidi Okonkwo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-11 w-full rounded-xl"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Occupation / Role (Optional)
                </label>
                <Input
                  type="text"
                  placeholder="Daily Rider, Businessman..."
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="h-11 w-full rounded-xl"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Rating (1 - 5 Stars)
                </label>
                <div className="flex gap-2 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= formData.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Your Review
                </label>
                <Textarea
                  required
                  rows={4}
                  placeholder="Share your experience with the bike..."
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className="rounded-xl p-3"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  size="lg"
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  size="lg"
                  type="submit"
                  disabled={loading}
                  className="flex-1"
                >
                  {/* <MessageSquarePlus className="mr-2 h-4 w-4" /> */}
                  {loading ? "Submitting..." : "Submit Review"}
                </Button>
              </div>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}