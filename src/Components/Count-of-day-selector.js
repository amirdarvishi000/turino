import InsertInvitationTwoToneIcon from "@mui/icons-material/InsertInvitationTwoTone";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
function valuetext(value) {
  return `${value}°C`;
}

const Selector = () => {
  const [value, setValue] = React.useState([4, 1]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 5,
      label: "پنج روز"
    },
    {
      value: 10,
      label: "ده روز"
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
            <InsertInvitationTwoToneIcon></InsertInvitationTwoToneIcon>
          </span>
          <p>تعداد روز</p>
        </span>
      </div>
      <div class="slider--range--money">
        <Box>
          <Slider
            marks={marks}
            min={0}
            max={10}
            step={1}
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
};
export default Selector;
