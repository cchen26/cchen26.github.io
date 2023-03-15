import React from "react";

interface Props {
  skill: string;
  image: string;
  isScrolled?: boolean;
}

function SkillsBar({ skill, image }: Props) {
  return (
    <div
      className="col s6 m2"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img alt="" src={image} className="responsive-img" height="100" />
      <div>{skill}</div>
      <br />
    </div>
  );
}

export default SkillsBar;
