export default function CustomErrorMiddleware() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Custom Error Middleware in Express.js
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Custom error middleware is a user-defined function in Express.js 
              that handles errors in a structured and reusable way. It allows 
              you to control how errors are formatted and sent to the client.
            </p>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Use Custom Error Middleware
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Standardize error responses</li>
              <li>Avoid repetitive try-catch blocks</li>
              <li>Improve debugging</li>
              <li>Handle different error types easily</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. How to Create Custom Error Middleware
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Create middleware with 4 parameters (err, req, res, next)</li>
              <li>Set default status code</li>
              <li>Send structured JSON response</li>
              <li>Place it at the end of all routes</li>
            </ul>
          </section>

          {/* Basic Code */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Basic Custom Error Middleware
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
};

module.exports = errorHandler;`}
            </pre>
          </section>

          {/* Custom Error Class */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Custom Error Class (Pro Level)
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;`}
            </pre>
          </section>

          {/* Usage */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              How to Use It
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");
const app = express();
const AppError = require("./AppError");
const errorHandler = require("./errorHandler");

app.get("/", (req, res, next) => {
  return next(new AppError("Page not found", 404));
});

// Place at the end
app.use(errorHandler);

app.listen(3000);`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Reusable error handling logic</li>
              <li>Clean and maintainable code</li>
              <li>Consistent API response format</li>
              <li>Better debugging and logging</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Requires proper setup</li>
              <li>Async errors must still be handled carefully</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Custom middleware has 4 parameters</li>
              <li>Use custom error class for flexibility</li>
              <li>Always place at the end</li>
              <li>Use next(err) to trigger it</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}