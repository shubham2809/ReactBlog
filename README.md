This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# The App

  - A simple blog app with ability and search, add and filter blog posts.
  - The project effectively uses the latest feature of React like [Hooks](https://reactjs.org/docs/hooks-intro.html)  ( which introduces a new and performance efficient way to manage state ) and [memo](https://reactjs.org/docs/react-api.html#reactmemo) to optimize performance.
  - Redux like functionility is achieved through [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)


### Tech

It uses a number of open source projects to work properly:

* [React.js](https://reactjs.org/) - HTML enhanced for web apps!
* [Material-UI](https://material-ui.com/) - great UI boilerplate for modern web apps


### Project Structure

The Poject is well dividedin `components` , `container`, `hooks`, `contexts` and `reducer`.

```sh
/Users/shubhamd/Desktop/blog
├── README.md
├── package-lock.json
├── package.json
├── public
|  ├── favicon.ico
|  ├── index.html
|  └── manifest.json
└── src
   ├── App.js
   ├── actions
   |  └── actionTypes.js
   ├── axios.js
   ├── components
   |  ├── Post
   |  └── SnackBar
   ├── constants
   |  └── constants.js
   ├── containers
   |  ├── Blog
   |  ├── Drawer
   |  ├── FullPost
   |  ├── NewPost
   |  └── Posts
   ├── contexts
   |  └── blog.context.js
   ├── hooks
   |  ├── useNewPostForm.js
   |  ├── usePostsReducer.js
   |  └── useSnackBar.js
   ├── index.js
   └── reducers
      └── blogPost.reducer.js
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### State

The initial application is passed down all child components from context `./contexts/blog.context.js`

| state | description |
| ------ | ------ |
| posts | Array of posts that is rendered |
| categoryName | category name which posts should be filtered|
| searchValue | Search Value to search content of posts |
| selectedPost | Full post to see the details |
| error | Any erros caused by side-effect |


### Custom Hooks


`useNewPostForm` : Gives ability to created controlled forms
`usePostReducer`: Gives us ability to store post data in localStorage (causing side-effect)
`useSnackBar` : Easily reuse snackbar component anywhere in the project.

### Scripts

Start:
```sh
npm start
```

Build:
```sh
npm run build
```

