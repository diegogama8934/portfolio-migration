import { motion } from "motion/react";
import { useNavigate } from "react-router";

export function SectionProjects() {
  const navigate = useNavigate();

  return (
    <div
      id="projects"
      className="relative z-10 flex flex-col gap-20"
    >
      <section className="relative flex flex-col gap-16">

        <motion.h2 className="text-xl md:text-5xl font-semibold text-center text-gray-500 leading-relaxed mt-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work that <span className="gradient-text font-extrabold">speaks for itself</span>.
        </motion.h2>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center">
                <img
                  src="/proj-teach.jpg"
                  alt="Teach"
                  className="shadow-lg rounded-md"
                />
              </div>
              <h3 className="mt-10 text-3xl font-bold gradient-text">TEACH</h3>
              <p className="text-2xl mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
                Virtual platform for teachers and students to create and manage their classes.
              </p>
              <motion.button
                onClick={() => navigate("/project/teach")}
                className="text-gray-500 flex items-center gap-2 w-fit border border-gray-200 rounded-md px-4 py-2"
              >
                Read project
                <span className="material-symbols-outlined !text-base">arrow_outward</span>
              </motion.button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center">
                <img
                  src="/proj-we-plan.jpg"
                  alt="We plan"
                  className="shadow-lg rounded-md"
                />
              </div>
              <h3 className="mt-10 text-3xl font-bold gradient-text">We plan</h3>
              <p className="text-2xl mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
                Platform for planning and managing personal, couple or family finances.
              </p>
              <motion.button
                onClick={() => navigate("/project/weplan")}
                className="text-gray-500 flex items-center gap-2 w-fit border border-gray-200 rounded-md px-4 py-2"
              >
                Read project
                <span className="material-symbols-outlined !text-base">arrow_outward</span>
              </motion.button>
            </div>
          </div>


          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center">
                <img
                  src="/proj-bolsa-de-trabajo.jpg"
                  alt="Bolsa de trabajo UAQ"
                  className="shadow-lg rounded-md"
                />
              </div>
              <h3 className="mt-10 text-3xl font-bold gradient-text">Bolsa de trabajo UAQ</h3>
              <p className="text-2xl mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
                Job board for the Autonomous University of Querétaro.
              </p>
              <motion.button
                onClick={() => navigate("/project/bolsa")}
                className="text-gray-500 flex items-center gap-2 w-fit border border-gray-200 rounded-md px-4 py-2"
              >
                Read project
                <span className="material-symbols-outlined !text-base">arrow_outward</span>
              </motion.button>
            </div>
          </div>
          
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center">
                <img
                  src="/proj-random-words.jpg"
                  alt="Random words"
                  className="shadow-lg rounded-md"
                />
              </div>
              <h3 className="mt-10 text-3xl font-bold gradient-text">Random words</h3>
              <p className="text-2xl mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
                Random words generator.
              </p>
              <motion.button
                onClick={() => navigate("/project/random-words")}
                className="text-gray-500 flex items-center gap-2 w-fit border border-gray-200 rounded-md px-4 py-2"
              >
                Read project
                <span className="material-symbols-outlined !text-base">arrow_outward</span>
              </motion.button>
            </div>
          </div>

        </div>
      </section >
    </div >
  );
}