import React from 'react';

const Week = props => {
  return (
    <div>
      <p>{props.github}</p>
      <h1>FrontEnd:</h1>
      {props.week.FrontTasks.map((task, i) => {
        return (
          <div>
            <h2>FrontEnd Ticket</h2>
            <a href={task.githubUrl}>
              <p>{task.gitTitle}</p>
            </a>
            <a href={task.trelloUrl}>
              <p>{task.trelloTitle}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Week;
