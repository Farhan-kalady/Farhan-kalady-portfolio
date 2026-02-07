import Sidebar from './components/Sidebar'
import Hero from './sections/Hero'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Vault from './sections/Vault'
import Contact from './sections/Contact'
import profileImg from './assets/profile.jpg';

function App() {
  return (
    <div className="flex bg-slate-950 min-h-screen font-sans selection:bg-blue-500/30">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-x-hidden">
        <Hero />

        <section id="about" className="min-h-screen py-20 px-10 md:px-20 bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-10 flex items-center">
              <span className="text-blue-500 mr-4 font-mono">01.</span> About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 text-slate-400 text-lg leading-relaxed space-y-6">
                <p>
                  Hello! My name is Mohammed Farhan K and I enjoy creating things that live on the internet.
                  My interest in web development started back in 2022 when I decided to pursue BCA from Majlis Arts and Science College.
                </p>
                <p>
                  Fast-forward to today, and I’m currently pursuing my MCA at <span className="text-blue-400">Mar Athanasius College of Engineering</span>.
                  My focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                </p>
                <p>
                  I also have a strong fascination with AI and Data Science, constantly exploring how intelligence can be integrated into modern web applications.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 border-2 border-blue-500 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                <div className="relative bg-slate-800 rounded-lg overflow-hidden h-80 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <img src={profileImg} alt="Mohammed Farhan K" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Education />
        <Skills />
        <Projects />
        <Vault />
        <Contact />
      </main>
    </div>
  )
}

export default App
