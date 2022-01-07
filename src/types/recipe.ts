export interface RecipeBase {
  id: string;
  title?: string;
  published?: boolean;
  createdAt?: number;
}
export interface RecipeDetails {
  id: string;
  description?: string;
  ingredients?: string[];
  instructions?: string[];
}

export interface Recipe extends RecipeBase {
  image?: string;
  description?: string;
  ingredients?: string[];
  instructions?: string[];
}
