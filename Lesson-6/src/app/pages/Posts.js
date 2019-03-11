import React from 'react';
import PostStore from '../stores/postStore';
import {getPosts, addPost} from '../actions/postActions';
import PostsList from '../components/PostsList';

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.newPost = this.newPost.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
    }

    newPost() {
        const body = 'Текст нового добавленного поста';
        const userId = 1;
        const title = 'Это новый добавленый пост';

        addPost(title, userId, body);
    }

    onPostChange() {
        this.setState({posts: PostStore.posts});
    }

    componentDidMount() {
        getPosts();
        PostStore.on('change', this.onPostChange);
    }

    componentWillUnmount() {
        PostStore.removeListener('change', this.onPostChange);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
                <PostsList post={this.state.posts}/>
            </div>
        );
    }
}