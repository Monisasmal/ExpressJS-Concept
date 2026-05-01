export default function LoggerMiddleware() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Implement Logger Middleware in Express.js
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Create a middleware in Express.js that logs request details like method,
          URL, and time for every incoming request.
        </p>
      </section>

      {/* Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");
const app = express();

// Logger Middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toISOString();

  console.log(\`[\${time}] \${method} \${url}\`);

  next(); // move to next middleware/route
};

// Use middleware
app.use(logger);

// Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Middleware is a function with (req, res, next)</li>
          <li>req.method gives HTTP method (GET, POST, etc.)</li>
          <li>req.url gives requested URL</li>
          <li>Date() logs request time</li>
          <li>next() passes control to next middleware or route</li>
          <li>app.use() applies middleware globally</li>
        </ul>
      </section>

      {/* Output */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Output
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          When you visit:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`http://localhost:3000`}
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          👉 Console Output:
        </p>

        <pre className="bg-gray-900 text-white p-3 rounded-lg text-xs sm:text-sm mt-2">
{`[2026-05-01T10:00:00.000Z] GET /`}
        </pre>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Middleware runs before route handlers</li>
          <li>Used for logging, auth, validation</li>
          <li>Must call next() to continue request flow</li>
          <li>Can be applied globally using app.use()</li>
        </ul>
      </section>

    </div>
  );
}