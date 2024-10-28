import './Login.css'
// import logoImage from '../../../../public/images/img_logo.png'
import axios from "axios";
import {Link} from "react-router-dom";


export const Login = () => {

    let getInfo = () => {
        axios
            .get()
            .then(() => {

            })
            .catch(() => {

            })

    }

    return (
        <>
            <div className="log_main_wrapper">
                <div className="log_form">
                    <div className="logo-wrap d-flex justify-content-center">
                        <img src="images/logo.png" alt="logo-image" />
                    </div>
                    <div className="log_content">
                        Welcome to the lululab's back-office solution. <br/>
                        Please click the button below to log in and access the solution.<br/>
                        (This solution is only accessible to authenticated users.)
                    </div>
                </div>
                <div className="log_button">
                    <Link to={'http://localhost:8088/sso/lululab'}>
                    <button className="btn_big_navy" id="ssoBtn">Go to Login</button>
                    </Link>
                </div>
                <div className="log_footer mt30">
                    <span className="sec"> Contact <a href="#">lululab@lulu-lab.com</a></span>
                    <strong className="sec">
                        {/*<a href="#" id="btnServicePolicy">Terms of Service</a>*/}
                    </strong>
                </div>
                <div className="log_copyright">
                    <p>© 2023 lululab Inc. All rights reserved.</p>
                </div>
            </div>
        </>

    )
}

export default Login;
