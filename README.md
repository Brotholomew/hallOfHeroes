# project Hall of Heroes

This is one of my first [Angular](https://angular.io/) (combined with [Nativescript]()) projects :p . It is still not finished! The purpose of the whole undertaking is to build an app which works natively on the web and mobile devices. It is designed to have an editable list of heroes who will later fight with each other on the arena. 

Preview [here](https://brotholomew.github.io/hallOfHeroes/home)!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites

The project is an app that works natively on the web and mobile devices, developed thanks to [this Medium blog:](https://blog.angular.io/apps-that-work-natively-on-the-web-and-mobile-9b26852495e7).
I recommend reading this for more detailed information about such projects o_O.

The programs you will need to have installed on your machine depend on the extent to which you'll want to dig into the Hall of Heroes.
If you are interested solely in the Angular Web components, you might as well fork the whole thing to a [StackBlitz](https://stackblitz.com/) account and edit it online.
If you want to inspect the whole capacity of the Hall of Heroes, you need to have an Angular and Nativescript environment set up on your local machine. You can follow my steps below, hovewer I strongly recommend visiting [Angular](https://angular.io/guide/setup-local), [Nativescript](https://docs.nativescript.org/start/quick-setup) and [Medium Angular Blog](https://blog.angular.io/apps-that-work-natively-on-the-web-and-mobile-9b26852495e7) websites.

### Installing

1. Download or clone my repository
2. Install node.js from [nodejs.org](https://nodejs.org/)
3. Install the Angular CLI using the npm package manager in your terminal:

```
npm install -g @angular/cli
```

4. Install the Nativescript CLI using the npm package manager agin:

```
npm install -g nativescript
```

5. To debug the application on mobile devices, you will need some virtual devices on your machine (install [Android Studio](https://developer.android.com/studio) or install the Nativescript Playground App on your physical mobile device (highly recommended)
6. Install @nativescript/schematics:

```
npm install --global @nativescript/schematics
```
The files from this repo are just code from ./src/app, to run it you must build a new project like this:
```
ng new --collection=@nativescript/schematics --name=my-app --shared
```
then copy files from this repo to ./src/app and that should be it!

## Running the app

To run the project for web browsers, do it as you would normally debug an Angular project. Just run

```
ng serve
```
in your terminal. The compiler and webpack will ignore all files with *.tns.* extensions (which are dedicated for the Nativescript part).

In terms of mobile compilation, use tns commands such as
```
tns run android --emulator
```
or
```
tns preview
```
more information on the [Nativescript](https://docs.nativescript.org/start/cli-basics) website!

### Some final words

This project is under maitenance. What you can see here are babysteps. I am currently finishing the web concept, whereas the mobile part is completely blank, don't even bother to look at it now x_x.

## Built With

* [Angular](https://angular.io/)
* [Nativescript](https://docs.nativescript.org/)
* [VisualStudio Code](https://code.visualstudio.com/)
* [Medium Angular Blog](https://blog.angular.io/apps-that-work-natively-on-the-web-and-mobile-9b26852495e7)

## Authors

* **Brotholomew**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


