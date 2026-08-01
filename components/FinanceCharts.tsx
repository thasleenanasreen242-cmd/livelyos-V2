"use client";

export default function FinanceCharts({
  expenses = [],
  income = [],
  currency = "₹"
}: any) {

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

      <h2 className="text-2xl font-bold">
        Financial Overview
      </h2>


      <div className="mt-4 space-y-2">

        <p>
          Income Records: {income.length}
        </p>


        <p>
          Expense Records: {expenses.length}
        </p>


        <p>
          Currency: {currency}
        </p>

      </div>

    </div>
  );
}
