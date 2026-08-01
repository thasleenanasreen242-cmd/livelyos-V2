"use client";

import { useApp } from "../context/AppContext";
import FinanceCharts from "@/components/FinanceCharts";


export default function DashboardPage() {

  const {
    income,
    expenses,
    budgets,
    profile,
    currency
  } = useApp();


  const totalIncome = income.reduce(
    (sum:any,item:any)=>
      sum + Number(item.amount || 0),
    0
  );


  const totalExpense = expenses.reduce(
    (sum:any,item:any)=>
      sum + Number(item.amount || 0),
    0
  );


  const balance = totalIncome - totalExpense;



  const getCategorySpent = (category:string)=>{

    return expenses
    .filter(
      (item:any)=>item.category === category
    )
    .reduce(
      (sum:number,item:any)=>
      sum + Number(item.amount || 0),
      0
    );

  };



return (

<main className="
min-h-screen
bg-slate-950
p-8
text-white
">


<h1 className="
text-4xl
font-bold
">

Good Morning
{
profile?.name
?
`, ${profile.name}`
:
""
}
👋

</h1>


<p className="
mt-2
text-slate-400
">
Your personal finance overview
</p>





<div className="
mt-8
grid
gap-5
md:grid-cols-4
">


<Card
title="Total Balance"
value={`${currency}${balance.toLocaleString()}`}
color="text-blue-400"
icon="💰"
/>


<Card
title="Income"
value={`${currency}${totalIncome.toLocaleString()}`}
color="text-green-400"
icon="📈"
/>


<Card
title="Expenses"
value={`${currency}${totalExpense.toLocaleString()}`}
color="text-red-400"
icon="💸"
/>


<Card
title="Savings"
value={`${currency}${balance.toLocaleString()}`}
color="text-cyan-400"
icon="🏦"
/>


</div>






<section className="
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
Budget Tracker
</h2>



<div className="
mt-5
space-y-6
">


{
budgets.map(
(budget:any,index:number)=>{


const spent =
getCategorySpent(
budget.category
);


const percentage =
budget.amount
?
Math.min(
(spent / budget.amount) * 100,
100
)
:
0;



return (

<div
key={
budget.id || index
}
>


<div className="
flex
justify-between
">

<span className="font-semibold">
{budget.category}
</span>


<span>
{currency}{spent}
/
{currency}{budget.amount}
</span>


</div>



<div className="
mt-2
h-3
rounded-full
bg-slate-700
">

<div

className="
h-3
rounded-full
bg-blue-500
"

style={{
width:`${percentage}%`
}}

/>

</div>


<p className="
mt-2
text-sm
text-slate-400
">

Remaining:

{currency}
{
Math.max(
budget.amount - spent,
0
)
}

</p>


</div>

);


})

}



{
budgets.length === 0 &&

<p className="text-slate-400">
No budgets created yet
</p>

}


</div>


</section>






<section className="
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
Recent Expenses
</h2>



<div className="
mt-4
space-y-3
">


{
expenses
.slice(-5)
.reverse()
.map(
(item:any,index:number)=>(


<div

key={
item.id || index
}

className="
flex
justify-between
rounded-lg
bg-slate-800
p-3
"

>


<span>
{item.title}
</span>


<span className="text-red-400">

-{currency}
{item.amount}

</span>


</div>


))

}


</div>


</section>






<FinanceCharts

expenses={expenses}

income={income}

currency={currency}

/>


</main>

);

}







function Card({
title,
value,
color,
icon
}:any){


return (

<div className="
rounded-2xl
border
border-slate-700
bg-slate-900
p-6
">


<div className="
flex
justify-between
items-center
">


<p className="
text-slate-400
">
{title}
</p>


<span className="
text-2xl
">
{icon}
</span>


</div>



<h2 className={`
mt-4
text-3xl
font-bold
${color}
`}>

{value}

</h2>


</div>

);

}