import "../css/Footer.css";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Footer = () => {
  return (
    <div className=" container">
      <div
        className="board board--footer  mt-3  d-flex justify-content-center
      align-item-center p-0 board-footer"
      >
        <ul
          className="w-75 list-unstyled h-100 align-items-center  d-flex w-75 board--footer--icon justify-content-between p-0 m-0   align-item-center
        justify-content-between"
        >
          <li>
            <EmailOutlinedIcon></EmailOutlinedIcon>
          </li>
          <a href="./favorit">
            <li>
              <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
            </li>
          </a>
          <a href="./">
            <li className="board--footer--active">
              <CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>
            </li>
          </a>
          <a href="./search">
            <li>
              <SearchOutlinedIcon></SearchOutlinedIcon>
            </li>
          </a>
          <li>
            <ChatOutlinedIcon></ChatOutlinedIcon>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
