
// This file starts the email server
require('ts-node/register');
const app = require('./emailApi.ts').default;

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
