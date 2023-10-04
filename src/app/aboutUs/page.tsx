import Image from 'next/image'
import NavMenu from '../landing/navMenu'

export default function AboutUs() {
  return (
    <main>
      <NavMenu />
      <section id="about-us" className="mt-12">
        <h1 className="text-6xl text-center font-bold sm:text-2xl">About Us</h1>
        <Image alt="us" width={600} height={600} src="/aboutUs.png" className="mx-auto mt-10" priority />
        <div
          className={`bg-primary text-white pb-24 py-60 px-20 sm:py-4 sm:px-4 text-base 
        -mt-48 sm:-mt-0 -z-10 h-[60vh]`}
        >
          <div className="w-7/12 max-w-3xl sm:w-full mx-auto text-justify">
            <p className="text-xl">
              At Hombir, we are driven by our passion for creating exceptional home-buying experiences. Our journey began when we were first-time home
              buyers searching for our dream home. Frustrated by the lack of options, we envisioned a better way. Our mission is to empower builders
              with cutting-edge 3D interactive technology that revolutionizes the home-buying process. With Hombir, builders can showcase their
              properties in stunning detail, helping prospective buyers envision their future homes.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
