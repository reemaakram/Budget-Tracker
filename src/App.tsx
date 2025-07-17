import React, { useState } from "react";
import { Entry, SavingTarget } from "./types";
import "./App.css";

const App: React.FC = () => {
 // List for income, expenses, and saving targets
  const [incomeList, setIncomeList] = useState<Entry[]>([]);
  const [expenseList, setExpenseList] = useState<Entry[]>([]);
  const [savingTargets, setSavingTargets] = useState<SavingTarget[]>([]);
   // Inputs for income 
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState<number>(0);
   // Input for expence
  const [expenseSource, setExpenseSource] = useState("");
  const [expenseAmount, setExpenseAmount] = useState<number>(0);
   // Input for target
  const [targetName, setTargetName] = useState("");
  const [targetAmount, setTargetAmount] = useState<number>(0);
  const [savedAmount, setSavedAmount] = useState<number>(0);

  //Functions
  const addIncome = () => {
    const newIncome: Entry = {
      id: crypto.randomUUID(),
      source: incomeSource,
      amount: incomeAmount,
      date: new Date().toISOString(),
    };
    setIncomeList([...incomeList, newIncome]);
    setIncomeSource("");
    setIncomeAmount(0);
  };
// new expence
  const addExpense = () => {
    const newExpense: Entry = {
      id: crypto.randomUUID(),
      source: expenseSource,
      amount: expenseAmount,
      date: new Date().toISOString(),
    };
    setExpenseList([...expenseList, newExpense]);
    setExpenseSource("");
    setExpenseAmount(0);
  };
// new target 
  const addSavingTarget = () => {
    const newTarget: SavingTarget = {
      id: crypto.randomUUID(),
      targetName,
      amount: targetAmount,
      saved: savedAmount,
    };
    setSavingTargets([...savingTargets, newTarget]);
    setTargetName("");
    setTargetAmount(0);
    setSavedAmount(0);
  };

  return (
    <div className="App">
      <h1> Budget Tracker</h1>

      {}
      <section>
        <h2>Add YOUR Income</h2>
        <input
          type="text"
          placeholder="income"
          value={incomeSource}
          onChange={(e) => setIncomeSource(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(Number(e.target.value))}
        />
        <button onClick={addIncome}>Add YOUR Income</button>
        <ul>
          {incomeList.map((inc) => (
            <li key={inc.id}>
              {inc.source} - ${inc.amount} on {new Date(inc.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </section>

      {}
      <section>
        <h2>Add your Expenses</h2>
        <input
          type="text"
          placeholder="Source"
          value={expenseSource}
          onChange={(e) => setExpenseSource(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(Number(e.target.value))}
        />
        <button onClick={addExpense}>Add your Expenses</button>
        <ul>
          {expenseList.map((exp) => (
            <li key={exp.id}>
              {exp.source} - ${exp.amount} on {new Date(exp.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </section>

      {}
      <section>
        <h2>The Saving Targets</h2>
        <input
          type="text"
          placeholder="Name"
          value={targetName}
          onChange={(e) => setTargetName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Targett Amount"
          value={targetAmount}
          onChange={(e) => setTargetAmount(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Saved Amount"
          value={savedAmount}
          onChange={(e) => setSavedAmount(Number(e.target.value))}
        />
        <button onClick={addSavingTarget}>Add TheTarget</button>
        <ul>
          {savingTargets.map((target) => (
            <li key={target.id}>
              {target.targetName} - Saved ${target.saved} / ${target.amount}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
