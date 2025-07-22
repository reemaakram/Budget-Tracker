import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

type ExpenseType = {
  source: string;
  amount: number;
  date: string;
};

type Props = {
  expenses: ExpenseType[];
  setExpenses: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
};

export default function ExpenseWraper({ expenses, setExpenses }: Props) {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const handleChangeSource = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSource(e.target.value);
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense: ExpenseType = {
      source,
      amount,
      date: new Date(date).toDateString(),
    };
    setExpenses([...expenses, newExpense]);
    setSource("");
    setAmount(0);
    setDate("");
  };

  return (
    <>
      <ExpenseForm
        source={source}
        amount={amount}
        date={date}
        handleChangeSource={handleChangeSource}
        handleChangeAmount={handleChangeAmount}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
      />

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.source}: ${expense.amount} on {expense.date}
          </li>
        ))}
      </ul>
    </>
  );
}
