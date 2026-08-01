"use client";

type FinanceChartsProps = {
  expenses?: any[];
  income?: any[];
  currency?: string;
};


export default function FinanceCharts({
  expenses = [],
  income = [],
  currency = "₹",
}: FinanceChartsProps) {


  const totalIncome = income.reduce(
    (sum:number,item:any)=>
      sum + Number(item.amount || 0),
    0
  );


  const totalExpenses = expenses.reduce(
    (sum:number,item:any)=>
      sum + Number(item.amount || 0),
    0
  );


  return (
    <div className="
    mt-8
    rounded-2xl
    border
    border-slate-700
    bg-slate-900
    p-6
    text-white
    ">


      <h2 className="
      text-2xl
      font-bold
      ">
        Finance Overview
      </h2>


      <div className="mt-5 space-y-3">

        <p>
          Income:
          {currency}
          {totalIncome}
        </p>


        <p>
          Expenses:
          {currency}
          {totalExpenses}
        </p>


        <p>
          Balance:
          {currency}
          {totalIncome - totalExpenses}
        </p>


      </div>


    </div>
  );
}
