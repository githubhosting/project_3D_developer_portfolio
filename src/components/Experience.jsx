import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, about } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <div>
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p className="text-secondary text-[14px]">{experience.discription}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <img
        src="https://user-images.githubusercontent.com/71520844/223710992-8e7e3e55-e831-4015-a99d-44e9dba494b0.png"
        alt="experience"
        className="object-cover bg-white mb-6 rounded-xl"
      />
      <ExperienceCard experience={about[0]} />
      <p className={`${styles.sectionSubText} text-left mt-10`}></p>
      <h2 className="text-3xl font-extrabold text-left text-white md:text-5xl">
        Team Performance
      </h2>
      <div className="mt-12 flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
