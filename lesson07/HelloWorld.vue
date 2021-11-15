<template>
  <section class="section">
      <article class="article">
        <img class="img-fluid" src="../assets/glacial-lake.jpg" alt="a calm glacial lake">
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
        <img class="img-fluid" src="../assets/The-beginning.jpg"
          alt="a large white van parked in front of a house">
        <p class="sidebar-p">How things all began! Isn't she lovely?</p>
        <a class="sidebar-a" href="#">Read more >></a>
      </article>
      <article>
        <img class="img-fluid" src="../assets/windowless-sliding-door.jpg"
          alt="A van sliding door with a large section cut out for a window">
        <p class="sidebar-p">You can see right through the door...</p>
        <a class="sidebar-a" href="#">Read more >></a>
      </article>
      <article>
        <img class="img-fluid" src="../assets/floored.jpg"
          alt="a guy standing next to a cargo van stock wooden floor">
        <p class="sidebar-p">After seeing it, I'm floored</p>
        <a class="sidebar-a" href="#">Read more >></a>
      </article>
    </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style>
  /* Set the section element to be the outer grid container for the body of the page
  This is used on the index.html page only */
  .section {
    --auto-grid-min-size: 16rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    gap: 1rem;
    grid-area: 2 / 3 / 10 / 12;
  }
  /* allow the grid to place the as many articles that span 3 columns on one row as
    fit on the screen */
  .article {
    grid-column: span 3;
  }
  /* create a small grid to go alongside the body */
  .sidebar {
    --auto-grid-min-size: 16rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-area: 2 / 2 / 10 / 3;
    row-gap: 2rem;
  }
  .sidebar-p {
    margin: 0;
  }
  .sidebar-a {
    text-decoration: none;
  }
</style>