import React from "react";
import DaStampare from "../components/DaStampare";
import DisplayAd from "../components/displayAd";
import Layout from '@theme/Layout';
import { daStampareData } from '../data/daStampareData'

class DaStamparePage extends React.Component {
    render() {
        return <Layout>
            {daStampareData.map( item => {
                    if (item === "advertisement") {
                      return <DisplayAd/>
                    } else {
                           return <DaStampare 
                                    id= {item.id}
                                    title = {item.title}
                                    introduction = { item.introduction }
                                    images = { item.images }
                                    links = { item.links }
                                />
                    }
            })}
            
        </Layout>

    }
}

export default DaStamparePage