"use client";

type FinanceChartsProps = {
  expenses: any[];
  income: any[];
  currency: string;
};


export default function FinanceCharts({
  expenses,
  income,
  currency
}: FinanceChartsProps) {


  return (

    <div>

      <h2>
        Finance Charts
      </h2>

      <p>
        Expenses: {expenses.length}
      </p>

      <p>
        Income: {income.length}
      </p>

      <p>
        Currency: {currency}
      </p>

    </div>

  );

}
