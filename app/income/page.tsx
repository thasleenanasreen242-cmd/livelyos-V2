"use client";

import { useState } from "react";
import { useApp } from "../context/AppContext";


export default function IncomePage() {

  const { income, addIncome } = useApp();


  const [source,setSource] = useState("");
  const [amount,setAmount] = useState("");



  const addNewIncome = ()=>{


    if(
      !source ||
      !amount
    ){

      alert("Please fill all fields");
      return;

    }



    const newIncome = {

      id:Date.now(),

      source,

      amount:Number(amount),

      date:
      new Date().toLocaleDateString(),

    };



    addIncome(newIncome);



    setSource("");

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
Income 💰
</h1>


<p className="
mt-2
text-slate-400
">
Track your earnings
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

value={source}

onChange={(e)=>
setSource(e.target.value)
}

placeholder="Income source (Salary, Business...)"

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







<button

onClick={addNewIncome}

className="
mt-5
w-full
rounded-lg
bg-green-600
py-3
font-semibold
"

>

Add Income

</button>




</div>








<h2 className="
mt-10
text-2xl
font-bold
">
Income History
</h2>







<div className="
mt-5
grid
gap-5
md:grid-cols-3
">



{
income.map((item:any)=>(


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
{item.source}
</h3>



<p className="
mt-2
text-green-400
">
₹{item.amount}
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