export default function JWTAuthentication() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          JWT Authentication (JSON Web Token)
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              JWT (JSON Web Token) is a secure way to authenticate users by 
              sending a digitally signed token from the server to the client. 
              The client stores this token and sends it with every request 
              to access protected routes.
            </p>
          </section>

          {/* Structure */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Structure of JWT
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-2">
              A JWT consists of 3 parts:
            </p>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li><b>Header</b> → Algorithm & token type</li>
              <li><b>Payload</b> → User data (id, role, etc.)</li>
              <li><b>Signature</b> → Verifies token authenticity</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. How JWT Authentication Works
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>User logs in with credentials</li>
              <li>Server validates user</li>
              <li>Server generates JWT</li>
              <li>Client stores token (localStorage/cookie)</li>
              <li>Client sends token in headers</li>
              <li>Server verifies token for protected routes</li>
            </ul>
          </section>

          {/* Code - Generate Token */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Generate JWT Token
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: 1 },
  "secretKey",
  { expiresIn: "1h" }
);

console.log(token);`}
            </pre>
          </section>

          {/* Code - Verify Token */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Verify JWT Token (Middleware)
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secretKey");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};`}
            </pre>
          </section>

          {/* Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Protect Routes Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to dashboard");
});`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Stateless authentication</li>
              <li>No need to store sessions</li>
              <li>Scalable for large applications</li>
              <li>Secure with signature</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Token size is larger than session ID</li>
              <li>Cannot be easily revoked</li>
              <li>Security risk if stored improperly</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>JWT has 3 parts: Header, Payload, Signature</li>
              <li>Used for stateless authentication</li>
              <li>Sent in Authorization header</li>
              <li>Verified using secret key</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}