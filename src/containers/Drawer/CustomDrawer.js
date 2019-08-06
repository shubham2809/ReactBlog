import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import CardTravel from '@material-ui/icons/CardTravel';
import CodeIcon from '@material-ui/icons/Code';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import * as actionTypes from '../../actions/actionTypes';
import * as constants from '../../constants/constants';
import useDrawerStyles from './CustomDrawer.style';
import { PostsContext, DispatchContext } from '../../contexts/blog.context';

export default function CustomDrawer(props) {
    const classes = useDrawerStyles();
    const dispatch = useContext(DispatchContext);
    const postsState = useContext(PostsContext);

    const { container } = props;
    const theme = useTheme();

    const onSelectCategory = categoryName => {
        dispatch({
            type: actionTypes.SET_SELECT_CATEGORY,
            categoryName
        });
    };

    // Category Filter
    const clearAllFilters = () => {
        dispatch({
            type: actionTypes.CLEAR_SELECT_CATEGORY
        });
        dispatch({
            type: actionTypes.CLEAR_SEARCH_VALUE
        });
    };

    const filterClasses = [classes.clearFilter];
    if (postsState.posts.length > 0) {
        if (postsState.categoryName || postsState.searchValue) {
            filterClasses.push(classes.clearFilterActive);
        }
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {constants.links.map((link, index) => (
                    <NavLink
                        key={link.label}
                        className={classes.toolitems}
                        activeStyle={{
                            color: link.activeColor,
                            textDecoration: link.textDecoration
                        }}
                        to={link.to}
                    >
                        <ListItem button key={link.label}>
                            <ListItemIcon>
                                {index % 2 === 0 ? (
                                    <HomeIcon />
                                ) : (
                                    <NoteAddIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={link.label} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
            <Divider />
            <List>
                {constants.category.map((text, index) => (
                    <ListItem
                        button
                        key={text.label}
                        onClick={() => onSelectCategory(text.label)}
                    >
                        <ListItemIcon>
                            {index % 2 === 0 ? <CodeIcon /> : <CardTravel />}
                        </ListItemIcon>
                        <ListItemText primary={text.label} />
                    </ListItem>
                ))}
                <ListItem button onClick={clearAllFilters}>
                    <ListItemText
                        className={filterClasses.join(' ')}
                        primary="Clear All Filters"
                    />
                </ListItem>
            </List>
        </div>
    );

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.open}
                    onClose={props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
}
