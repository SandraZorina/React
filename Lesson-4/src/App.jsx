import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

import './app/styles/style.css';

class App extends React.Component {
    render() {
        const postItems = [
            {
                title: 'First Post',
                postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit quisquam omnis ipsum, est iusto deserunt molestiae incidunt quibusdam, illo repellat accusantium excepturi reiciendis eum repudiandae velit laboriosam, harum ipsam?',
                postAuthor: 'Author 1'
            },
            {
                title: 'Second Post',
                postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit quisquam omnis ipsum, est iusto deserunt molestiae incidunt quibusdam, illo repellat accusantium excepturi reiciendis eum repudiandae velit laboriosam, harum ipsam?',
                postAuthor: 'Author 2'
            },
            {
                title: 'Third Post',
                postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit quisquam omnis ipsum, est iusto deserunt molestiae incidunt quibusdam, illo repellat accusantium excepturi reiciendis eum repudiandae velit laboriosam, harum ipsam?',
                postAuthor: 'Author 3'
            },
            {
                title: 'Fourth Post',
                postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit quisquam omnis ipsum, est iusto deserunt molestiae incidunt quibusdam, illo repellat accusantium excepturi reiciendis eum repudiandae velit laboriosam, harum ipsam?',
                postAuthor: 'Author 4'
            }
        ];

        return <div>
            <Blog blogTitle="Post Block" items={postItems}/>
            <WelcomeModal/>
        </div>;
    }
}

ReactDOM.render (<App/>, document.querySelector('#root'));