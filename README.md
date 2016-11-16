# full-stack-redux
My attempt at the [Full Stack Redux tutorial](https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)

## Prerequisites
```
Node
npm
```

## Installing
```
npm install
```

## Testing
```
npm run Test
```

## Building
```
npm run build
```

## Running
In separate console windows, you will need to run the server and the client application (ran by `webpack-dev-server`).

### Starting the Server
```
npm run start-server
```

### Starting the Client Application
```
npm run serve-client
```

## Built With

### Production
* [Immutable](https://facebook.github.io/immutable-js/) - Immutable JavaScript constructs
* [React](https://facebook.github.io/react/) - Client-side framework
* [React Pure Render Mixin](https://facebook.github.io/react/docs/pure-render-mixin.html) - (Need to look to move to `React.PureComponent`!)
* [React Router](https://github.com/ReactTraining/react-router) - Routing library
* [Redux](https://github.com/reactjs/redux) - State container
* [Socket.io](http://socket.io/) - Real-time socket communication (server-side)
* [Socket.io Client](https://github.com/socketio/socket.io-client) - Real-time socket communication (client-side)

### Development

#### Testing
* [Mocha](https://mochajs.org/) - Testing framework
* [Chai](http://chaijs.com/) - Assertions library
* [jsdom](https://www.npmjs.com/package/jsdom) - Test DOM

#### Building
* [Babel](https://babeljs.io/) - Compiler/transformer
* [Webpack](https://webpack.github.io/) - Module bundler

#### Running
* [React Hot Loader](https://github.com/gaearon/react-hot-loader) - 'Hot' reloads of React components
* [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) - Serves the client application
