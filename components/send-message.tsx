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
            Have a question about our Sleek E-Bikes, need pricing details, or
            want to book a test ride? Fill out the form below and send it
            directly to our team via WhatsApp.
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
                    placeholder="Chidi Okonkwo"
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
                    placeholder="chidi@gmail.com"
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
                    placeholder="0814 000 0000"
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
                  placeholder="Write your message or inquiry here..."
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
                  <span>Send via WhatsApp</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform">
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
