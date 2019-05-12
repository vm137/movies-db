import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './components/App';

function renderHTML(html) {
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
          <script src='/bundle.js'></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};

    const root = (
      // eslint-disable-next-line react/jsx-filename-extension
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
      />
    );

    const htmlString = renderToString(root);

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    res.send(renderHTML(htmlString));
  };
}
