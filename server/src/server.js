import app from './app.js';
import 'dotenv/config';

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Express app is listening to port ${process.env.EXPRESS_PORT}`);
});
