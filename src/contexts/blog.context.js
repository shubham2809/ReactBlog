import React, { createContext } from 'react';
import blogPostReducer from '../reducers/blogPost.reducer';
import { usePostsReducer } from '../hooks/usePostsReducer';

const defaultPosts = {
    selectedPost: null,
    error: false,
    categoryName: null,
    searchValue: '',
    posts: [
        {
            id: 1,
            title: 'Best Place to Visit in Cyprus',
            content: 'Details...',
            category: 'Travel',
            date: '12/09/2015'
        },
        {
            id: 2,
            title: 'How to use REACT HOOKS',
            content: 'Details...',
            category: 'Technology',
            date: '12/09/2016'
        },
        {
            id: 3,
            title: 'useReducer vs Redux',
            content: 'Details...',
            category: 'Technology',
            date: '12/09/2017'
        }
    ]
};

export const PostsContext = createContext();
export const DispatchContext = createContext();

export function BlogPostProvider(props) {
    const [posts, dispatch] = usePostsReducer(
        'posts',
        defaultPosts,
        blogPostReducer
    );

    return (
        <PostsContext.Provider value={posts}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </PostsContext.Provider>
    );
}
