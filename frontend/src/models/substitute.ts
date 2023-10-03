//Define the Substitute interface for typescript
export interface Substitute {
  _id?: string; // MongoDB document ID - _id field is optional
  missingIngredient: string;
  solution: string;
}

// Interface for the response you receive when fetching substitutes
export interface SubstituteResponse {
  substitutes: Substitute[];
}
