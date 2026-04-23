import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
      
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        <div className="flex items-center justify-between flex-wrap gap-3">

          {/* Logo */}
          <h1 className="text-lg sm:text-xl font-bold text-blue-600">
            ExpressJS Guide
          </h1>

          {/* Nav */}
          <nav className="flex gap-4 sm:gap-6 text-sm sm:text-base font-medium flex-wrap">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/concepts" className="hover:text-blue-600">
              Concepts
            </Link>
            <Link href="/CodingPractice" className="hover:text-blue-600">
              CodingPrep
            </Link>
          </nav>

        </div>
      </div>

    </header>
  );
}