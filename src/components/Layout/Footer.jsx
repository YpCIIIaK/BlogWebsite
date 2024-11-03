export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} Frontend Journey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}