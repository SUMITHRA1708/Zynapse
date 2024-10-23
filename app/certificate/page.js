export default function Certificate() {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Congratulations!</h1>
          <p className="text-lg text-gray-700 mb-4">You have successfully completed the course on <strong>Communication</strong>.</p>
  
          <div className="mt-8">
            <a
              href="/path-to-your-certificate.pdf" // Link to the PDF certificate
              download
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition"
            >
              Download Your Certificate
            </a>
          </div>
  
          <div className="mt-8">
            <p className="text-gray-500">Keep learning and enhancing your soft skills to earn more certificates!</p>
          </div>
        </div>
      </div>
    );
  }
  