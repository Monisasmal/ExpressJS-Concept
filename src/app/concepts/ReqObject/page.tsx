export default function ReqObject() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is req Object in Express.js
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              The req (request) object in Express.js represents the HTTP request 
              sent by the client. It contains all the information about the request 
              such as parameters, query data, body, headers, and more.
            </p>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. When to Use req Object
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Reading client data</li>
              <li>Handling form submissions</li>
              <li>Accessing URL parameters</li>
              <li>Processing API requests</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where it is Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Route handlers</li>
              <li>Middleware functions</li>
              <li>APIs</li>
              <li>Server-side logic</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why req Object is Important
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Access client request data</li>
              <li>Handle dynamic inputs</li>
              <li>Process API calls</li>
              <li>Build interactive applications</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How req Object Works
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Client sends request</li>
              <li>Express creates req object</li>
              <li>Data is attached (params, query, body)</li>
              <li>Developer accesses req inside route</li>
              <li>Uses data to process response</li>
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

app.get("/user/:id", (req, res) => {
  console.log(req.params.id); // route param
  console.log(req.query.name); // query param

  res.send("Check console");
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
{`const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    res.send("Login Successful");
  } else {
    res.send("Invalid Credentials");
  }
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
              <li>Access all request data in one object</li>
              <li>Easy to use</li>
              <li>Supports multiple data sources</li>
              <li>Flexible and powerful</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Needs validation for security</li>
              <li>Improper use can cause bugs</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>req = request object</li>
              <li>Contains client data</li>
              <li>Includes params, query, body</li>
              <li>Used in routes & middleware</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}