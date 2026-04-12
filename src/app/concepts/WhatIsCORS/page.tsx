export default function WhatIsCORS() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is CORS (Cross-Origin Resource Sharing)
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              CORS (Cross-Origin Resource Sharing) is a security mechanism used 
              by browsers to restrict or allow resources requested from another 
              domain (origin). It controls which frontend applications can access 
              your backend APIs.
            </p>
          </section>

          {/* Origin */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. What is an Origin?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-2">
              An origin is defined by:
            </p>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Protocol (http/https)</li>
              <li>Domain (example.com)</li>
              <li>Port (3000, 5000)</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              If any of these differ → it is a different origin.
            </p>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Why CORS Exists
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Prevents unauthorized access</li>
              <li>Protects user data</li>
              <li>Blocks malicious cross-site requests</li>
              <li>Enhances browser security</li>
            </ul>
          </section>

          {/* Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Example of CORS Issue
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Frontend running on <b>http://localhost:3000</b> trying to access 
              backend on <b>http://localhost:5000</b> → Browser blocks request 
              unless CORS is enabled on backend.
            </p>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How to Enable CORS in Express
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());

app.get("/", (req, res) => {
  res.send("CORS enabled");
});

app.listen(3000);`}
            </pre>
          </section>

          {/* Specific Origin */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Allow Specific Origin (Secure)
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`app.use(cors({
  origin: "http://localhost:3000"
}));`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Improves security</li>
              <li>Controls API access</li>
              <li>Prevents unauthorized requests</li>
              <li>Flexible configuration</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Misconfiguration can expose APIs</li>
              <li>Extra setup required</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>CORS = Cross-Origin Resource Sharing</li>
              <li>Browser security feature</li>
              <li>Controls cross-origin requests</li>
              <li>Enabled using cors middleware</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}