import "bootstrap/dist/css/bootstrap.css";
const CardInfo = ({ text, color = "balck", bg = "white", children }) => {
  return (
    <div
      style={{ backgroundColor: bg, color: color }}
      className="d-flex p-3  w-100 h-100 info--card--info"
    >
      <span id="icon" className="px-2">
        {children}
      </span>
      <p className="">{text}</p>
    </div>
  );
};
export default CardInfo;
