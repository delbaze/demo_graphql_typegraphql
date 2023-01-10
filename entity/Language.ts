import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Unique("contrainte_unique", ["label"])
@Entity("languages")
export default class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  
}
