import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs"

export const SidebarData = [

    {
        title: "Services",
        path: "/services",
        icon: <MdIcons.MdMiscellaneousServices />,
        className: "nav-text"
    },
    {
        title: "Shop",
        path: "/shop",
        icon: <FaIcons.FaShoppingCart />,
        className: "nav-text"
    },
    {
        title: "Careers",
        path: "/careers",
        icon: <BsIcons.BsFillFilePersonFill />,
        className: "nav-text"
    },
    {
        title: "About",
        path: "/about",
        icon: <FaIcons.FaQuestionCircle />,
        className: "nav-text"
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <SiIcons.SiMinutemailer />,
        className: "nav-text"
    }


   
    ]