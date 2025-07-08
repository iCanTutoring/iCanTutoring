"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { ArrowRight, LogIn } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Achieve More with iCanTutoring
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Personalized English tutoring that builds confidence, crosses grade boundaries,
            and helps students reach their full potential with pastoral care and academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/book-trial">
                Book a Trial Lesson
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/sign-in">
                <LogIn className="mr-2 h-5 w-5" />
                Log In
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional sections (What We Offer, Testimonials, Meet the Tutor, etc.) go below... */}
    </main>
  );
}
