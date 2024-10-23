export default function Dashboard() {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Dashboard</h1>
  
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Completed Courses</h2>
  
            <ul className="space-y-4">
              {/* List completed courses and certificates */}
              <li className="flex justify-between items-center">
                <span className="text-lg text-gray-700">Communication</span>
                <a
                  href="/certificate/communication.pdf"
                  download
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Download Certificate
                </a>
              </li>
              {/* Add more completed courses */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  