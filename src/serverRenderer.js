import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './components/App';
import createStore from './store';
import { fetchMoviesAction, fetchSingleMovieAction } from './actions/actions';

function renderHTML(html, state) {
  return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset=utf-8>
          <title>SSR</title>
        </head>
        <body>
          <div id="app">${html}</div>
          
          <footer class="footer">
            <p class="logo-bottom">netflixroulette</p>
          </footer>
          <script>window.preloadedState = ${JSON.stringify(state)}</script>
          <script src='/bundle.js'></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};
    const store = createStore();
    const requestUrl = req.url;
    const [, requestPath, requestParam] = requestUrl.split('/');

    let promise = Promise.resolve();

    if (requestPath === 'search') {
      promise = store.dispatch(fetchMoviesAction(requestParam));
    } else if (requestPath === 'film') {
      promise = store.dispatch(fetchSingleMovieAction(requestParam));
    }

    promise.then(() => {
      const root = (
        // eslint-disable-next-line react/jsx-filename-extension
        <App
          store={store}
          context={context}
          location={requestUrl}
          Router={StaticRouter}
        />
      );

      const htmlString = renderToString(root);
      const state = store.getState();

      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      res.send(renderHTML(htmlString, state));
    });
  };
}
