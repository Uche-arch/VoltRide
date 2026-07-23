// "use client";

// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// export function SendMessage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <section className="bg-[#FAF6F0] py-16 md:py-20 lg:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl px-4">
//         {/* Section Heading */}
//         <div className="mb-10 text-center">
//           <h2 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
//             Send Us a Message
//           </h2>
//           <p className="mx-auto mt-3 max-w-xl text-base font-normal text-slate-600 sm:text-lg">
//             Reach out to us using the form and let us know how we can help.
//           </p>
//         </div>

//         {/* Outer Form Card */}
//         <Card className="rounded-lg border-0 bg-white shadow-sm">
//           <CardContent className="p-8 sm:p-12">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Top Row: Name, Email, Phone */}
//               <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//                 {/* Your Name */}
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-bold text-slate-900"
//                   >
//                     Your Name
//                   </label>
//                   <Input
//                     id="name"
//                     type="text"
//                     placeholder="Kevin Andrew"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="h-14 rounded border-slate-200 bg-white px-6 text-slate-700 placeholder:text-slate-400 focus-visible:ring-orange-500"
//                   />
//                 </div>

//                 {/* Email Address */}
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-bold text-slate-900"
//                   >
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Kevin@gmail.com"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className="h-14 rounded border-slate-200 bg-white px-6 text-slate-700 placeholder:text-slate-400 focus-visible:ring-orange-500"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-bold text-slate-900"
//                   >
//                     Phone
//                   </label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="128-958468 666"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     className="h-14 rounded border-slate-200 bg-white px-6 text-slate-700 placeholder:text-slate-400 focus-visible:ring-orange-500"
//                   />
//                 </div>
//               </div>

//               {/* Bottom Row: Message Area */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-bold text-slate-900"
//                 >
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   rows={6}
//                   placeholder="Write your message here"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   className="rounded border-slate-200 bg-white p-6 text-slate-700 placeholder:text-slate-400 focus-visible:ring-orange-500"
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center pt-2">
//                 <Button
//                   type="submit"
//                   className="group flex h-14 items-center gap-3 rounded bg-orange-500 px-8 text-base font-bold text-white shadow-sm transition-all hover:bg-orange-600"
//                 >
//                   <span>Submit Now</span>
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-orange-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
//                     <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
//                   </div>
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { sendToWhatsApp } from "@/lib/whatsapp";

// export function SendMessage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     sendToWhatsApp({
//       type: "CONTACT_FORM",
//       data: {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         message: formData.message,
//       },
//     });

//     // Reset form after sending
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <section className="bg-[#FAF6F0] py-16 md:py-20 lg:py-24">
//       <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-10 text-center">
//           <h2 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
//             Send Us a Message
//           </h2>
//           <p className="mx-auto mt-3 max-w-xl text-base font-normal text-slate-600 sm:text-lg">
//             Reach out to us using the form and let us know how we can help.
//           </p>
//         </div>

//         <Card className="rounded-lg border-0 bg-white shadow-sm">
//           <CardContent className="p-8 sm:p-12">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="block text-sm font-bold text-slate-900">
//                     Your Name
//                   </label>
//                   <Input
//                     id="name"
//                     type="text"
//                     required
//                     placeholder="Kevin Andrew"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="h-14 rounded border-slate-200 bg-white px-6 text-slate-700 placeholder:text-slate-400 focus-visible:ring-orange-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="email" className="block text-sm font-bold text-slate-900">
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     required
//                     placeholder="Kevin@gmail.com"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="h-14 rounded border-slate-200 bg-white px-6 text-slate-700 placeholder:text-slate-400 focus-visible:ring-orange-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="phone" className="block text-sm font-bold text-slate-900">
//                     Phone
//                   </label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     required
//                     placeholder="+1 (555) 000-0000"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="h-14 rounded border-slate-200 bg-white px-6 text-slate-700 placeholder:text-slate-400 focus-visible:ring-orange-500"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="message" className="block text-sm font-bold text-slate-900">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   rows={6}
//                   required
//                   placeholder="Write your message here"
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   className="rounded border-slate-200 bg-white p-6 text-slate-700 placeholder:text-slate-400 focus-visible:ring-orange-500"
//                 />
//               </div>

//               <div className="flex justify-center pt-2">
//                 <Button
//                   type="submit"
//                   className="group flex h-14 items-center gap-3 rounded bg-orange-500 px-8 text-base font-bold text-white shadow-sm transition-all hover:bg-orange-600"
//                 >
//                   <span>Submit via WhatsApp</span>
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-orange-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
//                     <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
//                   </div>
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendToWhatsApp } from "@/lib/whatsapp";

export function SendMessage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendToWhatsApp({
      type: "CONTACT_FORM",
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    });

    // Reset form after sending
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-muted/30 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-sans text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Send Us a Message
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base font-normal text-muted-foreground sm:text-lg">
            Have a question about our bikes, need custom advice, or want to
            schedule a service? Fill out the form below and our team will get
            back to you within 24 hours.
          </p>
        </div>

        <Card className="rounded-lg bg-card text-card-foreground shadow-sm">
          <CardContent className="p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-foreground"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Kevin Andrew"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12 rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-foreground"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="Kevin@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12 rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-foreground"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  required
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="rounded-lg p-3"
                />
              </div>

              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="group flex h-12 items-center gap-3 rounded-lg px-8 text-base font-bold"
                >
                  <span>Submit</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform ">
                    {/* <ArrowUpRight className="h-4 w-4 stroke-[2.5]" /> */}
                    <FaWhatsapp className="h-5 w-5 fill-current" />
                  </div>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
