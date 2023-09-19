export interface subResponse {
  data: substitutes[];
}

export interface substitute {
  missingIngredient: string;
  solution: string;
}
