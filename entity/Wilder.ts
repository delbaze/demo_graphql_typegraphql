import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";
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

  @Field(() => [Note], {nullable: true})
  @OneToMany(() => Note, (note) => note.wilder)
  notes: Note[];
}

@InputType({description: "Creation d'un wilder"})
export class CreateWilderInput implements Partial<Wilder> {
  @Field()
  first_name: string;
  
  @Field()
  last_name: string;
  
  @Field()
  age: number;
}