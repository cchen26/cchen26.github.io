import React from "react";
import Col from "react-bootstrap/Col";

interface ExperienceCardProps {
  value: {
    company: string;
    role: string;
    date: string;
    description: string[];
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ value }) => {
  const { company, role, date, description } = value;
  return (
    <Col md="12">
      <div className="p-3 mb-0">
        <h5>
          {company} - <span className="text-muted text-secondary"></span>{" "}
        </h5>

        <div className="card-text">
          <div>
            {role} - <span className="text-secondary">{date}</span>
          </div>
          <div className="my-2">
            <ul>
              {description.map((item, index) => (
                <li
                  key={`description-${index}`}
                  className="lead"
                  style={{ fontSize: "18px" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </Col>
  );
};

export default ExperienceCard;
