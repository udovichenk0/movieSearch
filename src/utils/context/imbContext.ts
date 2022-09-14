
import React from "react";
type Rating = "good" | "bad";
type RatingContext = { theme: Rating; setRating: () => void };

export const RatingContext = React.createContext<RatingContext>(
  {} as RatingContext
);
