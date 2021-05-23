import React from 'react';
// import { upgradesData } from '../data/upgradesData';
import GridItem from './GridItem';

class Upgrades extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return(
            <div id='upgradeItems'>
                {
                this.props.data.map( item => (
                    <GridItem 
                        title={item.title} 
                        description={item.desc} 
                        link={item.link} 
                        img={item.img} 
                        detailedDescription={item.description}
                    />
                ))
                }
            </div>
        )
    }
}

export default Upgrades