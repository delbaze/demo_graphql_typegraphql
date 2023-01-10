import { DataSource } from "typeorm";

import path from "path";
import Wilder from "../entity/Wilder";
import Note from "../entity/Note";
import Language from "../entity/Language";

export default new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../database.sqlite"),
  synchronize: true,
  entities: [Wilder, Note, Language],
  logging: ["query", "error"],
});
