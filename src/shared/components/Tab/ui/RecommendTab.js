import {useState} from "react";
import {Tab, Tabs} from "@mui/material";

import RecommendCard from "../../Card/ui/RecommendCard";
import RecommendTapPanel from "./RecommendTapPanel";


const RecommendTab = ({detailData}) => {

    const [data, setData] = useState(detailData);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const tabs = [
        { label: 'cleansers', content: <RecommendCard recommend={data}/> },
        { label: 'toners', content: <RecommendCard recommend={data}/> },
        { label: 'essences', content: <RecommendCard recommend={data}/> },
        { label: 'lotions', content: <RecommendCard recommend={data}/> },
        { label: 'creams', content: <RecommendCard recommend={data}/> },
        { label: 'mists', content: <RecommendCard recommend={data}/> },
        { label: 'facialOils', content: <RecommendCard recommend={data}/> },
        { label: 'masks', content: <RecommendCard recommend={data}/> },
        { label: 'sunscreens', content: <RecommendCard recommend={data}/> },
    ];

    return (
        <div className="tabs">
            <Tabs value={activeTab} onChange={handleTabChange}>
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label} />
                ))}
            </Tabs>
            {tabs.map((tab, index) => (
                <RecommendTapPanel key={index} value={activeTab} index={index}>
                    {tab.content}
                </RecommendTapPanel>
            ))}
        </div>
    );

}
export default RecommendTab