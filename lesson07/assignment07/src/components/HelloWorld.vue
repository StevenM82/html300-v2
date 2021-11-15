<template>
  
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