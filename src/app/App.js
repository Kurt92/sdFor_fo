import React from "react";
import '../shared/App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "../widgets/layout/Header";
import '../shared/common.css'
import LeftNavbar from "../widgets/layout/Navbar/ui/LeftNavbar";
import Board from "../widgets/layout/Contents/board/ui/Board";
import SearchInput from "../shared/components/Input/Search/ui/SearchInput";
import AddToGroupBtn from "../shared/components/Button/AddToGroupBtn";
import MyAccountBtn from "../shared/components/Button/MyAccountBtn";
import SearchFilterBtn from "../shared/components/Button/SearchFilterBtn";
import DownloadExcelBtn from "../shared/components/Button/DownloadExcelBtn";
import SendMsgBtn from "../shared/components/Button/SendMsgBtn";
import TestCheckbox from "../shared/components/Button/TestCheckbox";
import {Login} from "../pages/Login";
import SearchFilter from "../widgets/searchFilter/ui/SearchFilter";
import BoardDetail from "../widgets/layout/Contents/board/ui/BoardDetail";
import SpinLoadingBar from "../shared/components/LoadingBar/ui/SpinLoadingBar";
import {useSelector} from "react-redux";
import Layout from "../widgets/layout/Layout/Layout";
import Input from "../widgets/layout/Contents/input/ui/Input";

function App() {

    // const dataIdSlice = useSelector(state => state.dataIdSlice)

    return(
        <div className="App">
            <Routes>
                {/* 메인페이지에 대한 리다이렉션 */}
                <Route path="/" element={<Navigate to="/main" replace />} />

                <Route path="/login" element={<Login/>}/>

                <Route path="/main" element={<Layout />}>
                    <Route index element={""} />
                </Route>

                <Route path="/board" element={<Layout />}>
                    <Route index element={<Board />} />
                    <Route path="detail" element={<BoardDetail />} />
                </Route>

                <Route path="/input" element={<Layout />}>
                    <Route index element={<Input />} />

                </Route>



                    {/*for test*/}


                <Route path="/make-bar" element={
                    <>
                        <SearchInput/>
                    </>
                }
                />

                <Route path="/make-btn" element={
                    <>
                        <AddToGroupBtn/>
                        <DownloadExcelBtn/>
                        <MyAccountBtn/>
                        <SearchFilterBtn/>
                        <SendMsgBtn/>

                        <br/><br/><br/>
                        <TestCheckbox/>
                    </>
                }
                />

                <Route path="/make-searchfilter" element={
                    <>
                        <SearchFilter/>
                    </>
                }
                />

                <Route path="/make-spinLoadingBar" element={
                    <>
                        <SpinLoadingBar/>
                    </>
                }
                />

                {/*for check*/}


            </Routes>


        </div>
    );
}

export default App;
