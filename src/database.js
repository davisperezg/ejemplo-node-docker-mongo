//mongoose modulo para conectar a la base de datos de mongodb
import mongoose from "mongoose";

mongoose
  .connect("mongodb://mongo/testdatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected to", db.connection.host))
  .catch((err) => console.log(err));
