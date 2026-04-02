export default function RequestResponseLifecycle() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Request-Response Lifecycle in Express.js
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              The request-response lifecycle in Express.js describes the flow of a 
              client request through middleware and routes until a response is sent 
              back to the client.
            </p>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. When it Happens
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Every time a client sends a request</li>
              <li>When API endpoints are accessed</li>
              <li>During page loads or data fetching</li>
              <li>When middleware and routes are triggered</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where it is Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Web servers</li>
              <li>REST APIs</li>
              <li>Backend applications</li>
              <li>Middleware pipelines</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why it is Important
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Helps understand how requests are processed</li>
              <li>Makes debugging easier</li>
              <li>Improves performance optimization</li>
              <li>Helps design scalable applications</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How it Works (Step-by-Step)
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Client sends request (browser/Postman)</li>
              <li>Request reaches Express server</li>
              <li>Global middleware executes</li>
              <li>Route-specific middleware runs</li>
              <li>Route handler processes logic</li>
              <li>Response is sent using res.send()/res.json()</li>
              <li>Request cycle ends</li>
            </ul>
          </section>

          {/* Code */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Basic Flow Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");
const app = express();

// Global Middleware
app.use((req, res, next) => {
  console.log("Global Middleware");
  next();
});

// Route Middleware
const routeMiddleware = (req, res, next) => {
  console.log("Route Middleware");
  next();
};

// Route Handler
app.get("/", routeMiddleware, (req, res) => {
  res.send("Response sent to client");
});

app.listen(3000);`}
            </pre>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Real Lifecycle Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");
const app = express();

// Step 1: Logging Middleware
app.use((req, res, next) => {
  console.log("Request received:", req.url);
  next();
});

// Step 2: Authentication Middleware
const auth = (req, res, next) => {
  const isUser = true;
  if (isUser) next();
  else res.send("Unauthorized");
};

// Step 3: Route Handler
app.get("/dashboard", auth, (req, res) => {
  res.send("Dashboard Data");
});

app.listen(3000);`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Clear flow of execution</li>
              <li>Easy to debug</li>
              <li>Modular structure</li>
              <li>Scalable request handling</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Too many middleware can slow performance</li>
              <li>Missing next() can break flow</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Flow: Request → Middleware → Route → Response</li>
              <li>Uses next() to move forward</li>
              <li>Middleware executes in order</li>
              <li>Ends when response is sent</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}