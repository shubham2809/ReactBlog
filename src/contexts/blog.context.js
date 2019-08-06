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
            content:
                'Cyprus is at the crossroads between Europe and Northern Africa, and is easily accessible in the eastern Mediterranean from any of these three regions. The island nation is known for its beautiful beaches, regional wines, rugged mountainous interior, and the coastal city of Paphos - archaeological sites related to Aphrodite.',
            category: 'Travel',
            date: 'Aug 3rd 2019'
        },
        {
            id: 2,
            title: 'REACT HOOKS',
            content:
                'Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.',
            category: 'Technology',
            date: 'Aug 4th 2019'
        },
        {
            id: 3,
            title: 'useReducer vs Redux',
            content:
                'Where your state is managed is a crucial difference between Redux and useReducer. While Redux creates one global state container – which hangs somewhere above your whole application –, useReducer creates a independent component co-located state container within your component.',
            category: 'Technology',
            date: 'Aug 5th 2019'
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
