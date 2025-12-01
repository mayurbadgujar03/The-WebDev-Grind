const client = require("./client");

async function init() {
  // const result = await client.get('user:1');
  // const result = await client.get('msg:1');

    // await client.set("msg:2", "Hey max here with nodeJS");
  await client.expire("msg:2", 10);
  const result = await client.get("msg:2");
  console.log("Result ->", result);
}

init();
