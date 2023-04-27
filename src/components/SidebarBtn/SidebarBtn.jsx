import "./sidebarBtn.scss";

const SideBarBtn = ({ title, icon}) => {
  return (
    <button className="btn">
      <span className="btn-icon">{icon}</span>
      <span>{title}</span>
    </button>
  );
};

export default SideBarBtn;
