# Etch and Sketch

A browser-based Etch and Sketch drawing grid built with **HTML, CSS, and
JavaScript** as part of [The Odin
Project](https://www.theodinproject.com/) curriculum.

## Preview

<img width="1845" height="931" alt="image" src="https://github.com/user-attachments/assets/f6b9a04d-cb0a-4468-a9bc-4ea03a881c3b" />


## Live Demo

(https://mfawwaznaim23.github.io/Etch_And_Sketch/)

## About the Project

This project is an interactive Etch and Sketch grid where the user can
choose the number of squares per side and then draw by moving the mouse
over the grid.

The main focus of this project was using **JavaScript to dynamically
create and control HTML elements** and practicing how JavaScript, HTML,
and CSS work together to create an interactive webpage.

## Features

-   Choose a custom grid size
-   Generate a new grid based on the user's input
-   Draw by moving the mouse over individual squares
-   Dynamically create the grid using JavaScript
-   Remove the previous grid when a new size is selected
-   Automatically calculate the width and height of each square
-   Color squares as the user moves the mouse over them

## JavaScript Functionality

JavaScript controls the creation and functionality of the drawing grid.

### Dynamically Creating the Grid

The `abs()` function takes the number entered by the user and calculates
the required dimensions for each square.

The width and height of each square are calculated using:

``` javascript
let h = 800 / num;
let w = 800 / num;
```

This keeps the entire grid at **800 × 800 pixels** while allowing the
individual squares to become smaller or larger depending on the selected
grid size.

JavaScript then uses `document.createElement()` to create each square
and `appendChild()` to add it to the grid container.

The number of squares created is based on:

``` javascript
num * num
```

For example, entering `16` creates a **16 × 16 grid**, resulting in 256
individual squares.

### DOM Manipulation

This project uses JavaScript DOM manipulation extensively.

I used:

-   `querySelector()` to select elements
-   `querySelectorAll()` to select all grid squares
-   `createElement()` to dynamically create grid squares
-   `appendChild()` to add squares to the webpage
-   `remove()` to clear the previous grid
-   `classList.add()` to change a square's appearance

This allowed the grid to be generated and updated without manually
writing hundreds of HTML elements.

### Event Listeners

Event listeners connect the user's actions to the JavaScript
functionality.

The **grid size** button uses a click event to:

1.  Ask the user for the desired number of squares per side.
2.  Remove the existing grid.
3.  Generate the new grid.

Each grid square also receives a `mouseenter` event listener. When the
user's mouse moves over a square, JavaScript calls the `statement()`
function and adds the `.clr` class to that square.

## HTML & CSS

HTML provides the basic structure of the page, including the title,
grid-size button, and container where the grid is generated.

CSS is used to control the overall layout and appearance.

The page uses **Flexbox** to:

-   Arrange the main page elements vertically.
-   Center the title, button, and grid.
-   Allow the grid squares to wrap onto new rows.

The grid container uses:

``` css
display: flex;
flex-direction: row;
flex-wrap: wrap;
```

This allows the dynamically generated squares to form rows and columns
while keeping the grid inside the fixed 800 × 800 pixel container.

The individual squares use `box-sizing: border-box` and a border so that
the grid remains visually organized.

## How JavaScript, HTML, and CSS Work Together

One of the main goals of this project was learning how the three
technologies can work together.

**HTML** provides the initial page structure and the grid container.

**CSS** controls the page layout, grid container, square sizing,
borders, and colors.

**JavaScript** creates the individual squares, calculates their
dimensions, responds to user input, detects mouse movement, and applies
CSS classes to color the squares.

For example, when the user enters a grid size of `16`, JavaScript
creates 256 `<div>` elements, calculates the appropriate dimensions for
each square, and adds them to the grid container. When the mouse enters
one of those squares, JavaScript adds the `.clr` class, and CSS changes
its background color.

## What I Learned

This project helped me practice:

-   DOM manipulation with JavaScript
-   Dynamically creating HTML elements
-   Removing and recreating elements
-   Using `querySelector()` and `querySelectorAll()`
-   Using `createElement()` and `appendChild()`
-   Working with event listeners
-   Responding to mouse events with `mouseenter`
-   Using user input with `prompt()`
-   Calculating element dimensions dynamically
-   Using JavaScript to add CSS classes
-   Combining JavaScript functionality with HTML and CSS
-   Using Flexbox to create a wrapping grid layout

## How to Run Locally

1.  Clone this repository.
2.  Open the project folder.
3.  Open `index.html` in your browser.
4.  Click **grid size** and enter the number of squares you want per
    side.

## Credits

This project was created as part of [The Odin
Project](https://www.theodinproject.com/) curriculum.
