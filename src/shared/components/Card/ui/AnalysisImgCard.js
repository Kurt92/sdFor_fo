import {useState} from "react";

const AnalysisImgCard = ({detailData}) => {

    const [data, setData] = useState(detailData);

    console.log('props check');

    return (
        <ul className="result_wrap dtls_user_img" id="analysisResult">
            {data.analysisResults.map((result, index) => (
                <li key={index}>
                    {/*<div className="product_wrap no_data">No Photo</div>*/}
                    <div className="result_thumb">
                        <img src={data.analysisResults[index].imageUrl} alt="Analysis image"/>
                        <span className="btn_small_light">trb</span>
                    </div>
                    <p className="t_bottom">
                        <span className="name">Score</span>
                        <span className="count">
                            <strong>{data.analysisResults[index].score}</strong> /10
                        </span>
                    </p>
                </li>
            ))}
        </ul>
    )

}

export default AnalysisImgCard;