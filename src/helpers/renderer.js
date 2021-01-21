import React from 'react';
import '../index.css';
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from 'react-dom/server'
import App from '../App';

const ssr = (req, store) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <body>
        <div id=’root’>${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}

export default ssr
