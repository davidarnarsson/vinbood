import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class ProductCategory {
  @Field(() => [String])
  public id: string[];
  @Field()
  public name: string;
  @Field()
  public taste: boolean;
  @Field()
  public sweet: boolean;
}
