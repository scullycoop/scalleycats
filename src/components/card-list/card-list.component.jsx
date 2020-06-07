import React from "react";

import CatCard from "../../components/cat-card/cat-card.component";

import "./card-list.styles.scss";

const CardList = ({members}) => {
  return (
    <div className="card-list">
      {
        members.length !== 0
        ? members.map((member) => (
          <CatCard member={member} key={member.name} />
        ))
        : <h1>No Cats <span role="img" aria-label="">😿</span></h1>
      }
    </div>
  );
}

export default CardList;
