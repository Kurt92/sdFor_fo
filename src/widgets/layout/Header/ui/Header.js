import {Link} from "react-router-dom";
import '../ui/Header.css'
import MyAccountBtn from "../../../../shared/components/Button/MyAccountBtn";

export const Header = () => {



    return (
        <>
            <div className="header">
                <Link className="logo-area" to="/main">
                    <div className="logo"></div>
                </Link>
                <div className="header-menu-area">
                    <div className="header_other_site">
                    <span className="header_other_site_title">
                    </span>
                    </div>
                </div>
                <div>
                    <MyAccountBtn/>
                </div>
            </div>
        </>
    )
}

export default Header;
