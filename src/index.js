import express from 'express';
let PORT = process.env.PORT || 3000;
let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('Server reloading...');

    try {
      app = require('./server').default;
    } catch (error) {
      // Do nothing
    }
  });
}

express()
  .use((req, res) => app.handle(req, res))
  .listen(PORT || 3000, () => {
    console.log(
      `React SSR App is running: http://localhost:${PORT || 3000}`
    );
  });
