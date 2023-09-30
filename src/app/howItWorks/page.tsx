import Meeting from '@/assets/icons/meeting'
import MagicHouse from '@/assets/icons/magicHouse'
import Developing from '@/assets/icons/developing'
import Navigating from '@/assets/icons/navigating'
import NavMenu from '../landing/navMenu'

export default function HowItWorks() {
  return (
    <main>
      <NavMenu />
      <section className="mt-12">
        <h1 className="text-6xl text-center font-bold sm:text-2xl">How It Works</h1>
        <div
          className={`bg-primary text-white pb-24 py-60 px-20 sm:py-4 sm:px-4
         text-base -z-10 mt-60 sm:mt-8 sm:h-full h-[60vh]`}
        >
          <div className="flex flex-wrap justify-around -mt-[440px] sm:-mt-0">
            <div className="w-72 my-4 bg-white text-secondary h-[420px] px-4 rounded-sm shadow-gray-900 shadow-lg">
              <div>
                <Meeting width={250} height={200} fill={'#375052'} />
              </div>
              <h2 className="font-bold text-primary">1. Gathering Information and Assets</h2>
              <p>
                We start by collecting essential details and assets to shape your 3D model. This includes design specifications, material choices, and
                potential upgrades, setting the foundation for your vision.
              </p>
            </div>
            <div className="w-72 my-4 bg-white text-secondary h-[420px] px-4 rounded-sm shadow-gray-900 shadow-lg">
              <div>
                <Developing width={260} height={200} fill={'#375052'} />
              </div>
              <h2 className="font-bold text-primary">2. Designing and Developing the Interactive Model</h2>
              <p>
                Our team leads the design and development of the interactive model, creating a captivating virtual experience that lays the foundation
                for user engagement.
              </p>
            </div>
            <div className="w-72 my-4 bg-white text-secondary h-[420px] px-4 rounded-sm shadow-gray-900 shadow-lg">
              <div>
                <MagicHouse width={260} height={200} fill={'#375052'} />
              </div>
              <h2 className="font-bold text-primary">3. Virtual Exploration</h2>
              <p>
                With the interactive model polished, we unveil it online. This empowers potential buyers to explore the property virtually and
                visualize its unique features. Users can interact with materials and upgrades, gaining insights into their choices.
              </p>
            </div>
            <div className="w-72 my-4 bg-white text-secondary h-[420px] px-4 rounded-sm shadow-gray-900 shadow-lg">
              <div>
                <Navigating width={260} height={200} fill={'#375052'} />
              </div>
              <h2 className="font-bold text-primary">4. Homeowner Follow-Up (Coming Soon)</h2>
              <p>
                In the future, homeowners will access a central platform to track their home progress, review selections, access documents, and
                communicate with parties involved, streamlining the experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
