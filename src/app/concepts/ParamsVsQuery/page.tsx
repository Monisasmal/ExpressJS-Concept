export default function ParamsVsQuery() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Difference between req.params and req.query
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              req.params and req.query are used in Express.js to extract data from 
              the URL, but they work differently based on how the data is passed.
            </p>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. When to Use
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li><b>req.params</b> → When data is part of the URL path</li>
              <li><b>req.query</b> → When data is passed as query string</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where it is Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>REST APIs</li>
              <li>Filtering & searching data</li>
              <li>Dynamic routing</li>
              <li>Client-server communication</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why Understanding the Difference is Important
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Helps design better APIs</li>
              <li>Avoids confusion in routing</li>
              <li>Improves code readability</li>
              <li>Ensures correct data handling</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How They Work (Comparison)
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>req.params → Extracts values from URL path</li>
              <li>req.query → Extracts values from query string</li>
              <li>req.params → Mandatory (part of route)</li>
              <li>req.query → Optional (after ? in URL)</li>
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

// req.params example
app.get("/user/:id", (req, res) => {
  res.send("User ID: " + req.params.id);
});

// req.query example
app.get("/search", (req, res) => {
  res.send("Search: " + req.query.name);
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
{`// URL Examples:

// req.params
// http://localhost:3000/user/10
// Output → 10

// req.query
// http://localhost:3000/search?name=manaswini
// Output → manaswini

app.get("/user/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.get("/search", (req, res) => {
  res.json({ name: req.query.name });
});`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Clear separation of data types</li>
              <li>Improves API design</li>
              <li>Flexible data handling</li>
              <li>Easy to use</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Can be confusing for beginners</li>
              <li>Needs proper validation</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>req.params → URL path</li>
              <li>req.query → Query string</li>
              <li>req.params is required, req.query is optional</li>
              <li>Both are used to get client data</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}