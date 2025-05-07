export class Weight {
    private weights: number[];
  
    constructor(weights: number[]) {
      this.weights = weights;
    }
  
    get(): number[] {
      return this.weights;
    }
  }
  