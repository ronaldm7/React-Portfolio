import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'know',
      description: 'Find events and know how the weather will be like',
      link: "https://ronaldm7.github.io/Know-Before-You-Go/",
      repo: "https://github.com/ronaldm7/Know-Before-You-Go"
    },
    {
      name: 'quiz',
      description: 'Test your javascript knowledge with a quick quiz',
      link: "https://ronaldm7.github.io/Javascript-quiz/",
      repo: "https://github.com/ronaldm7/Javascript-quiz"
    },
    
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
