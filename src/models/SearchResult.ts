import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import ProductCategory from "./ProductCategory";

@ObjectType()
export default class SearchResult {
  @Field()
  public specialOrderAndOutOfStock: boolean;
  @Field(() => Int)
  public minimumQuantity: number;
  @Field(() => Float)
  public abv: number;
  @Field()
  public availableUnits: string;
  @Field(() => Int)
  public backupInventory: number;

  @Field()
  public get image(): string {
    return `https://www.vinbudin.is/Portaldata/1/Resources/vorumyndir/medium/${this.id}_r.jpg`;
  }

  @Field(() => Int)
  public volume: number;

  @Field(() => Float)
  public carbonFootprint: number;

  @Field(() => ProductCategory)
  public category: ProductCategory;

  @Field()
  public containerType: string;

  @Field()
  public countryOfOrigin: string;

  @Field()
  public dateOnMarket: Date;

  @Field()
  public districtOfOrigin: string;

  @Field()
  public foodCategories: string;

  @Field(() => Int)
  public id: number;

  @Field(() => Int)
  public inventory: number;

  @Field()
  public availableInStores: boolean;

  @Field()
  public gift: boolean;

  @Field()
  public inThema: boolean;

  @Field()
  public specialOrder: boolean;

  @Field()
  public temporaryOnSale: boolean;

  @Field()
  public name: string;

  @Field()
  public organic: boolean;

  @Field()
  public packagingClosing: string;

  @Field(() => Float)
  public packagingWeight: number;

  @Field()
  public placeOfOrigin: string;

  @Field()
  public shortDescription: string;

  @Field(() => Int)
  public price: number;

  @Field()
  public producer: string;

  public static fromResponse(res: Record<string, any>): SearchResult {
    const sr = new SearchResult();
    sr.specialOrderAndOutOfStock = res.IsSpecialOrderAndOutOfStock;
    sr.minimumQuantity = res.MinimumQuantity;
    sr.abv = res.ProductAlchoholVolume;
    sr.availableUnits = res.ProductAvailableUnits;
    sr.backupInventory = res.ProductBackupInventory;
    sr.volume = res.ProductBottledVolume;
    sr.carbonFootprint = res.ProductCarbonFootprint;
    sr.category = {
      name: res.ProductCategory.name,
      id: res.ProductCategory.id,
      taste: res.ProductCategory.taste,
      sweet: res.ProductCategory.sweet,
    };
    sr.containerType = res.ProductContainerType;
    sr.countryOfOrigin = res.ProductCountryOfOrigin;
    sr.dateOnMarket = new Date(res.ProductDateOnMarket);
    sr.districtOfOrigin = res.ProductDistrictOfOrigin;
    sr.foodCategories = res.ProductFoodCategories;
    sr.id = res.ProductID;
    sr.inventory = res.ProductInventory;
    sr.availableInStores = res.ProductIsAvailableInStores;
    sr.gift = res.ProductIsGift;
    sr.inThema = res.ProductIsInThema;
    sr.specialOrder = res.ProductIsSpecialOrder;
    sr.temporaryOnSale = res.ProductIsTemporaryOnSale;
    sr.name = res.ProductName;
    sr.organic = res.ProductOrganic;
    sr.packagingClosing = res.ProductPackagingClosing;
    sr.packagingWeight = res.ProductPackagingWeight;
    sr.placeOfOrigin = res.ProductPlaceOfOrigin;
    sr.price = res.ProductPrice;
    sr.producer = res.ProductProducer;
    sr.shortDescription = res.ProductShortDescription;

    return sr;
  }
}
