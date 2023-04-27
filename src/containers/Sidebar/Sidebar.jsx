import SideBarBtn from "../../components/SidebarBtn/SidebarBtn";
import "./sidebar.scss";
import {
  Chart,
  Settings,
  Subscription,
  Contacts,
  Agents,
  Articles,
  Tickets,
  Ideas,
} from "../../assets/icons/Icon";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarBtn icon={<Chart />} title="Overview" />
      <SideBarBtn icon={<Tickets />} title="Tickets" />
      <SideBarBtn icon={<Ideas />} title="Ideas" />
      <SideBarBtn icon={<Contacts />} title="Contacts" />
      <SideBarBtn icon={<Agents />} title="Agents" />
      <SideBarBtn icon={<Articles />} title="Articles" />
      <SideBarBtn icon={<Settings />} title="Settings" />
      <SideBarBtn icon={<Subscription />} title="Subscriptions" />
    </div>
  );
};

export default SideBar;
