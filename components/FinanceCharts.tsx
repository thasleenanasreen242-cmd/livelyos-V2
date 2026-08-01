"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";


export default function FinanceCharts({

  expenses = [],
  income = [],
  currency = "₹"

}:any){



const expenseData = expenses.map(
(item:any)=>({

name:item.category || item.title,

amount:Number(item.amount || 0)

})
);



const incomeData = [

{

name:"Income",

amount: income.reduce(
(sum:number,item:any)=>
sum + Number(item.amount || 0),
0
)

}

];





return (

<div className="
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
mb-5
">

Expense Chart

</h2>



<ResponsiveContainer
width="100%"
height={300}
>

<BarChart data={expenseData}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="amount"
fill="#3b82f6"
/>


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
mb-5
">

Income Overview

</h2>



<ResponsiveContainer
width="100%"
height={300}
>


<PieChart>


<Pie

data={incomeData}

dataKey="amount"

nameKey="name"

outerRadius={100}

>

<Cell fill="#22c55e"/>

</Pie>


<Tooltip
formatter={(value:any)=>
`${currency}${value}`
}
/>


</PieChart>



</ResponsiveContainer>



</div>



</div>


);


}
