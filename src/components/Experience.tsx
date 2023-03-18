import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabContainer } from "react-bootstrap";

interface ExperienceData {
  company: string;
  role: string;
  date: string;
  description: string[];
}

interface ExperienceProps {
  heading: string;
  experienceList: ExperienceData[];
}

function Experience({ heading, experienceList }: ExperienceProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div id="experience" className="experience-bg m-0">
      <div className="container py-5">
        <h2
          className="display-4 mb-5 text-center"
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          {heading}
        </h2>
        <TabContainer>
          <Box
            sx={{
              width: "80%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#191d30",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              scrollButtons="auto"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {experienceList.map((data, index) => {
                return (
                  <Tab
                    label={data.company}
                    id={`vertical-tab-${index}`}
                    aria-controls={`vertical-tabpanel-${index}`}
                    key={index}
                    style={{ color: "#dca652" }}
                  />
                );
              })}
            </Tabs>
            {experienceList.map((data, index) => {
              return (
                value === index && (
                  <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`vertical-tabpanel-${index}`}
                    aria-labelledby={`vertical-tab-${index}`}
                    key={index}
                    style={{ color: "#fff", marginLeft: "10px" }}
                  >
                    {value === index && (
                      <Box sx={{ p: 4 }}>
                        <Typography>
                          <div
                            style={{ fontSize: "20px", marginBottom: "2px" }}
                          >
                            <strong>{data.company}</strong> - {data.role}
                          </div>
                          <div
                            style={{ fontSize: "14px", marginBottom: "13px" }}
                          >
                            {data.date}
                          </div>
                          <ul>
                            {data.description.map((data, index) => (
                              <li key={index}>{data}</li>
                            ))}
                          </ul>
                        </Typography>
                      </Box>
                    )}
                  </div>
                )
              );
            })}
          </Box>
        </TabContainer>
      </div>
    </div>
  );
}

export default Experience;
