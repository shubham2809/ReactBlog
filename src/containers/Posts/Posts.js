import React, { useContext } from 'react';
import './Posts.css';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import * as actionTypes from '../../actions/actionTypes';

import Post from '../../components/Post/Post';
import { PostsContext, DispatchContext } from '../../contexts/blog.context';

export default function Posts() {
    const postsState = useContext(PostsContext);
    const dispatch = useContext(DispatchContext);
    const { posts, categoryName, searchValue } = postsState;

    let filteredPosts = posts;

    // Filter by Category
    if (categoryName) {
        filteredPosts = posts.filter(
            post => post.category === postsState.categoryName
        );
    }

    // Filter by SearchValue
    if (searchValue) {
        filteredPosts = posts.filter(post => {
            if (
                post.content.toLowerCase().indexOf(searchValue.toLowerCase()) >
                -1
            ) {
                return true;
            }
            return false;
        });
    }

    const postSelectedHandler = id => {
        // PostId is coming from URL
        dispatch({ type: actionTypes.SET_SELECTED_POST, id });
    };

    let postsComponent = (
        <Typography
            variant="h5"
            component="h2"
            color="primary"
            style={{ textAlign: 'center' }}
        >
            There is nothing here right now, Please add New Post.
        </Typography>
    );
    if (filteredPosts.length > 0) {
        postsComponent = filteredPosts.map(post => {
            return (
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to={'/posts/' + post.id}
                    key={post.id}
                >
                    <Post
                        title={post.title}
                        date={post.date}
                        category={post.category}
                        content={post.content}
                        clicked={() => postSelectedHandler(post.id)}
                    />
                </NavLink>
            );
        });
    }
    return (
        <div>
            <section className="Posts">{postsComponent}</section>
        </div>
    );
}
