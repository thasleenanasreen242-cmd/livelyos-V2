"use client";

import { useState } from "react";
import { useApp } from "../context/AppContext";


export default function BudgetPage() {

  const { currency } = useApp();


  const [category,setCategory] = useState("");
  const [amount,setAmount] = useState("");

  const [budgets,setBudgets] = useState<any[]>(()=>{

    if(typeof window !== "undefined"){

      return JSON.parse(
        localStorage.getItem("budgets") || "[]"
      );

    }

    return [];

  });





  const categories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Health",
    "Education",
    "Other"
  ];






  const saveBudgets=(data:any[])=>{

    setBudgets(data);

    localStorage.setItem(
      "budgets",
      JSON.stringify(data)
    );

  };






  const addBudget=()=>{


    if(
      !category ||
      !amount
    ){

      alert("Fill all fields");
      return;

    }



    const newBudget={

      id:Date.now(),

      category,

      amount:Number(amount),

    };



    saveBudgets([
      ...budgets,
      newBudget
    ]);



    setCategory("");

    setAmount("");

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
Budget 📊
</h1>


<p className="
mt-2
text-slate-400
">
Plan and control your spending
</p>







<div className="
mt-8
max-w-lg
rounded-2xl
border
border-slate-700
bg-slate-900
p-6
">





<select

value={category}

onChange={(e)=>
setCategory(e.target.value)
}

className="
w-full
rounded-lg
bg-slate-800
p-3
"

>

<option value="">
Select Category
</option>


{
categories.map(item=>(

<option key={item}>
{item}
</option>

))

}


</select>








<input

type="number"

value={amount}

onChange={(e)=>
setAmount(e.target.value)
}

placeholder="Budget Amount"

className="
mt-4
w-full
rounded-lg
bg-slate-800
p-3
"

/>







<button

onClick={addBudget}

className="
mt-5
w-full
rounded-lg
bg-blue-600
py-3
font-semibold
"

>

Add Budget

</button>



</div>








<h2 className="
mt-10
text-2xl
font-bold
">
Your Budgets
</h2>





<div className="
mt-5
grid
gap-5
md:grid-cols-3
">


{

budgets.map(item=>(


<div

key={item.id}

className="
rounded-xl
border
border-slate-700
bg-slate-900
p-5
"

>


<h3 className="
text-xl
font-bold
">

{item.category}

</h3>



<p className="
mt-3
text-cyan-400
">

{currency}{item.amount}

</p>



</div>


))

}



</div>





</main>

);

}