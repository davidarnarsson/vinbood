import { Field, Int, ObjectType } from "type-graphql";
import SearchResult from "./SearchResult";

@ObjectType()
export default class SearchResults {
  @Field(() => [SearchResult])
  public results: SearchResult[];

  @Field(() => Int)
  public total: number;
}
