import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import Language from "./Language";
import Wilder from "./Wilder";

@ObjectType()
@Entity("notes")
export default class Note {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  note: number;

  @Field()
  @ManyToOne("Language", { eager: true, onDelete: "CASCADE" })
  language: Language;

  @Field(() => Wilder)
  @ManyToOne(() => Wilder, (wilder) => wilder.notes, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  wilder: Wilder;
}
