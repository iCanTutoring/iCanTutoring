import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-200 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Achieve More with iCanTutoring</h1>
          <p className="text-xl text-gray-700 mb-8">
            Where confidence meets academic excellence. Expert tutoring in English with a pastoral heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <a href="/book-trial">Book a Trial Lesson</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href="/sign-in">Log In</a>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "KS2", desc: "Building foundational skills for younger learners." },
              { title: "KS3", desc: "Enhancing literacy, comprehension and analytical skills." },
              { title: "KS4", desc: "Mastering GCSE English with targeted strategies." },
            ].map(({ title, desc }) => (
              <Card key={title} className="text-center">
                <CardHeader>
                  <CardTitle className="text-blue-700 text-2xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-base text-gray-700">{desc}</CardDescription>
                  <Button asChild>
                    <a href="/packages">View Packages</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Tutor */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <Avatar className="w-48 h-48">
            <AvatarImage src="/placeholder.svg" alt="Micah Ofori-Appiah" />
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Meet Micah Ofori-Appiah</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I'm Micah, a qualified English teacher with 10+ years of experience. My mission is to help every student not just excel in English, but to believe they can. From grade 4 to grade 9, from SEMH to gifted learners, you're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p>Email: info@icantutoring.com</p>
          <p>WhatsApp: +44 7575 898738</p>
          <p className="mt-4 text-blue-300">Support available every day outside of sessions</p>
        </div>
      </footer>
    </div>
  );
}
