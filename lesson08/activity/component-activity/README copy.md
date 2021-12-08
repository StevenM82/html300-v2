# Activity 08 - Vue Components & Props

We will build out a Post component to loop through some data and print out Posts filled with dynamic data.

### Using Vue CLI, build a blog listing page given the following requirements
-	 Have a parent component (App.vue) with data in the form of an array of post objects (provided in data.js)
-	 Create a `<post>` component (in its own file) with props for `title`, `excerpt`, `likes`, and `category`. (make sure to import the component to `App.vue`)
-	 List 4 blog posts as `<post>` components on the page using `v-for` and `v-bind` 
-	 Use `v-bind` to pull the data for the template
-	 Give the `<post>` component a button and tie it to a click directive, increasing the post's `likes` value by one on click
-	 Using data set on the parent, pass down the props to template out the data