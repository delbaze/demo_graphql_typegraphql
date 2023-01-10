import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Unique("contrainte_unique", ["label"])
@ObjectType()
@Entity("languages")
export default class Language {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  label: string;

  
}
