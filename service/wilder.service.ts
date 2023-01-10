import { Repository } from "typeorm";
import Wilder from "../entity/Wilder";
import datasource from "../lib/datasource";
import { CreateWilderInput } from "../src/generated/graphql";
import { IService } from "./interfaces";

class WilderService implements IService {
  db: Repository<Wilder>;
  constructor() {
    this.db = datasource.getRepository("Wilder");
  }

  async listWilders() {
    return await this.db
      .createQueryBuilder("wilder")
      .leftJoinAndSelect("wilder.notes", "note")
      .leftJoinAndSelect("note.language", "language")
      .getMany();
  }
  async createWilder({ first_name, last_name, age }: CreateWilderInput) {
    return await this.db.save({
      age,
      first_name,
      last_name,
    });
  }
}
export default WilderService;
