"use client";

import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="container"
    >
      <div className="mb-24 text-center">
        <p className="text-pink-500 tracking-[0.35em] uppercase text-sm">
          Featured Work
        </p>

        <h2 className="heading mt-5 text-6xl">
          Things I've Been Building.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
          Every project here started with an idea and turned into something I
          genuinely enjoy building.
        </p>
      </div>

      <ProjectCard
        number="01"
        title="Labello"
        description="An AI learning platform where students can build personalized AI tutors with different teaching styles, personalities and learning approaches."
        image="/projects/labello.png"
        tags={[
          "Flutter",
          "AI",
          "OpenAI",
          "Education",
        ]}
        button="Visit Wishlist"
        link="https://labello-wishlist.netlify.app"
      />

      <ProjectCard
        number="02"
        title="Petal Planner"
        description="A calm productivity app helping students manage tasks, habits, schedules and journals in one minimal workspace."
        image="/projects/planner.png"
        reverse
        tags={[
          "React",
          "Firebase",
          "Planner",
          "Productivity",
        ]}
        button="Visit Website"
        link="https://petalplanner690.netlify.app"
      />

      <ProjectCard
        number="03"
        title="Tech Nest"
        description="A Discord community for students, builders, developers and startup enthusiasts to learn and grow together."
        image="/projects/technest.png"
        tags={[
          "Discord",
          "Community",
          "Students",
        ]}
        button="Join Discord"
        link="https://discord.gg/WxGCYwrDJJ"
      />

      <ProjectCard
        number="04"
        title="Petal Writes"
        description="A peaceful writing platform designed for writers to organize stories, characters and chapters. Currently under development."
        image="/projects/writes.png"
        reverse
        status="Coming Soon"
        tags={[
          "Writing",
          "UI/UX",
          "Design",
        ]}
        button="View Concept"
        link="#"
      />
    </section>
  );
}
