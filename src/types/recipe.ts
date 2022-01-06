export interface RecipeBase {
  id: string;
  title?: string;
  published?: boolean;
  createdAt?: number;
}
export interface RawRecipe extends RecipeBase {
  description?: string;
  ingredients?: string[];
  instructions?: string[];
}

export interface Recipe extends RawRecipe {
  image?: string;
}
