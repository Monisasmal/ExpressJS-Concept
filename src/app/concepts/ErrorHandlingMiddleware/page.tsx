export default function ErrorHandlingMiddleware() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Error-handling Middleware in Express.js
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Error-handling middleware is a special type of middleware in Express.js 
              used to handle errors that occur during the request-response cycle. 
              It has a unique signature with four parameters: (err, req, res, next).
            </p>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. When to Use Error-handling Middleware
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Handling runtime errors</li>
              <li>Managing API failures</li>
              <li>Validating inputs</li>
              <li>Catching unexpected issues</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where it is Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>APIs</li>
              <li>Backend services</li>
              <li>Middleware chain</li>
              <li>Global error handling</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why Error-handling Middleware is Important
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Prevents app crashes</li>
              <li>Centralizes error handling</li>
              <li>Improves debugging</li>
              <li>Provides consistent responses</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How it Works
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Errors are passed using next(err)</li>
              <li>Express detects error middleware</li>
              <li>Middleware with 4 params is executed</li>
              <li>Error response is sent to client</li>
              <li>Should be placed after all routes</li>
            </ul>
          </section>

          {/* Code */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Basic Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");
const app = express();

// Route with error
app.get("/", (req, res, next) => {
  const error = new Error("Something went wrong");
  next(error);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(3000);`}
            </pre>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Real Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`app.get("/user", (req, res, next) => {
  try {
    throw new Error("User not found");
  } catch (err) {
    next(err);
  }
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(404).json({
    error: err.message
  });
});`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Centralized error handling</li>
              <li>Improves application stability</li>
              <li>Consistent error responses</li>
              <li>Easy debugging</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Incorrect placement can break flow</li>
              <li>Unhandled async errors may bypass it</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Has 4 parameters (err, req, res, next)</li>
              <li>Called using next(err)</li>
              <li>Must be placed after routes</li>
              <li>Handles all application errors</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}