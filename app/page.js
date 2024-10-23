"use client"
import Link from "next/link";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection"
import { FaUserFriends, FaComments, FaChartLine } from "react-icons/fa";
import Slider from "react-slick";


const slidesData = [
  {
    image: "https://fitatambaram.in/wp-content/uploads/2022/04/Important-soft-skills-for-career-enhancement-768x384.jpg",
    title: "Master Soft Skills, Empower Your Future with AI",
    description: "Learn communication, leadership, and emotional intelligence with AI-driven personalized insights and real-time feedback."
  },
  {
    image: "https://images.shiksha.com/mediadata/images/articles/1410946752phpF3RYBj.jpeg",
    title: "Unlock Your Potential with Tailored Learning",
    description: "Discover personalized growth paths designed to enhance your skills and confidence."
  },
  {
    image: "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/teaser_image/blog_entry/2023-01/AdobeStock_457924302.jpg?h=10933cae&itok=ASkrfKCa",
    title: "Achieve Greater Success with AI Insights",
    description: "Utilize advanced AI tools to track your progress and achieve your career goals."
  },
];


export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Master Soft Skills, Empower Your Future with AI
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn communication, leadership, and emotional intelligence with AI-driven personalized insights and real-time feedback.
          </p>
          
          {/* Carousel */}
          <div className="mt-8 w-full max-w-2xl mx-auto">
            <Slider {...settings}>
              <div>
                <img
                  className="w-full h-96 rounded-lg shadow-lg"
                  src="https://fitatambaram.in/wp-content/uploads/2022/04/Important-soft-skills-for-career-enhancement-768x384.jpg"
                  alt="Teamwork"
                />
              </div>
              <div>
                <img
                  className="w-full h-96 rounded-lg shadow-lg"
                  src="https://images.shiksha.com/mediadata/images/articles/1410946752phpF3RYBj.jpeg"
                  alt="Leadership"
                />
              </div>
              <div>
                <img
                  className="w-full h-96 rounded-lg shadow-lg"
                  src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/teaser_image/blog_entry/2023-01/AdobeStock_457924302.jpg?h=10933cae&itok=ASkrfKCa"
                  alt="Communication"
                />
              </div>
            </Slider>
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-md hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>


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
