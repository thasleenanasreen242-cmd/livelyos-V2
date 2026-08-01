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


  return (
    <div className="
    mt-8
    rounded-2xl
    border
    border-slate-700
    bg-slate-900
    p-6
    ">

      <h2 className="
      text-2xl
      font-bold
      ">
        Finance Charts
      </h2>


      <div className="
      mt-4
      space-y-2
      text-slate-300
      ">

        <p>
          Total Expenses:
          {currency}
          {
            expenses.reduce(
              (sum:number,item:any)=>
              sum + Number(item.amount || 0),
              0
            )
          }
        </p>


        <p>
          Total Income:
          {currency}
          {
            income.reduce(
              (sum:number,item:any)=>
              sum + Number(item.amount || 0),
              0
            )
          }
        </p>


      </div>


    </div>
  );

}
