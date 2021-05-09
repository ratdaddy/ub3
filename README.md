# uglybox2

## Development setup
Configure Visual Studio Code for Vue with [these instructions](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial)

Note you will need to run command line things from [the integrated terminal](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_integrated-terminal).
Use the yarn commands in the next section to setup and run the project.
You shouldn't need to restart the server but when you do save changes to a file you may get errors in the terminal window running the server. Fix the problems and save the file and the server should pick up the new changes.

To see the application running in your browser, navigate to http://localhost:8080.

To change the url to that of the camera, change `host_url` in [Camera.js](src/lib/Camera.js).

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
