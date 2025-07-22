import React from "react";

type Props = {
  source: string;
  amount: number;
  date: string;
  handleAddSource: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
};
export default function IncomeForm({ 
  source, amount, date, 
  handleAddSource, handleAddAmount, handleAddDate, handleSubmit 
}: Props) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-row">
        <div>
          <label htmlFor="source">Source:</label>
          <input
            id="source"
            type="text"
            placeholder="Enter a source"
            value={source}
            onChange={handleAddSource}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAddAmount}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={handleAddDate}
            required
          />
        </div>
      </div>

      <button type="submit">Add the Income</button>
    </form>
  );
}
