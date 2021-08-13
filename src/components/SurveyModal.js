import React from 'react';

import './surveyModal.css';

class SurveyModal extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.closeModal = this.closeModal.bind(this);
        this.state = {showClass: 'modalDisplayed'};
    }

    closeModal() {
        console.log('clicked');
        this.setState({showClass:'modalHidden'});
    }

    render(){
        return (
        <div className={this.state.showClass}>
            <section className="surveyContent">
                <div className="announcementContainer">
                    <p>Ciao!</p>
                    <p>
                        Volevamo chiederti un parere. Potresti rispondere a questo sondaggio?
                    </p>
                    <a href="https://freeonlinesurveys.com/s/KaYmi8kg" target="_blank">Link per il sondaggio</a>
                    <br></br>
                    <p>Hello!</p>
                    <p>
                        We would like to ask you a couple of questions. Could you please complete this survey?
                    </p>
                    <a href="https://freeonlinesurveys.com/s/RFtgJbXB" target="_blank">Survey link</a>
                </div>
                <div className="closeButtonContainer">
                    <button className="closeButton" onClick={this.closeModal}>
                        <img width="30px" height="30px" src="img/close-icon.png"/>
                    </button>
                </div>
            </section>
        </div>
        );
    }
};

export default SurveyModal;