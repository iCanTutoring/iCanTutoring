// app/page.jsx
import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Test Heading */}
      <h1 className="text-4xl font-bold text-red-600 text-center py-4">
        Tailwind is working!
      </h1>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Achieve More with iCanTutoring
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Personalized English tutoring that builds confidence, crosses grade
            boundaries, and helps students reach their full potential with
            pastoral care and academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-trial">
              <Button size="lg" className="text-lg px-8 py-6">
                Book a Trial Lesson
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional sections (Offers, Testimonials, About, etc.) */}
      {/* Follow the same pattern: wrap <Button> in <Link>, NOT <a> inside Button */}
    </div>
  );
}
