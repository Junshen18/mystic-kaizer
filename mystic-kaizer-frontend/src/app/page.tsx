import Image from "next/image";
import AnimatedLineArrow from "./components/line-arrow";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] text-white font-dark-mystic">
      {/* Navigation */}
      <nav className="fixed w-full bg-transparent z-50 font-dark-mystic">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-center">
          <div className="flex items-center gap-8 text-2xl">
            <a href="#" className="hover:text-blue-400 transition-colors ">About</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Story</a>
            <a href="#" className="hover:text-blue-400 transition-colors">More</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Buy</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-[url('/landing-page/mk-hero-bg.png')] bg-cover bg-center flex items-end pb-16 relative">
        
        <div className="px-28 w-full h-1/2 flex flex-col items-center justify-center">

          <Image src="/landing-page/name.svg" alt="Mystic Kaizer Logo" width={980} height={168} />
          <div className="flex flex-row items-center justify-center gap-6">
            <hr className="lg:w-[200px] xl:w-[300px] h-[1.5px] bg-white" />
            <div className="text-3xl xl:text-4xl font-light opacity-80 text-center">“Beasts of the Celestial Realm”</div>
            <hr className="lg:w-[200px] xl:w-[300px] h-[1.5px] bg-white" />
          </div>
          
        </div>
        <Image src="/landing-page/border.svg" alt="border" width={100} height={876} className="absolute top-5 left-12  h-[calc(100vh-20vh)]" />
        <Image src="/landing-page/border.svg" alt="border" width={100} height={876} className="absolute top-5 right-12 h-[calc(100vh-20vh)]" />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#222] p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src="/vercel.svg"
                    alt="Feature icon"
                    width={24}
                    height={24}
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={24}
              height={24}
              className="invert"
            />
            <span className="font-bold text-lg">Company</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
