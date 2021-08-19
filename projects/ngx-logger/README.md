# NgxLogger

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.
____________

## Purpose

This library is meant to be used for logging instead of console logs. The benefit of using this library is that the logs are turned off for production automatically, so you don't have to worry about removing them before pushing to production.
____________

## How to use -

### Installation Instructions
`npm i ngx/logger`

### Usage Instructions
1. Import ngx-logger service in any component -
`import { NgxLoggerService } from 'ngx-logger/ngx-logger.service';`

2. Add service in constructor
```
constructor(
  private logger: NgxLoggerService
)
``` 

3. Use different functions to log -
```
this.logger.log("Test log this", variableA, variableB) for console.log
this.logger.warn("Test log this", variableA, variableB) for console.warn
this.logger.error("Test log this", variableA, variableB) for console.error
```

____________

## Code scaffolding

Run `ng generate component component-name --project ngx-logger` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-logger`.
> Note: Don't forget to add `--project ngx-logger` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-logger` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-logger`, go to the dist folder `cd dist/ngx-logger` and run `npm publish`.

## Running unit tests

Run `ng test ngx-logger` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
