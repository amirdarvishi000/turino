const Badge = ({ bg = "badge-success", text }) => {
  return <span className={`badge p-2 px-3 m-1 badge-pill ${bg}`}>{text}</span>;
};
export default Badge;
