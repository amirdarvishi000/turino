import Textbox from "../Components/Text-box";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import BorderOuterTwoToneIcon from "@mui/icons-material/BorderOuterTwoTone";
import RangeMoney from "../Components/Range-money";
import Rating from "../Components/Rating";
import Locationselector from "../Components/Location-selector";
import CountOfDay from "../Components/Count-of-day-selector";
import AddLocationTwoToneIcon from "@mui/icons-material/AddLocationTwoTone";
import AddModeratorTwoToneIcon from "@mui/icons-material/AddModeratorTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import InsertInvitationTwoToneIcon from "@mui/icons-material/InsertInvitationTwoTone";
import Button from "../Components/Button";
import HomeRepairServiceTwoToneIcon from "@mui/icons-material/HomeRepairServiceTwoTone";
import FileUpload from "../Components/Files-Upload";
import UploadFileTwoToneIcon from "@mui/icons-material/UploadFileTwoTone";
const ProgramOffer = () => {
  return (
    <div>
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
          <Textbox text="مقصد" placeholder="مثلا روستای لنگر">
            <AddLocationTwoToneIcon></AddLocationTwoToneIcon>
          </Textbox>
        </div>
        <div className="col-12 col-md-6 mt-2">
          <Textbox text="نکات ایمنی" placeholder="مثلا برداشتن کلاه زمستانی">
            <AddModeratorTwoToneIcon></AddModeratorTwoToneIcon>
          </Textbox>
        </div>
        <div className="col-12 col-md-6 mt-2">
          <Textbox text="تاریخ پیشنهادی" placeholder="مثلا 1403/01/01">
            <InsertInvitationTwoToneIcon></InsertInvitationTwoToneIcon>
          </Textbox>
        </div>
        <div className="col-12 col-md-6 mt-2">
          <Textbox
            type="textarea"
            text="وسایل مورد نیاز"
            placeholder="مثلا کفش کوه نوردی"
          >
            <HomeRepairServiceTwoToneIcon></HomeRepairServiceTwoToneIcon>
          </Textbox>
        </div>
        <div className="col-12 col-md-6 mt-2">
          <Textbox
            type="textarea"
            text="توضیحات"
            placeholder="مثلا این برنامه شامل کوه نوردی نیم سنگین است و از آوردن کودکان زیر 15 سال خودداری کنید"
          >
            <DescriptionTwoToneIcon></DescriptionTwoToneIcon>
          </Textbox>
        </div>
        <div className="col-12 col-md-6 mt-2">
          <Textbox
            type="upload-file"
            text="عکس و فیلم محل برگذاری"
            placeholder="مثلا این برنامه شامل کوه نوردی نیم سنگین است و از آوردن کودکان زیر 15 سال خودداری کنید"
          >
            <UploadFileTwoToneIcon></UploadFileTwoToneIcon>
          </Textbox>
        </div>
        <div className="col-12 mt-2">
          <Button text="ثبت" />
        </div>
      </div>
    </div>
  );
};
export default ProgramOffer;
