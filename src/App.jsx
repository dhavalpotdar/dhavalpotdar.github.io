import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Dhaval Potdar</h1>
        <p className="text-lg text-gray-400">Data Science Portfolio</p>
      </header>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-400">Brief description of the project.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400">Brief description of the project.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto p-6 mt-10">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">
          Feel free to reach out at: 
          <a href="mailto:dhaval@example.com" className="text-blue-400"> dhaval@example.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Dhaval Potdar. All rights reserved.
      </footer>
    </div>
  );
}