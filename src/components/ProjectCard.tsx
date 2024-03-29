import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }: { value: any; id: string }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 project-card-bg rounded">
        <Card.Body style={{ backgroundColor: "#111630" }}>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text style={{ color: "white" }}>
            {!description ? "" : description || <Skeleton count={3} />}
          </Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr className="project-card-line" />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            <CardFooter
              star_count={stargazers_count}
              repo_url={svn_url}
              pushed_at={pushed_at}
            />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }: { svn_url: string }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" style={{ color: "white" }} /> Download
        Project
      </a>
      <a
        href={svn_url}
        target="_blank"
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" style={{ color: "white" }} /> Repo
      </a>
    </div>
  );
};

const Language = ({
  languages_url,
  repo_url,
}: {
  languages_url: string;
  repo_url: string;
}) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error: any) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      {array.length ? (
        array.map((language) => (
          <a
            key={language}
            className="card-link"
            href={repo_url + `/search?l=${language}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge">
              {language}:{" "}
              {Math.trunc((data[language as any] / total_count) * 1000) / 10} %
            </span>
          </a>
        ))
      ) : (
        <span>No languages to be found."</span>
      )}
    </div>
  );
};

const CardFooter = ({
  star_count,
  repo_url,
  pushed_at,
}: {
  star_count: number;
  repo_url: string;
  pushed_at: string;
}) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fas fa-star" style={{ color: "white" }} />
          <span className="stars">&nbsp;Stars&nbsp;{star_count}</span>
        </span>
      </a>
      <small className="text-muted">
        <span className="project-card-updated">
          &nbsp;&nbsp;Updated {updated_at}
        </span>
      </small>
    </p>
  );
};

export default ProjectCard;
