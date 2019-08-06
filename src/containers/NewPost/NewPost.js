import React, { useContext } from 'react';
// import './NewPost.css';
import uuid from 'uuid/v4';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import * as constants from '../../constants/constants';
import * as actionTypes from '../../actions/actionTypes';
import useNewPostForm from '../../hooks/useNewPostForm';
import { DispatchContext } from '../../contexts/blog.context';
import useNewPostStyles from './NewPost.style';

export default function NewPost() {
    const classes = useNewPostStyles();

    const dispatch = useContext(DispatchContext);

    const { handleChange, reset, input } = useNewPostForm();

    const submitForm = e => {
        e.preventDefault();
        const data = {
            id: uuid(),
            title: input.title,
            content: input.content,
            category: input.category,
            date: moment().format('MMM Do YYYY')
        };

        // we can also use async await and axios, to submit the data over http end point
        dispatch({ type: actionTypes.ADD, payload: data });
        reset();
    };

    return (
        <form onSubmit={e => submitForm(e)}>
            <Paper className={classes.container}>
                <ListItem>
                    <TextField
                        autoFocus
                        name="title"
                        className={classes.textField}
                        label="Add a Post Title"
                        margin="normal"
                        onChange={handleChange}
                        value={input.title}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        name="content"
                        label="Content"
                        multiline
                        rows="4"
                        style={{ margin: 8 }}
                        fullWidth
                        onChange={handleChange}
                        value={input.content}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        id="standard-select-currency"
                        select
                        name="category"
                        label="Select Category"
                        className={classes.textField}
                        onChange={handleChange}
                        value={input.category}
                        margin="normal"
                    >
                        {constants.category.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </ListItem>
                <ListItem>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Submit
                    </Button>
                </ListItem>
            </Paper>
        </form>
    );
}
