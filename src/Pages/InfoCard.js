import "../css/InfoCard.css";
import Popup from "reactjs-popup";
import Button from "../Components/Button";
import PopUp from "../Components/PopUp";
import "reactjs-popup/dist/index.css";
import Badge from "../Components/Badge";
import ArticleTwoToneIcon from "@mui/icons-material/ArticleTwoTone";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import DateRangeTwoToneIcon from "@mui/icons-material/DateRangeTwoTone";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import AddLocationTwoToneIcon from "@mui/icons-material/AddLocationTwoTone";
import DepartureBoardTwoToneIcon from "@mui/icons-material/DepartureBoardTwoTone";
import AssignmentIndTwoToneIcon from "@mui/icons-material/AssignmentIndTwoTone";
import CardInfo from "../Components/Card-info";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import RedeemTwoToneIcon from "@mui/icons-material/RedeemTwoTone";
import AirportShuttleTwoToneIcon from "@mui/icons-material/AirportShuttleTwoTone";
import ShieldTwoToneIcon from "@mui/icons-material/ShieldTwoTone";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import CardTitle from "../Components/Card-title";
import CardImage from "../Components/Card-image";
const InfoCard = () => {
  const warning = (
    <ul className="mx-4">
      <li>
        <p>بدون اطلاع لیدر از گروه جدا نشوید</p>
      </li>
      <li>
        <p>وسایل و مسولیت های خود را حتما انجام دهید</p>
      </li>
      <li>
        <p>وسایل گرانقیمت را همراه خود نیاورید</p>
      </li>
      <li>
        <p>به حیوانات مطلقا نزدیک نشوید</p>
      </li>
    </ul>
  );

  return (
    <div className="">
      <CardTitle text="جواهر دره رامسر" />
      <CardImage
        type="card-info"
        img="https://irangard.com/mag/wp-content/uploads/2020/08/Javaher-Deh-1000x670.jpg"
      />
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4  mt-3">
          <CardInfo color="white" bg="var(--secondary)" text="1394 / 02 / 17">
            <DateRangeTwoToneIcon></DateRangeTwoToneIcon>
          </CardInfo>
        </div>

        <div className="col-12 col-md-6 col-lg-4  mt-3">
          <CardInfo color="white" bg="var(--secondary)" text="500 هزار تومان">
            <CreditCardTwoToneIcon></CreditCardTwoToneIcon>{" "}
          </CardInfo>
        </div>
        <div className="col-12 col-md-12 col-lg-4  mt-3">
          <CardInfo color="white" bg="var(--secondary)" text="سه روز">
            <EventTwoToneIcon></EventTwoToneIcon>
          </CardInfo>
        </div>
        <div className="col-12 mt-3">
          <CardInfo
            text="این برنامه به صورت فول آفرود در جاده ی زیبای جواهر دره رامسر به
                 صورت فول برد برگذار خواهد شد
                 "
          >
            <ArticleTwoToneIcon></ArticleTwoToneIcon>
          </CardInfo>
          <span className="px-2"></span>
          <p></p>
        </div>
        <div className=" col-6 mt-3">
          <CardInfo text="مکان حرکت : میدان آزادی">
            <AddLocationTwoToneIcon></AddLocationTwoToneIcon>
          </CardInfo>
        </div>
        <div className="d-flex col-6 mt-3">
          <CardInfo text="زمان حرکت : 6 صبح">
            <DepartureBoardTwoToneIcon></DepartureBoardTwoToneIcon>
          </CardInfo>
        </div>
        <div className="d-flex col-6 mt-3">
          <CardInfo text="سرپرست : پیام محمدی">
            <AssignmentIndTwoToneIcon></AssignmentIndTwoToneIcon>
          </CardInfo>
        </div>
        <div className="d-flex col-6 mt-3">
          <CardInfo text="نوع برنامه : آفرود">
            <DepartureBoardTwoToneIcon></DepartureBoardTwoToneIcon>
          </CardInfo>
        </div>
        <div className="d-flex col-6 mt-3">
          <CardInfo text="ظرفیت : 30 نفر">
            <PeopleAltTwoToneIcon></PeopleAltTwoToneIcon>
          </CardInfo>
        </div>
        <div className="d-flex col-6 mt-3">
          <CardInfo text="حداکثر بن قابل استفاده : 20 عدد">
            <RedeemTwoToneIcon></RedeemTwoToneIcon>
          </CardInfo>
        </div>
        <div className="d-flex col-6 mt-3">
          <CardInfo text="روش های دسترسی : اتوبوس توریستی , ماشین آفرود">
            <AirportShuttleTwoToneIcon></AirportShuttleTwoToneIcon>
          </CardInfo>
        </div>
        <div className="d-flex col-6 mt-3">
          <CardInfo text="خدمات : ترنسفر , بیمه , لیدر کارت , چای آتیشی">
            <ShieldTwoToneIcon></ShieldTwoToneIcon>
          </CardInfo>
        </div>
        <div className="col-12 mt-3">
          <PopUp></PopUp>
        </div>
        <div className="col-12 mt-3">
          <CardInfo
            text={
              <div>
                <p>وسایل مورد نیاز :</p>
                <Badge text="کوله پشتی" />
                <Badge text="کفش کوهنوردی" />
                <Badge text="لباس خواب" bg="badge-danger" />
                <Badge text="فلاسک" />
                <Badge text="کیسه خواب" />
                <Badge bg="badge-danger" text="ظروف شخصی" />
              </div>
            }
          >
            <BusinessCenterTwoToneIcon></BusinessCenterTwoToneIcon>
          </CardInfo>
        </div>
        <div className="warning d-flex col-12 mt-3">
          <CardInfo text={warning}>
            <ErrorTwoToneIcon></ErrorTwoToneIcon>
          </CardInfo>
        </div>
        <div className="col-12 mt-3">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "70%" }}
            >
              <h6 className="m-0">70 نفر باقی مانده</h6>
            </div>
          </div>
        </div>
        <div className="col-12 mt-3">
          <a href="./register">
            <Button text="ثبت نام" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
