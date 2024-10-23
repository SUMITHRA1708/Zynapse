import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Master Soft Skills, Empower Your Future with AI
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Learn communication, leadership, and emotional intelligence with AI-driven personalized insights and real-time feedback.
            </p>
          </div>
          {/* Hero Image */}
          <div className="mt-8">
            <img
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              src="https://source.unsplash.com/1600x900/?teamwork,skills"
              alt="Soft Skills Enhancement"
            />
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

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
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
              <div className="text-2xl font-bold text-gray-900">Personalized Insights</div>
              <p className="mt-4 text-gray-600">Get tailored feedback based on your strengths and areas of improvement.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-gray-900">Real-Time Feedback</div>
              <p className="mt-4 text-gray-600">Practice and receive immediate feedback to improve your skills faster.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-gray-900">AI-Driven Insights</div>
              <p className="mt-4 text-gray-600">Our platform uses AI to provide actionable advice on your progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">Start Your Journey Today</h2>
          <p className="mt-4 text-lg text-blue-100">Sign up and start enhancing your soft skills with personalized AI assistance.</p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-medium text-lg rounded-md hover:bg-gray-100"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
