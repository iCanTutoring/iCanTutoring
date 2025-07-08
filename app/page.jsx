import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
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
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/sign-in">
                Log In
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">KS2</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Building strong foundations in English with engaging, age-appropriate lessons 
                  that develop reading, writing, and communication skills for young learners.
                </CardDescription>
                <Button asChild>
                  <a href="/packages">View Packages</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">KS3</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Developing critical thinking and analytical skills with comprehensive English 
                  support that prepares students for GCSE success and builds confidence.
                </CardDescription>
                <Button asChild>
                  <a href="/packages">View Packages</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">KS4</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  GCSE English support focused on crossing grade boundaries, exam technique, 
                  and achieving excellence with personalized strategies and targeted practice.
                </CardDescription>
                <Button asChild>
                  <a href="/packages">View Packages</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Parents and Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "Micah helped my daughter go from a grade 4 to a grade 7 in just six months. 
                  His approach is so personal and caring - he really understands what each student needs."
                </p>
                <p className="font-semibold text-gray-900">- Sarah M., Parent</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "I was struggling with English and felt really anxious about my GCSEs. 
                  Micah made me feel confident again and I achieved a grade 6! The WhatsApp support was amazing too."
                </p>
                <p className="font-semibold text-gray-900">- James, Year 11 Student</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "As a parent of a child with SEN, finding the right tutor was crucial. 
                  Micah's patience and understanding approach has made all the difference to my son's progress."
                </p>
                <p className="font-semibold text-gray-900">- David K., Parent</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Tutor */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Meet the Tutor
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/placeholder.svg" alt="Micah Ofori-Appiah" />
                <AvatarFallback className="text-2xl">MO</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Hi, I'm Micah Ofori-Appiah, a qualified English teacher with a PGCE, QTS, and TEFL. 
                  I've spent over 10 years teaching students across the UK and Africa — from KS2 to Sixth Form — 
                  and I love what I do.
                </p>
                <p>
                  I specialise in helping students cross the grade 4/5 borderline, build confidence, and aim higher. 
                  My lessons are engaging, personalised, and pastoral — I care about my students' well-being as much 
                  as their academic progress.
                </p>
                <p>
                  I've also supported many students with SEN, SEMH, and EAL needs. Whether you're working toward 
                  a grade 9 or trying to overcome a barrier, I'm here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Support That Meets You Where You Are
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Whether you're trying to cross the grade 4 border or achieve a grade 9, we have the support 
              needed to meet you right where you are. Tailored, personalised teaching, regular feedback, 
              WhatsApp support, and a holistic, pastoral approach help ensure well-being and excellence.
            </p>
            <p>
              We also have years of experience supporting learners with SEN. Outside of sessions, students 
              and families can contact us via WhatsApp or email daily for help with homework or coursework.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us Anytime</h2>
          <div className="space-y-4 text-lg">
            <p>
              <strong>Email:</strong> info@icantutoring.com
            </p>
            <p>
              <strong>Phone/WhatsApp:</strong> +44 7575 898738
            </p>
            <p className="text-blue-300 mt-6">
              Support available every day outside of sessions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
