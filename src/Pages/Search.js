import Textbox from "../Components/Text-box";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import BorderOuterTwoToneIcon from "@mui/icons-material/BorderOuterTwoTone";
import RangeMoney from "../Components/Range-money";
import Rating from "../Components/Rating";
import Locationselector from "../Components/Location-selector";
import CountOfDay from "../Components/Count-of-day-selector";
import Button from "../Components/Button";
const Search = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <Textbox text="نام برنامه" placeholder="مثلا قشم">
          <BadgeTwoToneIcon></BadgeTwoToneIcon>
        </Textbox>
      </div>
      <div className="col-12 col-md-6 mt-2">
        <Textbox text="نوع برنامه" placeholder="مثلا آفرود">
          <BorderOuterTwoToneIcon></BorderOuterTwoToneIcon>
        </Textbox>
      </div>

      <div className="col-12 col-md-6 mt-2">
        <RangeMoney />
      </div>
      <div className="mt-2 col-12 col-md-6">
        <Rating />
      </div>
      <div className="mt-2 col-12 col-md-6">
        <Locationselector />
      </div>
      <div className="col-12 col-md-6 mt-2">
        <CountOfDay />
      </div>
      <div className="col-12  mt-3">
        <Button text="جست و جو" />
      </div>
    </div>
  );
};
export default Search;
