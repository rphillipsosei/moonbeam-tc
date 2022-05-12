import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";

const icon = {
  fontSize: "20px"
}
export const SidebarData = [
  {
    title: "Services",
    path: "/services",
    icon: <FaIcons.FaShapes style={icon} />,
    className: "nav-text",
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <FaIcons.FaShoppingCart style={icon} />,
    className: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaQuestionCircle style={icon} />,
    className: "nav-text",
  },
  {
    title: "Careers",
    path: "/careers",
    icon: <BsIcons.BsFillFilePersonFill style={icon} />,
    className: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <SiIcons.SiMinutemailer style={icon} />,
    className: "nav-text",
  },
];

