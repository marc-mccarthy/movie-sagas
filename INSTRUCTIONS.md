# React-Redux with Redux-Sagas

This week you have two separate parts to work on:

1. Adding features to an existing Movie App with React-Redux and Redux-Sagas
2. Practicing SQL

Be sure to do both parts!

---

## Add the Detail View to our Movie App

For this weekend challenge you'll be expanding on a movie management application! We're already able to see movies that exist in our DB. We'll need to be able to see detailed view for each individual movie, including all genres associated with that movie. This is a very common pattern, to go from a list to showing more information about a single item.

## Database Setup

[x] Create a database named `saga_movies_weekend`
[x] Run the queries from `database.sql` on the `saga_movies_weekend` database

## Install Dependencies

[x]  `npm install`
[x]  `npm run server`
[x]  `npm run client`

## Notes

### Table Relationships

Genres can be applied to many different movies. Movies can have multiple genres. This is Many-to-Many! Junction Table time!

We've given you the database complete with a junction table and data for `movies_genres`.

### Movie Poster Images

We've added some movie posters in the `public/images` folder, and the database is set up to use them. If you want your own posters, you'll want to add the files there!

---

## Feature List

> NOTE: Start by taking inventory of the existing code. Part of the work for setting up sagas has been done for you.

### Home / List Page

This view is completed already! It displays all of the movies in the movie database.

- [x] When a movie poster is clicked, a user should be brought to the `/details` view for that movie.

### Details Page

This should show all details **including ALL genres** for the selected movie, including title, description, and the image, too! Use Sagas and Redux to handle these requests and data.

- [x] The details page should have a `Back to List` button, which should bring the user to the Home/List Page

> Base functionality does not require the movie details to load correctly after refresh of the browser.
 > Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?
---

### General Considerations

As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!

- [x] Invest some time in styling it up!
    - [x] Research cards for your movie posters on the list page
    - [x] Research grids for your movie posters on the Movie List page
- [x] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [x] Comment your code.
- [x] Update this README to include a description of the project in your own words.

---

## Development Stretch Goals

### 1. Add Movie Form

This should show:

[x] an input field (for the movie title)
[x] an input field (for the movie poster image URL))
[x] a textarea (for the movie description)
[x] a dropdown (for the genres)

The Add Movie page should have the buttons:

[x] `Cancel` button, which should bring the user to the Home/List Page
[x] `Save` button, which should save these inputs in the database and bring the user to the Home/List Page (which now has the new movie)

**Base functionality does not require being able to select more than one genre for a new movie**

> Hint: Look at the /api/movie POST route -- it's been made already but is performing 2 queries: one to store the movie information and another to store the genre in the junction table.
> Hint: You'll want to use the genres that are in the db for your dropdown

### 2. Refresh on Details Page

[x] Allow the app to maintain on refresh our details page.
Research [React Router URL PARAMS](https://reactrouter.com/web/example/url-params)

### 3. Edit Page (Stretch)

Add to the detail page an edit button that brings the user to the edit page.

This new page should show:

[x] an input field (for changing the movie title), for the selected movie.
[x] a textarea (for changing the movie description)

The edit page should have the buttons:

[x] `Cancel` button, which should bring the user to the Details Page
[x] `Save` button, which should update the title and description in the database and bring the user to the Details Page

### Other Ideas

- [x] Display the current values in the input (title) and textarea (description) on the Edit Page
- [x] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
- [x] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [x] Allow the user to add a genre to a movie.
- [x] Allow the user to remove a genre from a movie.

### Leftovers

- [ ] Edit movie page reload break
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
