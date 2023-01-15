import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HeroLg, HeroMd, HeroSm } from "../../assets/index";

const Home = () => {
  return (
    <div className="border-black border-x-2">
      <section className="py-10 lg:py-36 xl:py-48">
        <div className="container mx-auto gap-8 px-4 flex flex-col md:flex-row items-center">
          <div className="md:flex-1 md:order-2">
            <picture className="flex drop-shadow-[10px_-10px_0_rgba(250,204,21,1)] border-black rounded-tl-[150px] rounded-br-[150px] rounded-xl overflow-hidden">
              <source
                srcSet={HeroSm}
                width="363"
                height="222"
                media="(max-width: 400px)"
                type="image/jpg"
              />
              <source
                srcSet={HeroMd}
                width="608"
                height="372"
                media="(max-width: 400px)"
                type="image/jpg"
              />
              <img
                src={HeroLg}
                width="870"
                height="532"
                alt="Me working hard on a computer"
              />
            </picture>
          </div>
          <div className="md:flex-1">
            <h2 className="text-lg md:text-xl font-bold uppercase">
              Hi 👋 I'm Jeniffer.
            </h2>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Developer<span className="text-yellow-400">.</span> <br />
              Designer<span className="text-violet-900">.</span>
            </h1>
            <p className="text-lg max-w-xl mb-6">
              I'm a full-stack developer specializing in developing exceptional
              and unique projects. Currently, I'm focused on building
              interactive web applications.
            </p>
            <div className="flex items-baseline gap-4">
              <HashLink
                to="#work"
                className="px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white ease-in-out duration-75"
              >
                Selected Work
              </HashLink>
              <Link
                to="/contact"
                className="px-6 py-4 rounded-md text-black flex gap-2"
              >
                Let's talk{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
