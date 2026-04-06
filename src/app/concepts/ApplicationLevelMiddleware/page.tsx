export default function ApplicationLevelMiddleware() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Application-level Middleware in Express.js
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Application-level middleware are middleware functions that are bound 
              to the entire Express application using app.use() or app.METHOD(). 
              They run for every request (or specific routes) in the app.
            </p>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. When to Use Application Middleware
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Logging requests</li>
              <li>Authentication checks</li>
              <li>Parsing request body</li>
              <li>Global validations</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where it is Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Across the entire app</li>
              <li>Specific routes</li>
              <li>APIs</li>
              <li>Server-wide logic</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why Application Middleware is Important
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Applies logic globally</li>
              <li>Reduces code duplication</li>
              <li>Improves maintainability</li>
              <li>Centralized control of requests</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How it Works
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Middleware is registered using app.use()</li>
              <li>Runs before route handlers</li>
              <li>Can modify req and res</li>
              <li>Calls next() to pass control</li>
              <li>Stops if response is sent</li>
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

// Application-level middleware
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
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
{`// Middleware for authentication
app.use((req, res, next) => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

// Route
app.get("/dashboard", (req, res) => {
  res.send("Welcome to Dashboard");
});`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Reusable across app</li>
              <li>Centralized logic</li>
              <li>Improves code structure</li>
              <li>Easy to manage</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Wrong order can break logic</li>
              <li>Can slow down requests if overloaded</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Applied using app.use()</li>
              <li>Runs for all requests (or specific path)</li>
              <li>Uses next() to continue</li>
              <li>Used for logging, auth, parsing</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}