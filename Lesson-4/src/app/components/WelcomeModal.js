import React from 'react';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    };

    render() {
        let welcomeModal;
        if(this.state.modal) {
            welcomeModal = <div className="ModalWindowBG">
                <div className="ModalWindowInside">Welcome to "Post Block"!
                    <button className="ModalClose" onClick={() => {
                        this.setState({modal: !this.state.modal})
                    }}>X</button>
                </div>
            </div>
        }

        return (
            <div className="WelcomeModal">
                {welcomeModal}
            </div>
        )
    };

    componentDidMount() {
        this.setState({modal:!this.state.modal});
    };
};

export default WelcomeModal;