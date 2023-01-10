import { Repository } from "typeorm";

export interface IService {
  db: Repository<Wilder | Language | Note>;
}
