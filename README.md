# JS Mini Challenge: DOM Manipulation

Today, we'll be building a prototype of a small application about Ian's favorite soccer team, Liverpool FC. If you don't like Liverpool, 1. sorry, and 2. feel free to change the data and personalize your app!

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

A note on notation: when you see an element like `h1#header` in the Readme, that refers to the element's tag name and the CSS selector. For example, `h1#header` looks like this in the HTML:

```html
<h1 id="header">Some text here</h1>
```

And `div.players-container` looks like this (note the CSS class selector syntax):

```html
<div class="player-container">
  <!-- child elements here -->
</div>
```

## Deliverable 1

Open the `index.html` file in your browser and check the console in Chrome Dev Tools. You'll notice the console.log from line 2 of the `index.js` file is returning `null` instead of showing the `h1#header` element.

Figure out what you need to change to give Javascript access to the `h1#header` element.

**YOUR NOTES**
```
1. ALWAYS set an event listener for when the DOM Content has loaded on the docuemnt:
document.addEventListener('DOMContentLoaded', event => { //code here// })

2. Access elements by grabbing them from the document. 
3. Access the text inside the element with element.innerHTML

```

## Deliverable 2

Now that you have access to the `h1#header` element, use Javascript to change the element's font color to red (of course).

**YOUR NOTES**
```
1. Use console.dir() to help find what specific property needs to be updated
2. Set that property using dot notation to the appropriate value:
header.style.color = "red"
```

## Deliverable 3

Now that we've got a beautiful red header, we can show some players on the page. The player data is stored in a variable called `PLAYERS` in the `data.js` file - you can still access that variable in your `index.js` file (see if you can figure out why!).

First, uncomment the `console.log` under Deliverable 3 in the `index.js` file to see the data in the console. *For each* player in our application, we want to render their information on the DOM inside the `div#player-container` element. 

Create a DOM element that looks like this for each player and append it to the `div.player-container`:

```html
<div class="player" data-number="(Player Number)">
  <h3>
    {player name} (<em>{player nickname}</em>)
  </h3>
  <img src="{player image}" alt="{player name}">
</div>
```

**YOUR NOTES**
```
1. I reset the global variable to a local variable just for personal preference.
2. Create a function that takes in an argument of players to render an array of player objects
  a. Set a variable that points to an element in the DOM to contain the players info
  b. Create another function that takes in an argument of player to render a single player
    i. Create a div element to store player information
    ii. Set div properties accordingly to the instructions:
        div.class = "player"
        div.dataset.number = "player's number"
    iii. Set the div's innerHTML accordingly to the instructions:
        <h3>
        ${player.name} (<em>${player.nickname}</em>)
        </h3>
        <img src="${player.photo}" alt="${player.name}">
    iv. Returning the div object from this function
  c. Set a variable to the rendered player to then appened to the variable that will contain this information, rendering it to the DOM accordingly - see point 2a:
    let rendered = renderPlayer(player)
    container.appendChild(rendered)
    
```

## Deliverable 4

Uh-oh! A Manchester City player, Raheem Sterling, snuck into our list. Use Javascript to find the element with the `[data-number='7']` attribute, and remove that element from the page.

Hint: You can use `querySelector` with [CSS Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) to find an element with a specific data-number. 

**YOUR NOTES**
```
1. Find a way to grab that element and set it to a variable.
2. Remove with variable.remove()

```
