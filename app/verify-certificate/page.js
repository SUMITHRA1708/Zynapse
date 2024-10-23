"use client"
import { useState } from "react";

export default function VerifyCertificate() {
  const [certificateID, setCertificateID] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = () => {

    if (certificateID === "VALID_CERTIFICATE_ID") {
      setVerificationResult("Certificate is valid!");
    } else {
      setVerificationResult("Certificate not found.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Verify Certificate</h1>
        <div>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-md"
            placeholder="Enter Certificate ID"
            value={certificateID}
            onChange={(e) => setCertificateID(e.target.value)}
          />
          <button
            onClick={handleVerify}
            className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition"
          >
            Verify Certificate
          </button>
        </div>
        {verificationResult && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-700">{verificationResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}