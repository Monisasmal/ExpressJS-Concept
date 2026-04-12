export default function WhatIsHelmet() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is Helmet in Express.js
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Helmet is a middleware for Express.js that helps secure your 
              application by setting various HTTP headers. It protects your app 
              from common web vulnerabilities like XSS, clickjacking, and more.
            </p>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Use Helmet
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Improves application security</li>
              <li>Prevents common attacks</li>
              <li>Sets secure HTTP headers automatically</li>
              <li>Easy to integrate</li>
            </ul>
          </section>

          {/* What it Protects */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. What Helmet Protects Against
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Cross-Site Scripting (XSS)</li>
              <li>Clickjacking</li>
              <li>MIME sniffing</li>
              <li>Insecure HTTP headers</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. How to Use Helmet
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");
const helmet = require("helmet");

const app = express();

// Use Helmet middleware
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Secure App");
});

app.listen(3000);`}
            </pre>
          </section>

          {/* Features */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Key Features
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Sets Content-Security-Policy</li>
              <li>Hides X-Powered-By header</li>
              <li>Prevents clickjacking (X-Frame-Options)</li>
              <li>Enforces HTTPS-related headers</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Improves security instantly</li>
              <li>No complex setup</li>
              <li>Protects against multiple attacks</li>
              <li>Lightweight middleware</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>May block some resources if misconfigured</li>
              <li>Requires customization for advanced use</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Helmet is a security middleware</li>
              <li>Sets HTTP security headers</li>
              <li>Protects against XSS, clickjacking</li>
              <li>Used with app.use(helmet())</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}