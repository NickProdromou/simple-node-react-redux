import server from "./app/config/server";
import db from "diskdb";

const database = db.connect(`${__dirname}/app/models/`, ["planets"]);
server.locals.db = db;

server.listen(3300, () => {
  console.log("listening on port 3300");
});
