import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';

class App extends React.Component {
    render() {
        const menuItems = [
            {href: "/", title: "Главная"},
            {href: "/about", title: "О нас"},
            {href: "/service", title: "Услуги"},
            {href: "/contacts", title: "Контакты"}
        ];

        // const input = [
        //     {type: "text", title: "Имя пользователя"},
        //     {type: "text",
        //     title: "Пароль"}
        // ];

        return <div>
            <h1>Моё первое приложение на ReactJS!</h1>
            <Login titleLogin="Авторизация на сайте:" name="Имя пользователя: " pass=" Пароль: " btn="Войти"/>
            <hr></hr>
            <Menu titleMenu="Основное меню сайта" items={menuItems}/>
            <hr></hr>
            <p>Hello React!</p>
        </div>;
    }
};

ReactDOM.render(<App/>, document.querySelector('#root'));