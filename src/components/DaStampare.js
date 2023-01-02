import React from "react";
// import Slideshow from './Slideshow'
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';


import './daStampare.css'

export default class DaStampare extends React.Component {

    constructor(props){
        super(props);
        this.props = props
        this.state = {collapsed: true};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('clicked')
        this.setState({collapsed: !this.state.collapsed});
    }

    render() {
        var collapsibleState = this.state.collapsed ? "content collapsed": "content expanded";
        return(
            <div className="articleContainer">
                <div className="collapsible" onClick={ this.handleClick }>{this.props.title}</div>
                <div className={ collapsibleState }>
                    { this.props.introduction.map( element => <p> { element } </p>)}
                    <ImageGallery items={this.props.images} showThumbnails={false}/>
                    {this.props.links.map( link => <p className="daStampareLink"><b>Link: </b><a className='link' href={link} target="_blank">{link}</a></p>)}
                    {/* <p className="daStampareLink"><b>Link: </b><a className='link' href={this.props.link} target="_blank">{this.props.link}</a></p> */}
                </div>
            </div>
        )
    }
}