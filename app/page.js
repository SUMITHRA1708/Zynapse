"use client"
import Link from "next/link";
import Navbar from "./Components/Navbar";
import { FaUserFriends, FaComments, FaChartLine } from "react-icons/fa";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
    

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">We are dedicated to enhancing your professional growth through innovative AI-driven solutions.</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform is designed to help you grow professionally by improving your essential soft skills.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaChartLine className="text-blue-600 text-3xl mb-4" />
              <div className="text-2xl font-bold text-gray-900">Personalized Insights</div>
              <p className="mt-4 text-gray-600">Get tailored feedback based on your strengths and areas of improvement.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaComments className="text-blue-600 text-3xl mb-4" />
              <div className="text-2xl font-bold text-gray-900">Real-Time Feedback</div>
              <p className="mt-4 text-gray-600">Practice and receive immediate feedback to improve your skills faster.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUserFriends className="text-blue-600 text-3xl mb-4" />
              <div className="text-2xl font-bold text-gray-900">AI-Driven Insights</div>
              <p className="mt-4 text-gray-600">Our platform uses AI to provide actionable advice on your progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">Start Your Journey Today</h2>
          <p className="mt-4 text-lg text-blue-100">Sign up and start enhancing your soft skills with personalized AI assistance.</p>
          <div className="mt-8">
            <Link
              href="/Signup"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-medium text-lg rounded-md hover:bg-gray-100"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
