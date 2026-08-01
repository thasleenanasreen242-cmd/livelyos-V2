"use client";

type FinanceChartsProps = {
  expenses: any[];
  income: any[];
  currency: string;
};


export default function FinanceCharts({

  expenses = [],
  income = [],
  currency = "₹"

}: FinanceChartsProps) {


  const totalIncome = income.reduce(
    (sum:number,item:any)=>
      sum + Number(item.amount || 0),
    0
  );


  const totalExpense = expenses.reduce(
    (sum:number,item:any)=>
      sum + Number(item.amount || 0),
    0
  );



  return (

    <section className="
    mt-8
    grid
    gap-6
    md:grid-cols-2
    ">


      <div className="
      rounded-2xl
      border
      border-slate-700
      bg-slate-900
      p-6
      ">


        <h2 className="
        text-xl
        font-bold
        ">
          Finance Summary
        </h2>



        <div className="
        mt-5
        space-y-3
        text-slate-300
        ">


          <p>
            Total Income:
            <span className="text-green-400 ml-2">
              {currency}{totalIncome}
            </span>
          </p>



          <p>
            Total Expenses:
            <span className="text-red-400 ml-2">
              {currency}{totalExpense}
            </span>
          </p>



          <p>
            Transactions:
            <span className="text-blue-400 ml-2">
              {expenses.length}
            </span>
          </p>


        </div>


      </div>





      <div className="
      rounded-2xl
      border
      border-slate-700
      bg-slate-900
      p-6
      ">


        <h2 className="
        text-xl
        font-bold
        ">
          Money Health
        </h2>



        <p className="
        mt-5
        text-slate-400
        ">

        Keep tracking your income,
        expenses and savings goals.

        </p>



      </div>



    </section>

  );

}
