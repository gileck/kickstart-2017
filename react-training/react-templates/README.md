# React-Templates Workshop - Exercises

## Overview
Down below is a list of training exercises for using **React Templates** for building Panels and React applications. (Panels are components that have a lot of HTML code and non-reusable logic.) You can use [Hello React Templates](https://github.com/wix/hello-react-templates) as a starting point for your projects or use the [Yeoman generator](https://github.com/wix/generator-react-templates).
Also, if you are using IntelliJ or WebStorm, make sure you have the [react-templates plugin](https://plugins.jetbrains.com/plugin/7648-react-templates) installed.

## Slides
Google Slides: [https://goo.gl/iMe7yQ](https://goo.gl/iMe7yQ)

## Exercises
 
1. Create a "React Templates" project that has at least an _index.html_ file and a React component with an _.rt_ file that displays the text **"ShaiK likes to over-react"** in the browser.

    This is ShaiK: 

    ![alt shaik](https://static.wixstatic.com/media/32d4ec_4d5b77bfb99a3ae47219fae5eb8352c2.jpg/v1/fill/w_160,h_160,al_c,lg_1,q_80/32d4ec_4d5b77bfb99a3ae47219fae5eb8352c2.webp)
 
2. Create a "React Templates" project that displays a form having a text input field, and displays the message _"**{name}** makes ShaiK over-react"_ , where _**{name}**_ is the value provided in the input field.
 
3. Enhance the previous project so that an initial value for the name field can be provided via the URL. 
 
4. Create a panel that has two numeric input fields: _lat_ and _long_. 

    The panel should also display the text: _"ShaiK is over-reacting at (**{long}**,**{lat}**)"_, where _**{long}**_ and _**{lat}**_ are the values provided in the form. 
    
    This needs to be implemented in such a way that both _long_ and _lat_ are properties of a _location_ object in the component state, and by creating a **“linkState”** function that creates a "two-way-data-binding" like [React LinkState](https://facebook.github.io/react/docs/two-way-binding-helpers.html) used to.
 
5. Create a panel that contains a form.
Adding fields to the form should not require changing code in the panel (i.e., you can add fields dynamically in the rendered template).
The value of the form fields should be output to the Dev Console whenever that field value changes (just that field, not all the fields every time.) 
 
6. Create a panel for selecting "country" and "city", where the available "cities" are dependent on the "selected" country. (Country/city information can be hard-coded). Initially the country is not specified, and the city list is empty. A Submit button must only be enabled when both country and city are selected, and disabled otherwise.
 
7. Create panel that behaves like a "\<div\>" and can be reused by React components. 
That panel will have a button that is always aligned with its bottom-right corner. A containing React component will be able to pass style properties to the panel.
 
8. Implement a simple mechanism that enables localising displayed text in a panel (translation). The mechanism must be reusable so that it’s easy to add it to other panels.
 
9. Create a panel with a slider that sets the height of the panel, and another slider that sets the vertical padding of the panel. Preferably implement this without custom code in the component. (hint: rt-scope).
 
10. Have a text with arrows on the left and right that change the style of the text (changes fonts, decorations, etc.). Do it once using classes, and once using styles.
 
11. Using [http://foaas.com](http://foaas.com), implement a form that has three fields: _type_, _from_ and _name_, where _name_ is optional. 

    When the user clicks the "submit" button the output of _**foaas.com/type/name/from**_ will be displayed. 
    
    If _name_ is empty then the output of _**foaas.com/type/from**_ is will be displayed. While waiting for a response from [http://foaas.com](http://foaas.com), a progress indicator should be displayed.


12. Create a tree of pages (normal, blog, and ecom) and sections from hard-coded data (see below). Each tree folder is collapsible on click. The nodes should have a nested index (1, 1.1, 1.2, 1.2.1, etc.):
 
 ```javascript
    var pages = {
        normal: [
            {
                title: 'My folder',
                subpages: [
                    { title: 'My Page 1' },
                    { title: 'My Page 2' }, 
                    {
                        title: 'My folder 2',
                        subpages: [
                            { title: 'My Page 3' }
                        ]
                    }
                ]
            },
            {
                title: 'My folder 3',
                subpages: [
                    { title: 'My Page 4' },
                    { title: 'My Page 5' }
                ]
            }
        ],
        blog: [
            { title: 'My blog page 1' },
            { title: 'My blog page 2' }
        ]
    };
``` 
 
Bonus: Try to solve the last assignment by using no more than 2 components.


