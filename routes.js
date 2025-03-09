import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

// Layout Component
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 p-4 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-yellow-500 rounded-full"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Side Navigation Menu */}
      <div className={`fixed right-0 top-0 h-screen w-64 bg-zinc-900 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link to="/" className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-400">
            <Home /> <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-2 hover:text-yellow-500">
            <User /> <span>About</span>
          </Link>
          <Link to="/portfolio" className="flex items-center space-x-2 hover:text-yellow-500">
            <Briefcase /> <span>Portfolio</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-2 hover:text-yellow-500">
            <Mail /> <span>Contact</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
};

// Page Components
const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-screen bg-yellow-500 transform -skew-x-12" />
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img src="/api/placeholder/600/800" alt="Profile" className="rounded-3xl" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-yellow-500">I'M STEVE MILNER.</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">WEB DESIGNER</h2>
            <p className="text-gray-300">
              I'm a Tunisian based web designer & front-end developer focused on crafting clean & user-friendly experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-500">Personal Info</h2>
            <p className="text-gray-300">
              Passionate web designer with experience in creating user-friendly interfaces.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-500">Skills</h2>
            <ul className="space-y-2 text-gray-300">
              <li>UI/UX Design</li>
              <li>Front-end Development</li>
              <li>React.js</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">My Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-zinc-900 rounded-lg overflow-hidden">
              <img src={`/api/placeholder/400/300`} alt={`Project ${item}`} className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                <p className="text-gray-400">Description of project {item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 bg-zinc-900 rounded" />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 bg-zinc-900 rounded" />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 bg-zinc-900 rounded h-32"></textarea>
          </div>
          <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

// Main App Component with Routes
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;