# movies-db

http://react-cdp-api.herokuapp.com/api-docs

## Task 6 (Routing)
Create routing for your application.  
Link app states between each other with React router.  
By default user lands on a new page with empty results state (caption 0).  

When user clicks on a film item, redirect him to: `localhost/film/id`  

Handle invalid URLs, display create a `404 page`, where user will be
redirected in case of invalid URL.  

On switching search type or sorting type you shouldn’t switch any routes. 
When user performs a new search, you should redirect him to: `localhost/search/Search%20Query`  

When a new user lands on the page with such URL, you should perform search and display results.

### Evaluation criteria:
**"2"**. Have 2+ pages which displays on different URLs.  
**"3"**. Implement displaying 404 page for all invalid URLs  
**"4"**. By default user lands on a new page with empty results state.  
**"5"**. 
- When user performs a search on the page, change URL and show search results  
- When new user enters the site using direct link with search parameters - show search results
