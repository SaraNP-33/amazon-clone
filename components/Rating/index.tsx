import React, { useState } from "react";
import { Container } from "./style";
import StarIcon from "@mui/icons-material/Star";

interface RatingProps {
  ratingNumber: number;
}

const Rating = ({  ratingNumber }: RatingProps) => {
    // ratingNumber=  Math.floor(Math.random() * 4) + 1;

  return (
    <Container>
      {Array(ratingNumber)
        .fill(<StarIcon key={ratingNumber} className="product__star" />)
        .map((item) => (
          <p>{item}</p>
        ))}
    </Container>
  );
};

export default Rating;
