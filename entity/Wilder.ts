import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";
import { MaxLength, Max } from "class-validator";
import Note from "./Note";

@ObjectType()
@Entity("wilders")
export default class Wilder {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  first_name: string;

  @Field()
  @Column()
  last_name: string;

  @Field()
  @Column()
  age: number;
  //rajouter les notes

  @Field(() => [Note], { nullable: true })
  @OneToMany(() => Note, (note) => note.wilder)
  notes: Note[];
}

@InputType({ description: "Creation d'un wilder" })
export class CreateWilderInput implements Partial<Wilder> {
  // @MaxLength(20)
  @Field()
  first_name: string;

  // @MaxLength(20)
  @Field()
  last_name: string;

  // @Max(100)
  @Field()
  age: number;
}
