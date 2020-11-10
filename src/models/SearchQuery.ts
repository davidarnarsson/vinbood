import { Max, Min } from "class-validator";
import { ArgsType, Field, InputType, Int } from "type-graphql";

@ArgsType()
export default class SearchQuery {
  @Field({ nullable: true })
  public category: string;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Min(0)
  public skip: number;

  @Field(() => Int, { nullable: true, defaultValue: 30 })
  @Min(0)
  @Max(100)
  public count: number;
}
