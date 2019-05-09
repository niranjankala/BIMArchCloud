# BIMArchCloud

Building Information Modelling (BIM) solution in cloud enabled environment.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Integrate ThreeJS in project
Initial steps:

1. Install NPM.

2. Open a command prompt in the directory in which you wish to create the app directory.

3. Run npm install -g angular-cli to install the Angular CLI, and make the ng commands available globally.

4. Run ng new ng-three-examples or whatever you want your project-name to be.

5. Enter the app directory (cd ng-three-examples).

6. Run npm install three --save to install three.js.

7. Run npm install @types/three --save-dev to install three.js typings (for TypeScript).

8. Run ng serve to start the app at http://localhost:4200.

### Key points to integrating three.js in Angular 2 are:

- Use import * as THREE from 'three' to get the typed THREE object.

- Use the @ViewChild decorator with #elementRef to bind the three.js renderer to the component template.

The example code to hopefully enable you to more easily make sense of what is going on.


# Using scene loaders
[Using Three.js STL loader with angular](https://stackoverflow.com/questions/46519609/using-three-js-stl-loader-with-angular)
[How to load OBJ model with three.js in TypeScript](https://stackoverflow.com/questions/16334505/how-to-load-obj-model-with-three-js-in-typescript)
[How to use OBJLoader and MTLLoader in THREE.js r74 and later](https://stackoverflow.com/questions/35380403/how-to-use-objloader-and-mtlloader-in-three-js-r74-and-later)


### Install OrbitControls via npm:
- npm install three-orbit-controls --save
- npm install three-mtl-loader --save

"scripts": [
              "node_modules/three/build/three.js",                           
              "node_modules/three/examples/js/controls/OrbitControls.js",
              "node_modules/three/examples/js/loaders/OBJLoader.js",
              "node_modules/three/examples/js/loaders/MTLLoader.js",
              "node_modules/three-obj-loader/dist/index.js",
              "node_modules/three-stl-loader/index.js",
              "node_modules/three-orbit-controls/index.js",
            ],
