import { slide as Menu } from "react-burger-menu";
import "../css/Burger-menu.css";
import Badge from "../Components/Badge";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

const MenuItems = [
  { name: "پروفایل", url: "" },
  { name: "گروه ها", url: "" },
  { name: "همسفران", url: "./register" },
  { name: "برنامه های من", url: "./my-program" },
  { name: "وسایل من", url: "" },
  { name: "بن ها", url: "" },
  { name: "پیشنهاد برنامه", url: "./program-offer" },
  { name: "گالری", url: "" },
  { name: "درباره ما", url: "/about" },
  { name: "تنظیمات", url: "" },
  { name: "سوالات متداول", url: "" },
  { name: "بازخورد", url: "" }
];
const Menu_ = () => {
  return (
    <div>
      <Menu right customCrossIcon={<CloseTwoToneIcon />}>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="profile-img"
            style={{ width: " 150px;" }}
            alt="Avatar"
          />
        </div>
        <div className="profile--name--items">
          <h2 className="my-4 font-weight-bold text-white">علی نظری</h2>
          <div className="d-flex profile--items--badge justify-content-center">
            <Badge text="گروه : پیشگامان" />
            <Badge text="خروج از گروه" bg="bg-danger" />
          </div>
        </div>
        <div
          style={{ display: "auto" }}
          className="w-100 mt-3 mb-3 justify-content-center align-items-center"
        >
          <ul className="list-group  list-group-flush">
            {MenuItems.map((item) => (
              <a
                href={item.url}
                className="burger-menu-items py-3 list-group-item"
              >
                {item.name}
              </a>
            ))}
          </ul>
        </div>
        {/* <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a className="menu-item--small" href="">
          Settings
        </a> */}
      </Menu>
    </div>
  );
};
export default Menu_;
