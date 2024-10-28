import "./contentsCustomerDetail.css"
import GroupListBtn from "../../../../shared/components/Button/GroupListBtn";
import PreviousReportBtn from "../../../../shared/components/Button/PreviousReportBtn";
import BeforeAfterBtn from "../../../../shared/components/Button/BeforeAfterBtn";
import axios from "axios";
import {useEffect, useState} from "react";
import SpinLoadingBar from "../../../../shared/components/LoadingBar/ui/SpinLoadingBar";
import {useSelector} from "react-redux";
import AnalysisImgCard from "../../../../shared/components/Card/ui/AnalysisImgCard";
import RecommendTab from "../../../../shared/components/Tab/ui/RecommendTab";
import RecommendCard from "../../../../shared/components/Card/ui/RecommendCard";

const ContentsCustomerDetail = () => {

    const dataId = useSelector(state => state.dataId)
    const [detailData, setDetailData] = useState();
    let getDetail = () => {
        console.log("dataID", dataId);
        axios
            .get("/sampleData/customerDetail.json")
            .then((result) => {
                setTimeout(()=>{
                    setDetailData(result.data.data);
                    console.log(result.data.data);
                },2000)
                console.log(dataId);
            })
            .catch(() => {
                console.log("fail")
            })

    }

    useEffect(() => {
        getDetail();
    }, [])

    if(!detailData) {
        return <SpinLoadingBar/>
    }

    return (
        <>
            <div className={"contents_area flex flex-col w_100"}>
                <div className="content_place ">
                    <h2 className="text_2">info</h2>
                    <div className="layer_sec ">
                        <dl className="set_info flex w_100">
                            <dt>Name</dt>
                            <dd id="cstmrNm">{detailData.info.customer.cstmrNm}</dd>
                            <dt>E-Mail</dt>
                            <dd id="email">{detailData.info.customer.email}</dd>
                        </dl>
                        <dl className="set_info flex w_100">
                            <dt>Birthday</dt>
                            <dd id="brthdy">{detailData.info.customer.brthdy}</dd>
                            <dt>Gender</dt>
                            <dd id="gender">{detailData.info.customer.gender}</dd>
                        </dl>
                        <dl className="set_info flex w_100">
                            <dt>Terms of Use</dt>
                            <dd id="agreAt">{detailData.info.customer.agreAt}</dd>
                            <dt>Marketing</dt>
                            <dd id="optTouAt">{detailData.info.customer.optTouAt}</dd>
                        </dl>
                    </div>
                    <div className="position_r">
                        <GroupListBtn/>
                    </div>
                </div>

                <div className="content_place">
                    <h2 className="text_2">skin data</h2>
                    <div className="position_r">
                        <PreviousReportBtn/>
                        <BeforeAfterBtn/>
                    </div>
                    <div className="layer_sec mt-3">
                        <dl className="set_info">
                            <dt>Skin Type</dt>
                            <dd id="skinTy">{detailData.info.skinData.skinTy}</dd>
                            <dt>Skin Concerns</dt>
                            <dd id="skinWr">{detailData.info.skinData.skinWr}</dd>
                        </dl>
                        <dl className="set_info">
                            <dt>Branch</dt>
                            <dd id="bhfNm">{detailData.info.skinData.bhfNm}</dd>
                            <dt>Last Visit</dt>
                            <dd id="visitDt">{detailData.info.skinData.visitDt}</dd>
                        </dl>
                        <div className="divide_sec">
                            <h3 className="sub_migrate">Skin Analysis Results</h3>
                            <AnalysisImgCard detailData={detailData}/>
                        </div>
                    </div>
                </div>

                <div className="content_place">
                    <h2 className="text_2">Recommendation</h2>
                    <div className="layer_sec">
                        <div className="divide_sec">
                            <h3 className="sub_migrate">Product Recommendation</h3>
                            <div className="tab_wrap_2" id="tabs">
                                <RecommendTab detailData={detailData.recommendation.products}/>
                                <div className="divide_sec">
                                    <h3 className="sub_migrate">Recommended Treatments</h3>
                                    <div className="product_wrap flex overflow-auto" id="treatmentArea">
                                        <RecommendCard recommend={detailData.recommendation.treatments}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ContentsCustomerDetail;