export interface Substitute {
  _id: string; // MongoDB document ID
  missingIngredient: string;
  solution: string;
}

// Interface for the response you receive when fetching substitutes
export interface SubstituteResponse {
  substitutes: Substitute[];
}
