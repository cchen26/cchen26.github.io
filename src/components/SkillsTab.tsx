import React from "react";
import SkillsBar from "./SkillsBar";

interface Skill {
  name: string;
  image: string;
}

interface Props {
  skills: Skill[];
  isScrolled?: boolean;
}

function SkillsSection({ skills, isScrolled }: Props) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          image={skill.image}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }: Props) {
  return (
    <div className="card-content">
      <div className="row text-center">
        <SkillsSection skills={skills} isScrolled={isScrolled} />
      </div>
    </div>
  );
}

export default SkillsTab;
