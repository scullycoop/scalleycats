import React from "react";

import CatCard from "../cat-card/cat-card.component";

import {ICat} from "../../App";

import "./card-list.styles.scss";

const CardList = ({members}: {members: Array<ICat>}) => {
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
