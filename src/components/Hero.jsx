import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[50vh] mx-auto pb-60`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Quatlas</h1>
          <p className={`${styles.heroSubText} mt-2 text-white/75`}>
            Team Quatlas is the official aeromodelling team{" "}
            <br className="sm:block hidden" />
            of RIT participating in SAE Aero design competition.
          </p>
          <a href="#">
            <button class="flex flex-row items-center justify-center font-semibold text-center text-white/75 hover:text-white mt-10">
              <span>Watch the teaser</span>
              <svg viewBox="0 0 512 512" class="w-5 h-5 ml-2 fill-current">
                <path d="M356.5 235.5c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.2.4-7.6-4.2-12.3-12.2-12.3-20.9V167.1c0-7.8 4.7-15.8 12.3-20 7.5-4.3 16.8-5 24.2.4l144 88zM208 182.3v147.4l120.7-74.6L208 182.3zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
