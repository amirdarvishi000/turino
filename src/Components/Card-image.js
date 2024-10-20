import "../css/Card-image.css";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";
const Card = ({ img, title, type }) => {
  var style = {
    backgroundImage:
      "linear-gradient(90deg,rgba(175, 0, 181, 0.2) 0%,rgba(175, 0, 181, 0.2) 0%), url(" +
      img +
      ")"
  };
  if (type == "home") {
    return (
      <a href="./info">
        <div className="card--item mb-2" style={style}>
          <div className="h-100 px-md-5 font-weight-bold px-3  d-flex align-items-center justify-content-between">
            <h3 className="font-weight-bold">{title}</h3>
            <div>
              <ul className="list-unstyled text-align-end">
                <li className="py-1">
                  <h6 className="">11 بهمن</h6>
                </li>
                <li className="py-1">
                  <h6 className="">2 روز</h6>
                </li>
                <li className="py-1">
                  <h6 className="">500 هزار تومن</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
    );
  } else if (type == "card-info") {
    return (
      <div className="info--card info--card--info mt-3 d-flex" style={style}>
        <ul className="list-unstyled mb-2">
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
          <li></li>
        </ul>
      </div>
    );
  } else if (type == "card-favorit") {
    return (
      <a href="./info">
        <div className="card--item card-favorit mb-2" style={style}>
          <div className="h-100 px-md-5 font-weight-bold px-3  d-flex align-items-center justify-content-between">
            <h3 className="font-weight-bold">{title}</h3>
            <div>
              <ul className="list-unstyled text-align-end">
                <li className="py-1">
                  <h6 className="font-weight-bold">11 بهمن</h6>
                </li>
                <li className="py-1">
                  <h6 className="font-weight-bold">2 روز</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
    );
  } else if (type == "my-program") {
    return (
      <div>
        <div className="d-flex">
          <a
            href="./info"
            className="my--program--img-card card--item card-favorit "
            style={style}
          >
            <div className="h-100 px-md-5 font-weight-bold px-3  d-flex align-items-center justify-content-between">
              <h3 className="font-weight-bold">{title}</h3>
              <div>
                <ul className="list-unstyled text-align-end">
                  <li className="py-1">
                    <h6 className="font-weight-bold">11 بهمن</h6>
                  </li>
                  <li className="py-1">
                    <h6 className="font-weight-bold">2 روز</h6>
                  </li>
                </ul>
              </div>
            </div>
          </a>

          <div className="d-flex align-items-center">
            <div className="d-flex">
              <div className="p-3 hover--scondary myProgram--icon">
                <LocalPrintshopOutlinedIcon />
              </div>
              <div className="p-3 hover--scondary myProgram--icon">
                <ChatOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
        <hr
          className="m-1"
          style={{
            width: "100%",
            borderWidth: "1px",
            color: "#888888",
            backgroundColor: "gray"
          }}
        />
      </div>
    );
  }
};
export default Card;
