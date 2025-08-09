import React from "react";
import HomePageBottom from "../components/HomePageBottom";
import GithubButton from "../components/GithubButton";
import LinkedInButton from "../components/LinkedInButton";
import EmailButton from "../components/EmailButton";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-6/8 px-4 md:px-24 py-16 md:py-32 md:ml-16 flex flex-col justify-between"
    >
      <div className="max-w-4xl" style={{ opacity: 1, transform: "none" }}>
        <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl text-white">
          contact.
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 md:col-start-2">
            <div className="space-y-4 max-w-5xl rounded-4xl">
              <img
                alt="Charlton Shih"
                loading="lazy"
                width="300"
                height="200"
                decoding="async"
                className="mb-8 rounded-4xl object-cover"
                src="/Portfolio/me.jpeg"
                style={{ color: "transparent" }}
              />
              <p className="font-mono text-sm text-gray-500">
                CS @ UCLA, c/o 2027 • charltonshih645@g.ucla.edu <br />
                <br/>
                <button className="cursor-pointer flex justify-between bg-gray-800 px-3 py-1.5 rounded-full text-white text-sm tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[200px]">
                <a
                  href="/Portfolio/Charlton_Shih_CV.pdf"
                  download="Charlton_Shih_CV.pdf"
                >
                  {" "}
                  CV (August 2025)
                </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 animate-bounce"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    ></path>
                  </svg>
                </button>
              </p>

              <div className="flex items-center gap-8">
                <a
                  href="https://www.linkedin.com/in/charlton-shih/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <LinkedInButton />
                </a>
                <a
                  href="https://github.com/chewton2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <GithubButton />
                </a>
                <a
                  href="mailto:charltonshih645@g.ucla.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <EmailButton />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <HomePageBottom />
      </div>
    </section>
  );
};

export default ContactPage;