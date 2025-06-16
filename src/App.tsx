import { useState } from 'react';
import './index.css';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaUserCircle } from 'react-icons/fa';

function ProjectsSection({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="mt-20 flex flex-col items-center space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Project Screenshot ${index + 1}`}
              className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer fade-in"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative max-w-4xl w-full p-4">
            <img src={selectedImage} alt="Enlarged" className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  const [view, setView] = useState<'home' | 'projects'>('home');

  const GardenBayImages = [
    '/images/gardenbay1.png',
    '/images/gardenbay2.png',
    '/images/gardenbay3.png',
    '/images/gardenbay4.png',
    '/images/gardenbay5.png',
    '/images/gardenbay6.png',
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-black shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-2xl text-white" />
            <h1 className="text-xl text-white font-bold font-poppins">Erronn John Madelo</h1>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-600"
                onClick={() => setView('home')}
              >
                About
              </a>
            </li>
            <li>
              <button
                onClick={() => setView('projects')}
                className="text-white hover:text-gray-600"
              >
                Projects
              </button>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-600"
                onClick={() => setView('home')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div>
        {view === 'projects' ? (
          <section
            className="min-h-screen bg-white pt-28 px-4 md:px-8 lg:px-16"
            style={{ backgroundColor: '#2c454c' }}
          >
            <h2 className="text-8xl font-bold mb-8 text-center font-poppins text-white">
              Project Contributions
            </h2>

            <div className="mt-32 flex justify-center">
              <img
                src="/images/gardenbaylogo2.png"
                alt="POS System"
                className="w-full max-w-md h-auto rounded-lg"
              />
            </div>

            {/* Display the grid of images */}
            <ProjectsSection images={GardenBayImages} />
          </section>
        ) : (
          <>
            {/* About Section */}
            <section
              id="about"
              className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 bg-pink-900 bg-cover"
              style={{ backgroundImage: `url('/images/back3.jpg')` }}
            >
              <h1 className="text-8xl text-white font-bold mb-20 font-poppins">Hello, I'm Erronn!</h1>
              <p className="text-lg text-white text-center max-w-xl">
                I'm a front-end developer passionate about building clean and responsive web interfaces using React and TypeScript.
                I'm currently learning and working with tools like React, TypeScript, HTML, and CSS. I’m eager to grow and build better
                interfaces and become a professional front-end developer who creates polished, user-centered experiences.
              </p>
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="py-20 flex flex-col justify-center items-center px-4 md:px-8 lg:px-16"
              style={{ backgroundColor: '#000000' }}
            >
              <h2 className="text-3xl text-white font-semibold mb-4">Contact Me</h2>

              <p className="mb-2 flex items-center gap-2 text-white">
                <FaEnvelope className="text-white" />
                erronnjohn@gmail.com
              </p>

              <p className="mb-2 flex items-center gap-2 text-white">
                <FaPhoneAlt className="text-white" />
                09602604115
              </p>

              <p className="flex items-center gap-2 text-white">
                <FaGithub className="text-white" />
                <a
                  className="text-white underline"
                  href="https://github.com/rickokerks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/rickokerks
                </a>
              </p>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
