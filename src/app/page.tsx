import AboutUs from './aboutUs/page';
import CanvasWrapper from './demo/CanvasWrapper';
import ButtonDemo from '@/app/landing/buttonDemo';
import HowItWorks from './howItWorks/page';
import NavMenu from './landing/navMenu';

export default function Home() {
  return (
    <main>
      <section className="h-screen">
        <NavMenu />
        <CanvasWrapper />
        <div className="flex  lg:ml-[10vw] md:w-screen ">
          <div className="w-2/5  mt-24 ml-72 md:ml-2 sm:pt-12 md:w-screen md:bg-white md:bg-opacity-60 rounded-lg sm:h-screen ">
            <h1 className="text-6xl sm:text-3xl font-bold text-primary ">
              3D showcase for your housing developments
            </h1>
            <h2 className="mt-4 mb-12 text-2xl text-secondary ">
              Transforming property presentations for builders. Step
              into a new era of property showcasing with our 3D
              interactive solutions. Elevate your projects, captivate
              your clients.
            </h2>
            <ButtonDemo />
          </div>
        </div>
        <div className="hidden sm:block -mt-[300px]">
          <AboutUs />
          <HowItWorks />
        </div>
      </section>
    </main>
  );
}
