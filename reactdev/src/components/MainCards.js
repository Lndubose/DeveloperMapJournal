import React, { Fragment } from 'react';

const MainCards = props => {
  return (
    <Fragment>
      {props.journalData.map(week => {
        return (
          <div>
            <img src={week.mainImage} alt="Main" />
            <p>{week.excerpt}</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default MainCards;
