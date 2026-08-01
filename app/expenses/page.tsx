"use client";

import { useState } from "react";
import { useApp } from "../context/AppContext";


export default function ExpensesPage() {

  const { expenses, addExpense } = useApp();


  const [title,setTitle] = useState("");
  const [amount,setAmount] = useState("");
  const [category,setCategory] = useState("");



  const categories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Health",
    "Education",
    "Other",
  ];



  const handleAddExpense = ()=>{


    if(
      !title ||
      !amount ||
      !category
    ){

      alert("Please fill all fields");
      return;

    }



    const newExpense = {

      id: Date.now(),

      title,

      amount:Number(amount),

      category,

      date:
      new Date().toLocaleDateString(),

    };



    addExpense(newExpense);



    setTitle("");

    setAmount("");

    setCategory("");


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
Expenses 💸
</h1>


<p className="
mt-2
text-slate-400
">
Track your daily spending
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



<input

value={title}

onChange={(e)=>
setTitle(e.target.value)
}

placeholder="Expense name"

className="
w-full
rounded-lg
bg-slate-800
p-3
"

/>





<input

type="number"

value={amount}

onChange={(e)=>
setAmount(e.target.value)
}

placeholder="Amount"

className="
mt-4
w-full
rounded-lg
bg-slate-800
p-3
"

/>






<select

value={category}

onChange={(e)=>
setCategory(e.target.value)
}

className="
mt-4
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






<button

onClick={handleAddExpense}

className="
mt-5
w-full
rounded-lg
bg-red-600
py-3
font-semibold
"

>

Add Expense

</button>




</div>








<h2 className="
mt-10
text-2xl
font-bold
">
Expense History
</h2>





<div className="
mt-5
grid
gap-5
md:grid-cols-3
">


{
expenses.map((item:any)=>(


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
{item.title}
</h3>


<p className="
mt-2
text-red-400
">
₹{item.amount}
</p>


<p className="
text-blue-400
">
{item.category}
</p>


<p className="
text-sm
text-slate-400
">
{item.date}
</p>



</div>


))

}



</div>




</main>

);

}