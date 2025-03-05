import Image from "next/image";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { Reveal } from "./components/reveal";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#111] text-white font-dark-mystic">
      {/* Navigation */}
      <nav className="fixed w-full bg-transparent z-50 font-dark-mystic">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-center">
          <div className="flex items-center gap-8 text-2xl ">
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
              Marketplace
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
          <Reveal direction="left">
            <div className="text-6xl leading-16 text-left w-md">
              Dive Into the Mystic Kaizer Universe
            </div>
          </Reveal>
          <Reveal direction="left">
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
          </Reveal>
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
          <Reveal direction="right" width="100%">
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
          </Reveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className=" mx-auto flex flex-col gap-6">
          <Reveal direction="left" width="100%">
            <div className="max-w-7xl mx-auto text-6xl text-black w-full">
              Story Of The Kaizers
            </div>
          </Reveal>
          <Reveal direction="left" width="100%">
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
          </Reveal>
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

      {/* Collections Section */}
      <section className="py-20 px-6 bg-[url('/landing-page/collections.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 justify-center items-center h-[870px]">
          <Reveal>
            <div className="text-6xl w-full text-center">
              The Kaizer Collections
            </div>
          </Reveal>
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

      {/* NFT Rarity Breakdown Section */}
      <section className="bg-[#0E0E0C]">
        <div className="flex flex-row max-w-[1920px] mx-auto">
          <div className="relative w-[550px] flex-shrink-0">
            <Image
              src="/landing-page/nft-rarity.png"
              alt="NFT Rarity"
              width={550}
              height={789}
              className="h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto flex flex-col gap-6 py-20 px-6 w-full">
            <Reveal width="100%" direction="right" className="text-right">
              <div className="text-6xl text-white">
                NFT Rarity Breakdown
              </div>
            </Reveal>
            <Reveal width="100%" direction="right" className="text-right">
              <div className="flex flex-row items-center justify-end">
                <Image
                  src="/landing-page/diamond-right.svg"
                  alt="line"
                  width={10}
                  height={10}
                />
                <hr className="w-[200px] md:w-[300px] xl:w-[500px] h-[2px] bg-white" />
                <Image
                  src="/landing-page/diamond-left.svg"
                  alt="line"
                  width={10}
                  height={10}
                />
              </div>
            </Reveal>

            {/* Rarity Table */}
            <div className="mt-8 w-full font-inter">
              <div className="rounded-lg overflow-hidden border border-white/20">
                {/* Table Header */}
                <div className="grid grid-cols-3 text-2xl font-bold bg-white/5">
                  <div className="p-6 border-r border-white/20">Rarity Tier</div>
                  <div className="p-6 border-r border-white/20">Trait Included</div>
                  <div className="p-6">Drop Rate</div>
                </div>
                
                {/* Table Rows */}
                {[
                  { tier: "Common", traits: "Species", rate: "40%" },
                  { tier: "Uncommon", traits: "Species + Element", rate: "30%" },
                  { tier: "Rare", traits: "Species + Element + Form", rate: "20%" },
                  { tier: "Epic", traits: "Species + Element + Form + 1 Anomaly", rate: "8%" },
                  { tier: "Legendary", traits: "Species + Element + Form + 2 Anomaly", rate: "1%" },
                  { tier: "Mythic", traits: "Species + Element + Form + 3 Anomaly", rate: "0.5%" },
                ].map((row, index) => (
                  <div key={row.tier} className={`grid grid-cols-3 text-xl ${index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'}`}>
                    <div className="p-6 border-r border-white/20">{row.tier}</div>
                    <div className="p-6 border-r border-white/20">{row.traits}</div>
                    <div className="p-6">{row.rate}</div>
                  </div>
                ))}
              </div>
              
              {/* Table Caption */}
              <div className="mt-4 text-white/80 text-lg">
                From Common to Mythic—discover the traits that define your Kaizer.{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  Learn more about rarity 
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 justify-center items-center relative">
          <div className="absolute top-0">
            <Image
              src="/landing-page/footer-title.png"
              alt="title"
              width={700}
              height={133}
            />
          </div>

          <Reveal width="100%">
            <div className="text-6xl text-black w-full text-center mt-16">
              RoadMap
            </div>
          </Reveal>
          <Reveal width="100%">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/landing-page/diamond-right.svg"
                alt="line"
                width={10}
                height={10}
                className="invert"
              />
              <hr className="lg:w-[100px] xl:w-[300px] h-[2px] bg-black" />
              <Image
                src="/landing-page/diamond-left.svg"
                alt="line"
                width={10}
                height={10}
                className="invert"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-black">
            {/* Phase 1 - Active */}
            <Reveal direction="bottom" width="100%" delay={1.2}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] relative">
                <div className="absolute -top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  CURRENT PHASE
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Phase 1: Awakening the Kaizers
                </h3>
                <ul className="space-y-3 font-inter">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-black/90">
                      <strong>Project Reveal</strong> – Introduce the Mystic
                      Kaizer universe and its rarity system
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-black/90">
                      <strong>Website Launch</strong> – Release an interactive
                      landing page with lore and minting details
                    </span>
                  </li>
                  <li className="flex items-center gap-2 animate-pulse">
                    <span className="text-blue-500">⏳</span>
                    <span className="text-blue-500">
                      <strong>NFT Minting Event</strong> – Open the Mystic
                      Kaizer Genesis mint (limited supply)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-black/50">🔓</span>
                    <span className="text-black/50">
                      <strong>Kaizer Explorer</strong> – Launch a rarity
                      explorer for holders
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="bottom" width="100%" delay={1.2}>
              {/* Phase 2 - Locked */}
              <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-black/10 opacity-75 relative">
                <div className="absolute -top-4 left-4 bg-black/60 text-white px-4 py-1 rounded-full text-sm">
                  PHASE 2
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black/60">
                  Phase 2: Rise of the Anomalies
                </h3>
                <ul className="space-y-3 font-inter text-black/60">
                  <li className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>
                      <strong>Anomaly Reveal Event</strong> – Epic+ Kaizers
                      unlock exclusive traits
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>
                      <strong>Evolution Mechanism</strong> – NFT upgrades
                      through quests or burn mechanics
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>
                      <strong>Kaizer Council (DAO)</strong> – Legendary/Mythic
                      holders vote on future initiatives
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="bottom" width="100%" delay={1.4}>
              {/* Phase 3 - Locked */}
              <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-black/10 opacity-75 relative">
                <div className="absolute -top-4 left-4 bg-black/60 text-white px-4 py-1 rounded-full text-sm">
                  PHASE 3
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black/60">
                  Phase 3: The Forgotten Realms
                </h3>
                <ul className="space-y-3 font-inter text-black/60">
                  <li className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>
                      <strong>Realm Unlocks</strong> – Interactive lore-based
                      quest with new NFT classes
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>
                      <strong>Airdrop & Rewards</strong> – Mystic artifacts for
                      holders
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>
                      <strong>Hidden Kaizers</strong> – Secret 1/1 NFTs hidden
                      within the realms
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="bottom" width="100%" delay={1.4}>
              {/* Phase 4 - Locked */}
              <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-black/10 opacity-75 relative">
                <div className="absolute -top-4 left-4 bg-black/60 text-white px-4 py-1 rounded-full text-sm">
                  PHASE 4
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black/60">
                  Phase 4: Beyond the Veil
                </h3>
                <ul className="space-y-3 font-inter text-black/60">
                  <li className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>
                      <strong>IRL Utility</strong> – Exclusive merchandise and
                      event passes
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>
                      <strong>Mystic Kaizer Mini-Games</strong> – Interactive
                      PvE quests
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>
                      <strong>Multichain Expansion</strong> – Integration with
                      other chains/metaverse
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="text-2xl text-black/80 text-center italic mt-8">
            "The journey is just beginning—will you shape the fate of the Mystic
            Kaizers?"
          </div>
        </div>
      </section>

      {/* Community Section */} 
      <section className="bg-[url('/landing-page/community.png')] bg-cover bg-center pt-20 px-6 h-【100vh】">
        <div className=" mx-auto flex flex-col gap-6 justify-center items-center relative">
          <Reveal width="100%">
            <div className="text-6xl text-white w-full text-center mt-16">
              Find Or Create Your Community
            </div>
          </Reveal>
          <Reveal width="100%">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/landing-page/diamond-right.svg"
                alt="line"
                width={10}
                height={10}
              />
              <hr className="lg:w-[200px] xl:w-[500px] h-[2px] bg-white" />
              <Image
                src="/landing-page/diamond-left.svg"
                alt="line"
                width={10}
                height={10}
              />
            </div>
          </Reveal>
          <div className="text-2xl text-white border border-white px-10 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
            Explore Communities
          </div>
          <div className="w-full h-fit flex relative">
            <Image
              src="/landing-page/map.svg"
              alt="map"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
            <div className="absolute top-[50%] left-[42%] w-[4vw]">
              <Reveal direction="bottom" width="100%" delay={1.2}>
                <Image
                  src="/landing-page/malaysia.svg"
                  alt="malaysia"
                  width={80}
                  height={100}
                />
              </Reveal>
            </div>
            <div className="absolute top-[19%] left-[49%] w-[4vw]">
              <Reveal direction="bottom" width="100%" delay={1.4}>
                <Image
                  src="/landing-page/japan.svg"
                  alt="japan"
                  width={80}
                  height={100}
                />
              </Reveal>
            </div>
            <div className="absolute top-[14%] left-[35%] w-[4vw]">
              <Reveal direction="bottom" width="100%" delay={1.6}>
                <Image
                  src="/landing-page/china.svg"
                  alt="china"
                  width={80}
                  height={100}
                />
              </Reveal>
            </div>
            <div className="absolute top-[13%] left-[73%] w-[4vw]">
              <Reveal direction="bottom" width="100%" delay={1.8}>
                <Image
                  src="/landing-page/us.svg"
                  alt="us"
                  width={80}
                  height={100}
                />
              </Reveal>
            </div>
            <div className="absolute top-[35%] left-[39%] w-[4vw]">
              <Reveal direction="bottom" width="100%" delay={1.2}>
                <Image
                  src="/landing-page/thailand.svg"
                  alt="thailand"
                  width={80}
                  height={100}
                />
              </Reveal>
            </div>
          </div>
        </div>
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
                <div className="text-4xl hover:text-black">Our Socials</div>
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
