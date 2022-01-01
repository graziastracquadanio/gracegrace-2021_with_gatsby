export interface RecipeBase {
  id: string;
  title?: string;
  images?: {
    thumb?: string;
  };
}

export interface Recipe extends RecipeBase {
  description?: string;
  images?: {
    thumb?: string;
    cover?: string;
  };
  ingredients?: string[];
  instructions?: string[];
}
