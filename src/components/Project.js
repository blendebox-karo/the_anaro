// Projects.js
export default function Projects() {
  return (
    <section
      id="projects"
      className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"
    >
      <h2 className="text-5xl text-cyan-700 font-bold text-center">
        My Projects
      </h2>
      <div
        className="p-10 bg-cyan-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a href="https://emmaslifepictures.com/" className="w-full h-full">
            <img
              src="/emmalife.png"
              alt="Project 1"
              className="w-full h-full 
										bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://emmaslifepictures.com/"
            >
              Photography Portfolio Project
            </a>
          </h2>
          <p>
            This is a portfolio project built on Wordpress platform for a small
            scale photography business.
          </p>
          <p>Made with Wordpress</p>
        </div>
      </div>
      <div
        className="p-10 bg-cyan-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://zentry-clone-murex-iota.vercel.app/"
            >
              Single Page Gaming Web App
            </a>
          </h2>
          <p>An Eye-Catching Gaming App for User Experience</p>
          <p>Made with React | Taillwind | GSAP</p>
        </div>
        <div className="w-80 rounded">
          <a
            href="https://zentry-clone-murex-iota.vercel.app/"
            className="w-full h-full"
          >
            <img
              src="/zentry.png"
              alt="Project 1"
              className="w-full h-full 
										bg-cover rounded"
            />
          </a>
        </div>
      </div>
      <div
        className="p-10 bg-cyan-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://invoice-generator-tawny.vercel.app/"
            className="w-full h-full"
          >
            <img
              src="/invoice.png"
              alt="Project 1"
              className="w-full h-full 
										bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://invoice-generator-tawny.vercel.app/"
            >
              Invoice Generator App
            </a>
          </h2>
          <p>
            This is a project built on react which generates invoice receipts
            based on customers orders for a small business organisation.
          </p>
          <p>Made with React | Taillwind</p>
        </div>
      </div>
      <div
        className="p-10 bg-cyan-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://fabian-portfolio-pearl.vercel.app/"
            className="w-full h-full"
          >
            <img
              src="/portfolio.png"
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://fabian-portfolio-pearl.vercel.app/"
            >
              Portfolio Website
            </a>
          </h2>
          <p>
            This is a simple SPA portfolio website for individuals to showcase
            their business/brands/talents to the world.
          </p>
          <p>Made with React | Taillwind</p>
        </div>
      </div>
      <div
        className="p-10 bg-cyan-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://appointment-booking-psi.vercel.app/"
            className="w-full h-full"
          >
            <img
              src="/appointment-booking.png"
              alt="Project 1"
              className="w-full h-full 
										bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://appointment-booking-psi.vercel.app/"
            >
              Appointment Booking WebApp
            </a>
          </h2>
          <p>An appointment booking app for scheduling appointments</p>
          <p>Made with React | Taillwind</p>
        </div>
      </div>
    </section>
  )
}
