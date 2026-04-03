export default function RouteParameters() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What are Route Parameters in Express.js
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Route parameters are dynamic values in the URL used to capture data 
              from the request. They are defined using a colon (:) in the route path 
              and can be accessed using req.params.
            </p>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. When to Use Route Parameters
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Fetching specific data (like user by ID)</li>
              <li>Building dynamic routes</li>
              <li>Handling resource identifiers</li>
              <li>REST API development</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where it is Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>REST APIs</li>
              <li>Dynamic web pages</li>
              <li>Backend routing</li>
              <li>Database queries</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why Route Parameters are Important
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Enable dynamic routing</li>
              <li>Help identify specific resources</li>
              <li>Improve API structure</li>
              <li>Make URLs clean and readable</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How Route Parameters Work
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Define parameter using : (colon)</li>
              <li>Client sends request with value</li>
              <li>Express captures value from URL</li>
              <li>Access using req.params</li>
              <li>Use value in logic (DB/API)</li>
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

// Route Parameter
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send("User ID: " + userId);
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
{`// Multiple Route Parameters
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;

  res.json({
    category: category,
    productId: id
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
              <li>Clean and readable URLs</li>
              <li>Dynamic routing</li>
              <li>Easy data extraction</li>
              <li>Improves API design</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Needs validation for security</li>
              <li>Improper use can cause routing conflicts</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Defined using : in route</li>
              <li>Accessed via req.params</li>
              <li>Used for dynamic URLs</li>
              <li>Common in REST APIs</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}