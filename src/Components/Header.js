import Menu from "../Components/Burger-menu";
import "../css/Header.css";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
const Header = ({title}) => {
  return (
    <div className=" mb-3">
      <div className="board header-board d-block">
        <div className="menubar">
          <Menu customBurgerIcon={<MenuTwoToneIcon />} />
        </div>
        <div className="d-flex align-items-center justify-content-center h-100  ">
          {title}
        </div>
      </div>
    </div>
  );
};
export default Header;
