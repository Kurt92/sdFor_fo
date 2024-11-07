import './Login.css'
// import logoImage from '../../../../public/images/img_logo.png'
import axios from "axios";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Button, IconButton, TextField} from "@mui/material";
import {RiKakaoTalkFill} from "react-icons/ri";
import {SiNaver} from "react-icons/si";
import {FaGoogle} from "react-icons/fa";


export const Login = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    let login = () => {
        axios
            .post("http://localhost:8011/auth/login",
                {id, password},
                { withCredentials: true })
            .then((res) => {
                console.log(res)
            })
            .catch(() => {
                console.log("failed");
            })

    }



    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 처리 로직 (API 호출 등)
        console.log('Id:', id);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-title">로그인</h2>

                <div className="input-group">
                    <TextField
                        label="이메일"
                        variant="outlined"
                        fullWidth
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                        margin="normal"
                    />
                </div>
                <div className="input-group">
                    <TextField
                        label="비밀번호"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        margin="normal"
                    />
                </div>
                {/*<div className="social-buttons">*/}
                {/*    <IconButton className="social-icon" aria-label="Google 로그인">*/}
                {/*        <FaGoogle color="#DB4437" size="24"/>*/}
                {/*    </IconButton>*/}
                {/*    <IconButton className="social-icon" aria-label="Kakao 로그인">*/}
                {/*        <RiKakaoTalkFill color="#FEE500" size="24"/>*/}
                {/*    </IconButton>*/}
                {/*    <IconButton className="social-icon" aria-label="Naver 로그인">*/}
                {/*        <SiNaver color="#03C75A" size="24"/>*/}
                {/*    </IconButton>*/}
                {/*</div>*/}
                <Button
                    type="submit"
                    variant="contained"
                    sx={{backgroundColor: '#1e1e3d', '&:hover': {backgroundColor: '#1e1e3d'}}}
                    fullWidth
                    className="login-button"
                    onClick={login}
                >
                    로그인
                </Button>
            </form>
        </div>
    );

}

export default Login;
