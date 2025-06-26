import { motion } from "motion/react";

export function SectionAboutMe() {
  return (
    <div
      id="aboutMe"
      className="relative z-10 flex flex-col gap-20"
    >
      <section className="relative flex flex-col items-center gap-10">
        <motion.h2 className="text-xl md:text-5xl font-semibold text-center text-gray-500 leading-relaxed mt-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Who is <span className="gradient-text font-extrabold">building</span> this?
        </motion.h2>

        <motion.p className="text-2xl text-center text-gray-500 leading-relaxed font-light max-w-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          A graduated software engineer.
        </motion.p>

        <div className="flex gap-4 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            src="/yo.jpeg"
            alt="About me"
            className="w-[150px] h-[150px] object-cover rounded-full shadow-lg"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            src="/yo2.jpeg"
            alt="About me"
            className="w-[150px] h-[150px] object-cover rounded-full shadow-lg"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            src="/yo3.JPG"
            alt="About me"
            className="w-[150px] h-[150px] object-cover rounded-full shadow-lg"
          />
        </div>

        <div className="prose prose-lg text-zinc-600 flex-1 pt-10 px-16">
          <motion.p
            className="mb-4 leading-loose"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            I started my career in interface design, focused on creating accessible and functional experiences. Over time, I wanted to bring my designs to life through code, and I found in React a key tool to do so. Today, I combine my UI design skills with front-end development, creating prototypes and taking them to production with attention to both aesthetics and clean code.
          </motion.p>

          <motion.p
            className="mb-4 leading-loose"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            Recently, I’ve worked with Microfrontend architectures using Single SPA, developing shared modules to enhance scalability and avoid redundancy. I'm currently preparing for the AWS Developer Associate certification, aiming to strengthen my cloud skills.
          </motion.p>

          <motion.p
            className="mb-4 leading-loose"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            I have three years of experience, which began in a collaborative development center where I volunteered to learn and contribute. There, I developed both technical and soft skills: organization, communication, and teamwork.
          </motion.p>

          <motion.p
            className="mb-4 leading-loose"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            I consider myself adaptable and open to continuous learning. I enjoy working out, playing basketball and video games, and I stay up to date with courses in my field. My English level is B2, and I’m actively working to regain fluency and communicate confidently in international settings.
          </motion.p>
        </div>
      </section>
    </div>
  )
}