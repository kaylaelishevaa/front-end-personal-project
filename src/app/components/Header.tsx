import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-green-500 text-white py-4">
      <nav className="max-w-6xl mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Image src="/logo.svg" alt="EcoBuild Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">EcoBuild Innovations</h1>
        </div>
        <button className="md:hidden text-white focus:outline-none text-2xl\">
          ≡
        </button>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:underline">
              Team
            </Link>
          </li>
        </ul>
      </nav>
      <div className="md:hidden flex flex-col space-y-2 mt-2 px-4">
        <Link
          href="/"
          className="block py-2 border-b border-white hover:underline"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 border-b border-white hover:underline"
        >
          About
        </Link>
        <Link
          href="/services"
          className="block py-2 border-b border-white hover:underline"
        >
          Services
        </Link>
        <Link
          href="/team"
          className="block py-2 border-b border-white hover:underline"
        >
          Team
        </Link>
      </div>
    </header>
  );
}
