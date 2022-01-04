export interface RecipeBase {
  id: string;
  title?: string;
  published?: boolean;
  images?: {
    thumb?: string;
  };
  createdAt?: number;
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
