"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", organisation: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello Vandan Distributors,",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      form.organisation ? `Organisation: ${form.organisation}` : "",
      "",
      form.message || "I would like to know more about your products and services.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <Card className="contact-form-card glossy-card border-0 ring-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Send an Inquiry</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            <span>Full Name *</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </label>
          <label>
            <span>Phone *</span>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 XXXXX XXXXX"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@hospital.com"
            />
          </label>
          <label>
            <span>Hospital / Diagnostic Centre</span>
            <input
              type="text"
              value={form.organisation}
              onChange={(e) => setForm({ ...form, organisation: e.target.value })}
              placeholder="Organisation name"
            />
          </label>
          <label className="contact-form__full">
            <span>Message</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your requirements — contrast media, films, MIPS, or bulk supply..."
            />
          </label>
          <Button type="submit" size="lg" className="contact-form__submit cursor-pointer">
            <Send className="size-4" data-icon="inline-start" />
            Send via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
