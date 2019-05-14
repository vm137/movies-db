# movies-db

http://react-cdp-api.herokuapp.com/api-docs

### Task 7 (Server Side Rendering)  
Implement server rendering in your NodeJS application.  
Use async actions, redux should provide initial state from server.  
Server should handle query parameters to compute correct initial state.  
Implement route masking. Next.js provides this functionality out of the box, but its usage is not required.  
Example of route masking:    
`localhost/search/Hello%20Friend`  
`localhost/film/id`  

  
Add code splitting to your app.  
You can use dynamic `import()` syntax in conjunction with webpack, some library (react-loadable), or next.js.  

### Evaluation criteria:
**"2"**. Async actions, redux provides initial state from server.  
**"3"**. Server app handles query params to compute initial state.  
**"4"**. Route masking. Can be implemented, or mentee can switch to next.js for SSR.  
**"5"**. Code splitting for optimized performance. Goes OOTB with next.js.
