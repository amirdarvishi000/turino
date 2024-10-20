import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([4000000, 0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 5000000,
      label: "پنج میلیون"
    },
    {
      value: 10000000,
      label: "ده میلیون"
    }
  ];
  return (
    <div>
      <div class="input-group-prepend">
        <span
          class="title--input px-2 d-flex algin-items-center  input-group-text"
          id="basic-addon1"
        >
          <span className="padding--span--icon">
            <CreditCardTwoToneIcon></CreditCardTwoToneIcon>
          </span>
          <p>رنج قیمت</p>
        </span>
      </div>
      <div class="slider--range--money">
        <Box>
          <Slider
            marks={marks}
            min={0}
            max={10000000}
            step={500000}
            getAriaLabel={() => "money range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
    </div>
  );
}
