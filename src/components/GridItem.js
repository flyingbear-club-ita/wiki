import React from 'react';

import './Upgrades.css';
import './modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose}>
            Chiudi
          </button>
        </section>
      </div>
    );
  };

  function setBaseUrl(url){
    try {
        if (process.env.ENV == 'dev'){
            return url
        }
    }
    finally{
        return 'https://flyingbearghost.com/'+url
    }
}

class GridItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: false}
        this.props = props;
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.imgUrl =  setBaseUrl(props.img);
    }
    
    showModal()  {
        this.setState({ show: true });
    }
    
    hideModal() {
        console.log('clicked')
        this.setState({ show: false });
    }

    render(){        
        return(
		
            <div className='upgradeItemContainer'>
                <div className={`upgradeItem ${this.props.difficulty}`} onClick={this.showModal}>
                    <span className='upgradeItemTitle'>{this.props.title}</span>
                    <div className='upgradeItemInfo'>
                        <img className='upgradeItemImg' src={this.imgUrl}/>
                        <p className='upgradeItemDescription'>{this.props.description}</p>
                    </div>    
                </div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                        <h1 className={`title ${this.props.difficulty}`}>{this.props.title}</h1>
                        <div className='infoContainer'>
                            <img width="200" height="200" src={setBaseUrl(this.props.img)}></img>
                            <div className='descriptionContainer'>
                                <p className="description">{this.props.detailedDescription}</p>
                                { this.props.descriptionImage!=null &&
                                    <img src={setBaseUrl(this.props.descriptionImage)} width="70%" height="80%"/>
                                }
                            </div>
                        </div>
                        {this.props.links.map(function (link, i) {
                           return <a className='link' href={link} target="_blank">Link {i+1}</a>
                        })}
                </Modal>
            </div>
        )
    }
}

export default GridItem;
