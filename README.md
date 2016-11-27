# klm carousel

#Usage
```
npm install -g browser-sync
cd [cssonly|carousel]
browser-sync start -s  -f .
```
Deployed versions:

- with javascript http://truthful-paste.surge.sh/carousel/

- css only http://truthful-paste.surge.sh/carousel/

#Description
Create one of the carousels as shown on the attached design.

A)     Explanation :
  1.       It does not have to be 100% the same.
  2.       Make it responsive and asynchronous.
  3.       two to three hours is the effort we would like you to spend on this.
  4.       Most important is the motivation of your choices :
  5.       Bonus: if you add some testing
  6.       Bonus: if you can create a second version without JavaScript.
 
B) Tell us why the way you created the carousel is better compared to other ways (name the other ways)

There are 3 main approaches in order to accomplish this task:

  1. JS framework that allows the user propagate the change of the view when the data changes in the application. In my specific case I used AngularJS.
  1. Event approach, the application reacts to the events from the input of the user (ex: jquery approach).
  1. Pure CSS, do not use any business logic. Everything is handled by the HTML and CSS code by using the builtin features.

I used the first approach, using an Angular and Bootstrap integration. It provides the following advantages over the other approaches:

  1. Minimal amount of code. I have only added some variables, and by manipulating them I am able to easily add/remove images from the carousel.
  1. Simple code. The code I wrote does not contain complicated business logic (only variables assignments). Minimal testing needed. Most of the features are implementend in the library I used (UI-bootstrap), those features are tested and stable.
  1. Stability. Angular-Bootstrap integration (i.e.: ui-bootstrap) is more stable and mature than the equivalent libraries for other framework (ex: materialui)
  1. Simpler custom CSS. Because I used the bootstrap css framework, it provides already out of the box css helper classes to handle responsivity (ex: visible-xs, hidden-xs, ...)
  1. Extendibility. Easy to extend since the HTML CSS and Javascript parts are well separated. 
  1. Time efficient. In this specific case also time was a factor, the tech stack I used allowed me to deliver high quality code (simple and extendable) in the expected amount of time.
