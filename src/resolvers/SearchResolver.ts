import { Args, Query, Resolver } from "type-graphql";
import { search } from "../data/api";
import SearchQuery from "../models/SearchQuery";
import SearchResult from "../models/SearchResult";
import SearchResults from "../models/SearchResults";

@Resolver(() => SearchResult)
export default class SearchResolver {
  @Query(() => SearchResults)
  public async search(@Args() args: SearchQuery): Promise<SearchResults> {
    
    const results: any = await search(args);
    console.log(args, results)
    if (results.data) {
      const out = new SearchResults();

      out.results = results.data.map(SearchResult.fromResponse);
      out.total = results.total;

      return out;
    }

    throw new Error("bad request")
  }
}
