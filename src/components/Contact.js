// Contact.js
import { TiSocialGooglePlusCircular } from 'react-icons/ti'
export default function Contact() {
  return (
    <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
      <h2 className="text-5xl font-bold text-cyan-700 text-center">Contact</h2>
      <div
        className="flex gap-5 justify-center 
						my-5"
      >
        <a
          rel="noreferrer"
          className="text-center text-cyan-500 px-2 
          py-2 transition rounded hover:text-white 
          hover:bg-cyan-500 flex justify-center items-center gap-5 font-bold text-lg"
          href="/"
          onClick={() => (window.location = 'mailto:blendebox@gmail.com')}
        >
          <TiSocialGooglePlusCircular size={40} />
          Send a message
        </a>
      </div>
      <div className="flex flex-col justify-center items-center font-semibold text-lg text-cyan-700">
        <p>+234 70 3922 6061</p>
        <p>+234 81 5411 2407</p>
      </div>
    </section>
  )
}
