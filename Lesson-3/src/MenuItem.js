import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
    render() {
        // если не переданы данные, то
        // дедовский способ: (+ в return между <a></a> пишем {title})
        // let title;
        // if (this.props.children) {
        //     title = this.props.children;
        // } else {
        //     title = "Пустота";
        // };

        return (
            <li><a href={this.props.href}>{this.props.children}</a></li>
        );
    }
};
// современный способ:
MenuItem.defaultProps = {
    children: "Главная страница",
    href: "/"
};

// Задаем - какой тип данных должен быть у пропсов
MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default MenuItem;