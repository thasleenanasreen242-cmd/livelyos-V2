"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";


export default function FinanceCharts({
  expenses = [],
  income = [],
  currency = "₹"
}: any) {



  const incomeTotal = income.reduce(
    (sum:number,item:any)=>
      sum + Number(item.amount || 0),
    0
  );


  const expenseTotal = expenses.reduce(
    (sum:number,item:any)=>
      sum + Number(item.amount || 0),
    0
  );



  const barData = [

    {
      name:"Income",
      amount:incomeTotal
    },

    {
      name:"Expenses",
      amount:expenseTotal
    }

  ];




  const categoryData = Object.values(

    expenses.reduce(
      (acc:any,item:any)=>{


        const category =
        item.category || "Other";


        if(!acc[category]){
          acc[category]={
            name:category,
            value:0
          };
        }


        acc[category].value +=
        Number(item.amount || 0);


        return acc;

      },
      {}

    )

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
        text-white
        mb-5
        ">
          Income vs Expenses
        </h2>



        <ResponsiveContainer
        width="100%"
        height={300}
        >

          <BarChart data={barData}>


            <Bar
            dataKey="amount"
            fill="#3b82f6"
            radius={[8,8,0,0]}
            />


            <Tooltip
            formatter={
              (value:any)=>
              `${currency}${value}`
            }
            />


            <Legend />


          </BarChart>


        </ResponsiveContainer>



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
        text-white
        mb-5
        ">
          Expense Categories
        </h2>



        {
          categoryData.length > 0 ?

          <ResponsiveContainer
          width="100%"
          height={300}
          >


          <PieChart>


            <Pie

            data={categoryData}

            dataKey="value"

            nameKey="name"

            outerRadius={100}

            label

            >


            {
              categoryData.map(
                (_:any,index:number)=>(

                  <Cell
                  key={index}
                  />

                )
              )
            }


            </Pie>



            <Tooltip
            formatter={
              (value:any)=>
              `${currency}${value}`
            }
            />


            <Legend />


          </PieChart>


          </ResponsiveContainer>


          :

          <p className="
          text-slate-400
          ">
            Add expenses to view chart
          </p>

        }



      </div>




    </section>

  );

}
