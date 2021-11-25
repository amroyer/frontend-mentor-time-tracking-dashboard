# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [github.com/amroyer/frontend-mentor-time-tracking-dashboard](https://github.com/amroyer/frontend-mentor-time-tracking-dashboard)
- Live Site URL: [jealous-kitten.surge.sh](https://jealous-kitten.surge.sh)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

This challenge was great for playing with CSS Grid to arrange the cards, as you might expect. The surprise to me was how helpful Grid was for constructing the cards themselves. Originally I tried a couple of approaches to build the cards using negative margins and fixed heights. Then I attempted to make them work with `position: absolute` tricks. What ended up working best, though, was to make each card a grid, with the front and rear portions overlapping grid elements. For a general card, the relevant CSS looked like this:

```css
.card {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}

.card * {
  grid-column: 1;
  position: relative;
}

.card .front {
  grid-row: 2 / 6;
  z-index: 1;
}

.card .rear {
  grid-row: 1 / 3;
  z-index: 0;
}
```

The `grid-template-rows` determined the fraction of the total that the front and rear took up. For a general card I wanted an 80%/20% balance, hence five grid rows. For the profile card, a 66%/33% split seemed better, so I added the following CSS:

```css
.profile-card {
  grid-template-rows: repeat(3, 1fr);
}
```

The `grid-row` properties placed the elements in the right vertical spaces, while the `z-index` properties made sure the front was in front of the rear. In order for `z-index` to work, I needed a put a `position: relative` on everything. Finally, grid elements don't like to overlap, so I specified `grid-column: 1;` for everything to coax them into behaving.

### Continued development

Since I decided to focus on HTML and CSS for this project, the data is hard-coded into the HTML. In future iterations, I plan to integrate the data in a way that would easily generalize to a JSON response from a database API, possibly with a framework like React or Svelte if the mood strikes me.

## Author

- Frontend Mentor - [@amroyer](https://www.frontendmentor.io/profile/amroyer)
- Twitter - [@amroyerdev](https://www.twitter.com/amroyerdev)
