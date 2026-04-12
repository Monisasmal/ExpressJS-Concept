import Link from "next/link";

const concept = [
     {name: "What is ExpressJs?", path:"/concepts/What-is-ExpressJS"},
     {name: "Why use express over Nodejs?", path:"/concepts/WhyExpressOverNode"},
     {name: "What is Middleware?", path:"/concepts/WhatIsMiddleware"},
     {name: "Request-Response Lifecycle in Express.js?", path:"/concepts/RequestResponseLifecycle"},
     {name: "What is the role of next() function??", path:"/concepts/NextFunctionRole"},
     {name: "How routing works in Express?", path:"/concepts/ExpressRouting"},
     {name: "Difference between app.get, app.post, app.put, app.delete.?", path:"/concepts/HTTPMethodsDifference"},
     {name: "What are route parameters??", path:"/concepts/RouteParameters"},
     {name: "Difference between req.params and req.query.?", path:"/concepts/ParamsVsQuery"},
     {name: "How to Handle Dynamic Routes in Express.js?", path:"/concepts/DynamicRoutes"},
     {name: "What is req object in Express??", path:"/concepts/ReqObject"},
     {name: "What is res object in Express??", path:"/concepts/ResObject"},
     {name: "Difference between res.send and res.json?", path:"/concepts/SendVsJson"},
     {name: "How to Send Status Codes in Express.js?", path:"/concepts/StatusCodes"},
     {name: "Types of middleware in Express?", path:"/concepts/TypesOfMiddleware"},
     {name: "What is Application-level middleware.", path:"/concepts/ApplicationLevelMiddleware"},
     {name: "What is Router level middleware.", path:"/concepts/RouterLevelMiddleware"},
     {name: "What is Error Handling Middleware?.", path:"/concepts/ErrorHandlingMiddleware"},
     {name: "What Happens if next() is Not Called in Express.js?", path:"/concepts/NextNotCalled"},
     {name: "How to Handle Errors in Express.js", path:"/concepts/HandleErrors"},
     {name: "Global Error Handling Middleware in Express.js?", path:"/concepts/GlobalErrorHandling"},
     {name: "Custom Error Middleware in Express.js?", path:"/concepts/CustomErrorMiddleware"},
     {name: "What is JWT Authentication?", path:"/concepts/JWTAuthentication"},
     {name: "How to Protect Routes in Express.js?", path:"/concepts/ProtectRoutes"},
];

export default function Concepts(){
    
    return(
    
        <section>
         <h1 className="text-3xl font-bold m-8 text-blue-600">ExpressJS Concepts</h1>
         <ul className="grid gap-4 sm:grid-cols-3 m-12">
        {concept.map(c => (
          <li key={c.name} className="bg-blue-50 p-4 rounded shadow">
            <Link href={c.path} className="font-semibold">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
      
    )
}