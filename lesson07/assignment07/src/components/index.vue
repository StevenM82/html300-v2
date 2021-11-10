<template>
  <div class="grid-container">
    <section class="section">
      <article class="article">
        <img class="img-fluid" src="images/glacial-lake.jpg" alt="a calm glacial lake">
        <p class="lead">We are a couple of travelers that have taken the time and put in the work to allow us see the world.
          On our first adventure we traveled by plane, by bus and by bus (different sort) over the course of a year and a
          half. Our next adventure brings home a little closer to us while we get farther from it.
        </p>
      </article>
      <article class="article">
        <p>A more thorough explanation of things will continue here. Always more to be written along the way</p>
      </article>
      <article class="article">
        <p>More information given if people make it this far down the page.</p>
      </article>
      <article class="article">
        <p>Here we are at the beginning. Things never go as you would hope, but along the way you find things you
          never could have hoped for.</p>
      </article>
    </section>

    <section class="sidebar">
      <article>
        <img class="img-fluid" src="images/The-beginning.jpg"
          alt="a large white van parked in front of a house">
        <p class="sidebar-p">How things all began! Isn't she lovely?</p>
        <a class="sidebar-a" href="#">Read more >></a>
      </article>
      <article>
        <img class="img-fluid" src="images/windowless-sliding-door.jpg"
          alt="A van sliding door with a large section cut out for a window">
        <p class="sidebar-p">You can see right through the door...</p>
        <a class="sidebar-a" href="#">Read more >></a>
      </article>
      <article>
        <img class="img-fluid" src="images/floored.jpg"
          alt="a guy standing next to a cargo van stock wooden floor">
        <p class="sidebar-p">After seeing it, I'm floored</p>
        <a class="sidebar-a" href="#">Read more >></a>
      </article>
    </section>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
  <script src="index.js"></script>
</template>

<script>
  export default {
    data() {
      return {
          
      }
    }
  }
</script>


<style>
  /* Set the section element to be the outer grid container for the body of the page
  This is used on the index.html page only */
  .section {
    @include grid-main;
    gap: 1rem;
    grid-area: 2 / 3 / 10 / 12;

    /* make the articles appear more centered on smaller screens */
    @include media-query("mobile") {
      grid-area: 2 / 2 / 10 / 12;
    }

    /* allow the grid to place the as many articles that span 3 columns on one row as
    fit on the screen */
    .article {
      grid-column: span 3;
    }
  }
/* create a small grid to go alongside the body */
  .sidebar {
    @include grid-main;
    grid-area: 2 / 2 / 10 / 3;
    row-gap: 2rem;

    /* make the sidebar disappear when the screen gets too small */
    @include media-query("mobile") {
      display: none;
    }
    .sidebar-p {
      margin: 0;
    }
    .sidebar-a {
      text-decoration: none;
    }
  }
</style>


<!-- This moves the heading up and down -->
    <!-- https://codepen.io/ZachSaucier/pen/RwVdEJO -->
    <!-- <main class="main" aria-label="You expect this pen to do one thing but it changed into something else. — Zach Saucier">
      <blockquote cite="" aria-hidden>

        <p class="colored-text">
          <span>but finding</span>
        </p>

        <div class="cut-text-container">
          <h1 class="cut-text"><span>Wanderlust</span></h1>
          <h2 class="cut-text"><span>a la Carte</span></h2>
        </div>

        <p class="colored-text second">
          <span>Not lost</span>
        </p>
      </blockquote>
    </main> -->
