import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from './components/App';

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

module.exports = (req, res) => {
  // eslint-disable-next-line react/jsx-filename-extension
  res.send(renderHTML(<App />));
};
