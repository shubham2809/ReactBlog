import React, { memo, useState, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToggleSwitch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';
import useBlogStyles from './Blog.style';
import * as actionTypes from '../../actions/actionTypes';
import CustomDrawer from '../Drawer/CustomDrawer';
import { DispatchContext } from '../../contexts/blog.context';

function Blog() {
    const classes = useBlogStyles();
    const dispatch = useContext(DispatchContext);

    // We keep the theme in app state
    const [theme, setTheme] = useState({
        palette: {
            type: 'light'
        }
    });

    // we change the palette type of the theme in state
    const toggleDarkTheme = () => {
        const newPaletteType =
            theme.palette.type === 'light' ? 'dark' : 'light';
        setTheme({
            palette: {
                type: newPaletteType
            }
        });
    };

    // we generate a MUI-theme from state's theme object
    const muiTheme = createMuiTheme(theme);

    // Drawer related state, could be easily move to reducer as well
    const [mobileOpen, setMobileOpen] = useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    // Search controlled value
    const [searchValue, setsearchValue] = useState('');

    const onSearch = e => {
        const { value } = e.target;
        setsearchValue(value);
        if (value && value.trim() === '') {
            dispatch({
                type: actionTypes.CLEAR_SEARCH_VALUE
            });
        } else {
            dispatch({
                type: actionTypes.SET_SEARCH_VALUE,
                searchValue: value
            });
        }
    };

    return (
        <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            Blog App
                        </Typography>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                value={searchValue}
                                onChange={e => onSearch(e)}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>

                        <ToggleSwitch
                            className={classes.toggleSwitch}
                            checked={theme.palette.type === 'dark'}
                            onChange={toggleDarkTheme}
                        />
                    </Toolbar>
                </AppBar>

                <CustomDrawer
                    open={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                />

                <main className={classes.content}>
                    <Redirect from="/" to="/posts" />
                    <Switch>
                        <Route path="/new-post" exact component={NewPost} />
                        <Route path="/posts/" exact component={Posts} />
                        <Route path="/posts/:id" exact component={FullPost} />
                    </Switch>
                </main>
            </div>
        </MuiThemeProvider>
    );
}

export default memo(Blog);
