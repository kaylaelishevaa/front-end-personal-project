export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold">Contact Us</p>
          <p className="mt-2">Email: contact@ecobuild.com</p>
          <p>Phone: +123-456-7890</p>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} EcoBuild Innovations. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  