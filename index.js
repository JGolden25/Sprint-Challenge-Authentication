const { server } = require('./server.js');

// READ: Sanity Check 
server.get('/', (request, response) => {
  response.status(200).send('Great job!')
})

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
