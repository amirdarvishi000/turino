import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarHalfTwoToneIcon from "@mui/icons-material/StarHalfTwoTone";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div>
      <div class="input-group-prepend">
        <span
          class="title--input px-2 d-flex algin-items-center  input-group-text"
          id="basic-addon1"
        >
          <span className="padding--span--icon">
            <StarHalfTwoToneIcon></StarHalfTwoToneIcon>
          </span>
          <p>امتیاز</p>
        </span>
      </div>
      <div className="rating d-flex justify-content-center">
        <Rating
          size="large"
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </div>
    </div>
  );
}
