import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Language from "./Language";
import Wilder from "./Wilder";

@Entity("notes")
export default class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  note: number;

  @ManyToOne("Language", { eager: true, onDelete: "CASCADE" })
  language: Language;

  @ManyToOne(() => Wilder, (wilder) => wilder.notes, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  wilder: Wilder;
}
