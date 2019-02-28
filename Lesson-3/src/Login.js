import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
            <h4>{this.props.titleLogin}</h4>
            <form>
                <label>{this.props.name}
                    <input type="email" placeholder=" email@email.ru "/>
                </label>
                <label>{this.props.pass} 
                    <input type="password"/>
                </label>
                <button>{this.props.btn}</button>
            </form>
            </div>
        );
    }
};

export default Login;