"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar() {


const pathname =
usePathname();



const menu = [

{
name:"Dashboard",
icon:"🏠",
path:"/dashboard"
},

{
name:"Expenses",
icon:"💸",
path:"/expenses"
},

{
name:"Income",
icon:"💰",
path:"/income"
},

{
name:"Budget",
icon:"📊",
path:"/budget"
},

{
name:"Meal Planner",
icon:"🍽️",
path:"/meal-planner"
},

{
name:"Daily Planner",
icon:"📅",
path:"/daily-planner"
},

{
name:"Profile",
icon:"👤",
path:"/profile"
},

{
name:"Settings",
icon:"⚙️",
path:"/settings"
},

];







return (

<aside className="
min-h-screen
w-64
border-r
border-slate-800
bg-slate-950
p-5
text-white
">





<h1 className="
mb-8
text-3xl
font-bold
text-blue-400
">

LivelyOS

</h1>







<nav className="
space-y-2
">


{

menu.map((item)=>(


<Link

key={item.path}

href={item.path}

className={`

flex
items-center
gap-3
rounded-xl
px-4
py-3
transition


${
pathname === item.path

?

"bg-blue-600 text-white shadow-lg"

:

"text-slate-400 hover:bg-slate-800 hover:text-white"

}

`}

>


<span className="
text-xl
">

{item.icon}

</span>



<span className="
font-medium
">

{item.name}

</span>



</Link>


))

}



</nav>





</aside>

);

}