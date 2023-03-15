import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

interface ProjectProps {
  heading: string;
  username: string;
  length: number;
  specific: string[];
}
const Project = ({ heading, username, length, specific }: ProjectProps) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specificReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specific.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState<typeof dummyProject[]>([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      const response = await axios.get(allReposAPI);
      repoList = [...response.data.slice(0, length)];
      try {
        for (let repoName of specific) {
          const response = await axios.get(`${specificReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error: any) {
        console.error(error.message);
      }
      setProjectsArray(repoList);
    } catch (error: any) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specific, specificReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <div id="projects" className="bg-light m-0">
      <div className="container py-5">
        <Container className="">
          <h2
            className="display-4 pb-5 text-center"
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            {heading}
          </h2>
          <Row>
            {projectsArray.length
              ? projectsArray.map((project, index) => (
                  <ProjectCard
                    key={`project-card-${index}`}
                    id={`project-card-${index}`}
                    value={project}
                  />
                ))
              : dummyProjectsArr.map((project, index) => (
                  <ProjectCard
                    key={`dummy-${index}`}
                    id={`dummy-${index}`}
                    value={project}
                  />
                ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Project;
