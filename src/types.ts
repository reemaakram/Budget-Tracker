export interface Entry {
  id: string;        //ID for the entry
  source: string;    // Name of the source
  amount: number;    // Amount of money
  date: string;      // Date 
}

export interface SavingTarget {
  id: string;          
  targetName: string;   
  amount: number;       // Target amount to save
  saved: number;        // Amount already saved 
}
