import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import {ICat} from "../../App";

import "./cat-card.styles.scss";

const CatCard = ({member}: {member: ICat}) => (
  <Card className="cat-card">
    <CardContent>
      <CardMedia
        component="img"
        image={`https://robohash.org/${member.name}?set=set4&size=200x200&bgset=bg1`}
        className="ui-media"
      />
      <Typography component="span" className="ui-details">
        <h3>{member.name}</h3>
        <p>Name Length: {member.name.length}</p>
      </Typography>
    </CardContent>
  </Card>
)

export default CatCard;
