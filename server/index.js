import express from 'express';
import renderer from './helpers/renderer';
import 'babel-polyfill';
import './index.css';
import store from './redux/store';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
  console.log('store ====>', store);
  return res.send(renderer(req, store));
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
