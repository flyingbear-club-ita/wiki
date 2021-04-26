import React from 'react';
import './Upgrades.css';
import './modal.css'
import {upgradesData} from '../data/upgradesData';


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };

class UpgradeItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: false}
        this.props = props
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
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
                <div className='upgradeItem' onClick={this.showModal}>
                    <span className='upgradeItemTitle'>{this.props.title}</span>
                    <div className='upgradeItemInfo'>
                        <img className='upgradeItemImg' src='https://via.placeholder.com/170'/>
                        <p className='upgradeItemDescription'>{this.props.description}</p>
                    </div>    
                </div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                        <h1>{this.props.title}</h1>
                </Modal>
            </div>
        )
    }
}

class Upgrades extends React.Component{
    constructor(props){
        super(props)
        console.log(upgradesData)
    }

    render(){
        return(
            <div id='upgradeItems'>
                {
                upgradesData.map( item => (
                    <UpgradeItem title={item.title} description={item.desc}/>
                ))
                }
            </div>
        )
    }
}

export default Upgrades