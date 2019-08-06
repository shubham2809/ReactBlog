import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useFullPostStyles from './FullPost.style';
import { PostsContext, DispatchContext } from '../../contexts/blog.context';
import * as actionTypes from '../../actions/actionTypes';
import SnackBar from '../../components/SnackBar/SnackBar';
import useSnackBar from '../../hooks/useSnackBar';

export default function FullPost(props) {
    const classes = useFullPostStyles();
    const postsState = useContext(PostsContext);
    const dispatch = useContext(DispatchContext);

    // using custom snackbar hook - resuable component
    const [open, onDelete, handleClose] = useSnackBar();

    // we can easily get it from props.postsState as well
    const { id } = props.match.params;

    const loadedPost = postsState.selectedPost[0];

    const deletePostHandler = () => {
        dispatch({ type: actionTypes.DELETE, id });

        // Calling SnackBar Delete Function
        onDelete();

        // Taking user back to home page after showing snackbar
        setTimeout(() => {
            props.history.push('/posts');
        }, 2000);
    };

    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (id) {
        post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }
    if (loadedPost) {
        post = (
            <div>
                <Paper className={classes.root}>
                    <Typography variant="h3" color="secondary" component="h2">
                        {loadedPost.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className={classes.pos}
                        color="textSecondary"
                    >
                        {loadedPost.date}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        className={classes.pos}
                        color="textSecondary"
                    >
                        {'#'}
                        {loadedPost.category}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {loadedPost.content}
                    </Typography>
                    <Button
                        onClick={deletePostHandler}
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                    >
                        Delete
                    </Button>
                    <SnackBar
                        variant="warning"
                        open={open}
                        handleClose={handleClose}
                        message="Post Deleted"
                    />
                </Paper>
            </div>
        );
    }
    return post;
}

// if we were not using reducer we could add the post to http endpoind functinaility like below

// const [loadedPost, setLoadedPost] = useState({ loadedPost: null });

// const deletePostHandler = () => {
//     axios.delete('/posts/' + postId).then(response => {
//         console.log(response);
//     });
// };

// const loadData = () => {
//     if (postId) {
//         if (
//             '!loadedPost ||
//             (loadedPost && loadedPost.id != postId) //Type coercion check
//         ) {
//             axios.get('/posts/' + postId).then(response => {
//                 setLoadedPost(response.data);
//             });
//         }
//     }
// };

// // In a class based component we would have to use componentDidMount and componentDidUpdate
// useEffect(() => {
//     let isSubscribed = true;
//     if (isSubscribed) {
//         loadData();
//     }
//     return () => {
//         isSubscribed = false;
//     };
// }, []);
