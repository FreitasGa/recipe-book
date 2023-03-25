export type Ingredient = {
  quantity: string;
  name: string;
  type: string;
};

export type Recipe = {
  id: number;
  name: string;
  ingredients: Ingredient[];
  steps: string[];
  timers: number[];
  imageURL: string;
  originalURL?: string;
};
