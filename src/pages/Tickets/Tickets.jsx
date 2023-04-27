import MainSection from "../../containers/MainSection/MainSection";
import SideBar from "../../containers/Sidebar/Sidebar";
import "./tickets.scss";

const Tickets = () => {
  return (
    <div className="tickets">
      <SideBar />
      <MainSection />
    </div>
  );
};

export default Tickets;
