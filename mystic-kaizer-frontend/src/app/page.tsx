import Image from "next/image";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] text-white font-dark-mystic">
      {/* Navigation */}
      <nav className="fixed w-full bg-transparent z-50 font-dark-mystic">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-center">
          <div className="flex items-center gap-8 text-2xl">
            <a href="#" className="hover:text-blue-400 transition-colors ">
              About
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Story
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              More
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Buy
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-[url('/landing-page/mk-hero-bg.png')] bg-cover bg-center flex items-end pb-16 relative">
        <div className="px-28 w-full h-1/2 flex flex-col items-center justify-center">
          <Image
            src="/landing-page/name.svg"
            alt="Mystic Kaizer Logo"
            width={980}
            height={168}
          />
          <div className="flex flex-row items-center justify-center gap-6">
            <div className="flex flex-row items-center">
              <Image
                src="/landing-page/diamond-right.svg"
                alt="line"
                width={12}
                height={12}
              />
              <hr className="lg:w-[200px] xl:w-[300px] h-[1.5px] bg-white" />
            </div>
            <div className="text-3xl xl:text-4xl font-light opacity-80 text-center">
              "Beasts of the Celestial Realm"
            </div>
            <div className="flex flex-row items-center">
              <hr className="lg:w-[200px] xl:w-[300px] h-[1.5px] bg-white" />
              <Image
                src="/landing-page/diamond-left.svg"
                alt="line"
                width={12}
                height={12}
              />
            </div>
          </div>
        </div>
        <Image
          src="/landing-page/border.svg"
          alt="border"
          width={100}
          height={876}
          className="absolute top-5 left-12  h-[calc(100vh-20vh)]"
        />
        <Image
          src="/landing-page/border.svg"
          alt="border"
          width={100}
          height={876}
          className="absolute top-5 right-12 h-[calc(100vh-20vh)]"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[url('/landing-page/about.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="text-6xl leading-16 text-left w-md">
            Dive Into the Mystic Kaizer Universe
          </div>
          <div className="flex flex-row items-center">
            <Image
              src="/landing-page/diamond-right.svg"
              alt="line"
              width={10}
              height={10}
            />
            <hr className="lg:w-[200px] xl:w-[500px] h-[1.5px] bg-white" />
            <Image
              src="/landing-page/diamond-left.svg"
              alt="line"
              width={10}
              height={10}
            />
          </div>
          <div className="text-2xl text-justify font-inter">
            In a time not far from now, the world stands on the edge of chaos.
            Human greed and technological overreach have disrupted the Elemental
            Veil—a hidden force that binds reality together. As the Veil
            weakens, ancient powers once thought to be myths begin to awaken…
            and so do The Kaizers. <br />
            <br />
            The Kaizers are mystical beings forged from the core elements of
            existence—Fire, Water, Earth, and Air—each representing a fragment
            of reality's balance. Long ago, they guarded the Veil in secret,
            ensuring harmony between the physical and spiritual realms. But with
            the rise of corporate empires exploiting nature and data, the Veil
            is now tearing apart, releasing anomalies—glitches in reality that
            threaten both worlds.
            <br />
            <br /> In this new age, the Mystic Kaizer NFTs represent more than
            collectibles—they are the key to restoring balance. Each NFT is a
            unique Kaizer, shaped by elemental forces and random anomalies,
            reflecting the unpredictability of both nature and technology. By
            minting a Kaizer, holders become Guardians—protectors of the
            Veil—and their actions in both the digital and physical realms
            determine the future.
          </div>
          <div className="flex flex-row items-center w-full justify-end">
            <Image
              src="/landing-page/diamond-right.svg"
              alt="line"
              width={12}
              height={12}
            />
            <hr className="lg:w-[200px] xl:w-[300px] h-[1.5px] bg-white" />
            <div className="text-2xl ml-4">Mystic Kaiser</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className=" mx-auto flex flex-col gap-6">
          <div className="max-w-7xl mx-auto text-6xl text-black w-full">
            Story Of The Kaizers
          </div>
          <div className="max-w-7xl mx-auto flex flex-row items-center text-black w-full">
            <Image
              src="/landing-page/diamond-right.svg"
              alt="line"
              width={10}
              height={10}
              className="invert"
            />
            <hr className="lg:w-[200px] xl:w-[500px] h-[1.5px] bg-black" />
            <Image
              src="/landing-page/diamond-left.svg"
              alt="line"
              width={10}
              height={10}
              className="invert"
            />
          </div>
          <div className=" max-w-7xl mx-auto relative w-full overflow-visible">
            <div className="pl-3 flex flex-row items-center gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide overflow-visible h-[450px]">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="flex-shrink-0 flex items-end p-5 w-[calc(100vw-40px)] md:w-[300px] h-[400px] snap-center rounded-2xl cursor-pointer hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 relative"
                  style={{
                    backgroundImage: `url('/landing-page/story${num}.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                  <div className="text-white text-4xl z-10 ">EP.{num}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[url('/landing-page/collections.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 justify-center items-center h-[870px]">
          <div className="text-6xl w-full text-center">
            The Kaizer Collections
          </div>
          <div className="flex flex-row items-center">
            <Image
              src="/landing-page/diamond-right.svg"
              alt="line"
              width={10}
              height={10}
            />
            <hr className="lg:w-[200px] xl:w-[500px] h-[1.5px] bg-white" />
            <Image
              src="/landing-page/diamond-left.svg"
              alt="line"
              width={10}
              height={10}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0E0E0C] flex flex-row h-[788px]">
        <Image
          src="/landing-page/nft-rarity.png"
          alt="border"
          width={550}
          height={789}
          className=""
        />
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 ">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 relative ">
          <div>
            <Image
              src="/landing-page/footer-title.png"
              alt="Logo"
              width={1100}
              height={200}
            />
            <Image
              src="/landing-page/footer-bg.png"
              alt="Logo"
              width={365}
              height={365}
              className="absolute top-20 left-10"
            />
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-col items-left ml-96 gap-2 text-left text-black/70 w-1/2">
                <div className="text-2xl hover:text-black cursor-pointer">
                  About Us
                </div>
                <div className="text-2xl hover:text-black cursor-pointer">
                  Our Story
                </div>
                <div className="text-2xl hover:text-black cursor-pointer">
                  NFT Allocation
                </div>
                <div className="text-2xl hover:text-black cursor-pointer">
                  Roadmap
                </div>
                <div className="text-2xl hover:text-black cursor-pointer">
                  Technologies
                </div>
                <div className="text-2xl hover:text-black cursor-pointer">
                  Communities
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 w-full text-black/80">
                <div className="text-4xl hover:text-black">
                  Our Socials
                </div>
                <div className="flex flex-row items-center gap-2">
                  <AiFillInstagram className="text-6xl cursor-pointer" />
                  <AiFillTwitterCircle className="text-6xl cursor-pointer" />
                  <AiFillYoutube className="text-6xl cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="text-sm text-black mt-3">
              <p>© 2025 Mystic Kaizer. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
