"use client";

import { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function ExpenseChart() {

  const [data,setData] = useState<any[]>([]);


  useEffect(()=>{

    const savedExpenses = localStorage.getItem("expenses");


    if(savedExpenses){

      const expenses = JSON.parse(savedExpenses);


      const categories:any = {};


      expenses.forEach((item:any)=>{

        if(categories[item.category]){
          categories[item.category] += Number(item.amount);
        }
        else{
          categories[item.category] = Number(item.amount);
        }

      });


      const chartData = Object.keys(categories).map(
        (category)=>({
          name: category,
          value: categories[category],
        })
      );


      setData(chartData);

    }


  },[]);



  return (

    <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">


      <h2 className="text-xl font-bold">
        Spending Analytics 📊
      </h2>



      <div className="mt-5 h-64">


        {data.length > 0 ? (

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
              />


              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        ) : (

          <p className="mt-10 text-slate-400">
            Add expenses to see analytics.
          </p>

        )}


      </div>


    </div>

  );

}