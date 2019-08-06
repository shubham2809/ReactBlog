import * as actionTypes from '../actions/actionTypes';

export default function blogPostReducer(state, action) {
    switch (action.type) {
        // We can disptach this case when, we need to set the initial state on intilization
        case actionTypes.INIT:
            return {
                ...action.payload
            };

        case actionTypes.ADD:
            if (action.payload.content && action.payload.title) {
                const newPost = { ...action.payload };
                return {
                    ...state,
                    posts: state.posts.concat(newPost)
                };
            }
            return state;

        case actionTypes.DELETE: {
            return {
                ...state,
                posts: state.posts.filter(
                    post => post.id.toString() !== action.id
                )
            };
        }

        case actionTypes.SET_SELECTED_POST: {
            const fullPost = state.posts.filter(post => post.id === action.id);
            return {
                ...state,
                selectedPost: [...fullPost]
            };
        }

        case actionTypes.SET_SELECT_CATEGORY: {
            return {
                ...state,
                categoryName: action.categoryName
            };
        }

        case actionTypes.CLEAR_SELECT_CATEGORY: {
            return {
                ...state,
                categoryName: null
            };
        }

        case actionTypes.SET_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: action.searchValue
            };
        }

        case actionTypes.CLEAR_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: ''
            };
        }

        default:
            return state;
    }
}
