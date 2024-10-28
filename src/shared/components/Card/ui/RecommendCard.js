import {useState} from "react";
import './RecommendCard.css'

const RecommendCard = ({recommend}) => {

    const [data, setData] = useState(recommend);
    console.log('card check ' , data);


    if(data[0].hasOwnProperty('prductNm')){
        return (
            data.map((item, index) => (
            <div className="product_box" key={index}>
                <img className="img_thumb" src={item.prductImageUrl}></img>
                <div className="text_info">
                    <span className="name">{item.branchNm}</span>
                    <p className="desc">{item.prductNm}</p>
                    <strong className="sum">{item.crrncyCode} {item.netprc}</strong>
                </div>
            </div>
            ))
        )
    } else {
        return (
            data.map((item, index) => (
                <div className="product_box" key={index}>
                    <img className="img_thumb" src={item.trtImageUrl}></img>
                    <div className="text_info">
                        <span className="name">{item.ctgryNm}</span>
                        <p className="desc">{item.trtNm}</p>
                        <strong className="sum">{item.crrncyCode} {item.netprc}</strong>
                    </div>
                </div>
            ))
        )
    }

}
export default RecommendCard;