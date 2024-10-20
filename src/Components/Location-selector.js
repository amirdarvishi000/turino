import IranCitiesProvincesSelect from "react-iran-provinces-cities-select";
import "../css/Location-selector.css";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
const Location = () => {
  return (
    <div>
      <div class="input-group-prepend">
        <span
          class="title--input px-2 d-flex algin-items-center  input-group-text"
          id="basic-addon1"
        >
          <span className="padding--span--icon">
            <LocationOnTwoToneIcon></LocationOnTwoToneIcon>
          </span>
          <p>مکان</p>
        </span>
      </div>
      <div className="mt-1 d-flex ">
        <IranCitiesProvincesSelect />
      </div>
    </div>
  );
};
export default Location;
