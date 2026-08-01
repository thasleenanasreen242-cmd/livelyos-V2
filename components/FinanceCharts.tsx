"use client";

export default function FinanceCharts({
  expenses,
  income,
  currency
}: {
  expenses:any[];
  income:any[];
  currency:string;
}) {

  return (
    <div className="
    mt-8
    rounded-xl
    bg-slate-900
    border
    border-slate-700
    p-6
    text-white
    ">

      <h2 className="text-2xl font-bold">
        Finance Summary
      </h2>


      <p className="mt-4">
        Total Expenses:
        {currency}
        {
          expenses.reduce(
            (total,item)=>
            total + Number(item.amount || 0),
            0
          )
        }
      </p>


      <p className="mt-2">
        Total Income:
        {currency}
        {
          income.reduce(
            (total,item)=>
            total + Number(item.amount || 0),
            0
          )
        }
      </p>


    </div>
  );
}
