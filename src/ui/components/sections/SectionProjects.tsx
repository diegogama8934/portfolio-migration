import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../../service/projects/getAll";
import { ProjectCard } from "../projects/ProjectCard";

export function SectionProjects() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    data: projects,
    error: projectsError,
    isLoading: projectsLoading
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects
  });

  return (
    <div
      id="projects"
      className="relative z-10 flex flex-col gap-20"
    >
      <section className="relative flex flex-col gap-16">

        <motion.h2
          className="section-title mt-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("projects.title1")} <span className="gradient-text font-extrabold">{t("projects.title2")}</span>
        </motion.h2>

        {projects?.map(p => (
          <ProjectCard
            key={p.id}
            {...p}
          />
        ))}

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">

          <ProjectCard
            id="1"
            image="/proj-teach.jpg"
            enResume={t("projects.teachDescription")}
            esResume={t("projects.teachDescription")}
            title="TEACH"
          />

          <ProjectCard
            id="2"
            image="/proj-we-plan.jpg"
            enResume={t("projects.wePlanDescription")}
            esResume={t("projects.wePlanDescription")}
            title="We plan"
          />

          <ProjectCard
            id="3"
            image="/proj-bolsa-de-trabajo.jpg"
            enResume={t("projects.bolsaDescription")}
            esResume={t("projects.bolsaDescription")}
            title="Bolsa de trabajo"
          />

          <ProjectCard
            id="4"
            image="/proj-random-words.jpg"
            enResume={t("projects.randomWordsDescription")}
            esResume={t("projects.randomWordsDescription")}
            title="Random words"
          />

        </div>
      </section >
    </div >
  );
}