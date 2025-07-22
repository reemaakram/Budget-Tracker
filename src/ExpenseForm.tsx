import React from "react";

type Props = {
  source: string;
  amount: number;
  date: string;
  handleChangeSource: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function ExpenseForm({
  source,
  amount,
  date,
  handleChangeSource,
  handleChangeAmount,
  handleChangeDate,
  handleSubmit,
}: Props) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-row">
        <div>
          <label htmlFor="source">Source:</label>
          <input
            id="source"
            type="text"
            placeholder="Enter source"
            value={source}
            onChange={handleChangeSource}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter an amount"
            value={amount}
            onChange={handleChangeAmount}
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
            onChange={handleChangeDate}
            required
          />
        </div>
      </div>

      <button type="submit">Add  the Expense</button>
    </form>
  );
}
