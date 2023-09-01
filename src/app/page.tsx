import CanvasWrapper from './demo/CanvasWrapper';
import ButtonDemo from '@/app/landing/buttonDemo';

export default function Home() {
  return (
    <main>
      <section className="h-screen">
        {/* <div className="flex justify-between ">
          <Image
            src="/logos/logo_black.svg"
            alt="Hombir Logo"
            width={180}
            height={90}
            priority
          />
          <NavMenu />
        </div> */}
        <CanvasWrapper />
        <div className="flex  lg:ml-[10vw] md:w-screen ">
          <div className="w-1/3  mt-24 ml-72 md:ml-2 sm:pt-12 md:w-screen md:bg-white md:bg-opacity-60 rounded-lg sm:h-screen ">
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
      </section>
    </main>
  );
}
