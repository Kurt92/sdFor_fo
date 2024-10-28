import "./LeftNavbar.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const LeftNavbar = () => {

    let [menu, setMenu] = useState();
    let [test, setTest] = useState();

    let getMenuList = () => {
        axios
            .get("http://localhost:8088/api/menu/tree")
            .then((result) => {
                let res = result.data.data
                setMenu(res);
            })
            .catch(() => {
                console.log("failed");
            });
    }

    useEffect(() => {
        getMenuList();
    }, [])


    return (
        <>
            <div className={"left-navbar"}>
                <div className={"user-info"}>
                    <div className={"img-area"}>img</div>
                    <div className={"info-area"}>
                        <div className={"name"}>name</div>
                        <div className={"version_master"}>role</div>
                    </div>
                </div>
                <div className={"menu_gnb"}>
                    <ul className={"gnb_list"}>
                        {menu && menu.map((item, index) => {
                            if (item.children.length > 0) {
                                return (
                                    <li key={`main-${index}`}>
                                        <span className="main-link">{item.menuPath}</span>
                                        <ul className={"sub_list"}>
                                            {item.children.map((subItem, subIndex) => (
                                                <li key={`sub-${subIndex}`}>
                                                    <Link to={subItem.url}>
                                                        <span className={"sub-link"}>{subItem.menuPath}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={`main-${index}`}>
                                        <span className="main-link">{item.menuPath}</span>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LeftNavbar;
