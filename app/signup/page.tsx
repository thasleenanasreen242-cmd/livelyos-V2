"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";


export default function SignupPage(){

  const router = useRouter();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  const signup = async()=>{

    const {data,error} =
    await supabase.auth.signUp({

      email,
      password,

      options:{
        data:{
          name
        }
      }

    });


    if(error){

      alert(error.message);
      return;

    }


    if(data.user){

      alert(
        "Account created successfully"
      );

      router.push("/login");

    }

  };



return (

<main className="
min-h-screen
bg-slate-950
flex
items-center
justify-center
p-6
text-white
">


<div className="
w-full
max-w-md
bg-slate-900
rounded-2xl
border
border-slate-700
p-8
">


<h1 className="
text-3xl
font-bold
text-center
">

Create Account 🚀

</h1>


<p className="
text-center
text-slate-400
mt-2
">

Join LivelyOS

</p>



<div className="
mt-6
space-y-4
">


<input

className="
w-full
bg-slate-800
rounded-xl
p-3
"

placeholder="Full Name"

value={name}

onChange={(e)=>
setName(e.target.value)
}

/>



<input

className="
w-full
bg-slate-800
rounded-xl
p-3
"

placeholder="Email"

type="email"

value={email}

onChange={(e)=>
setEmail(e.target.value)
}

/>




<input

className="
w-full
bg-slate-800
rounded-xl
p-3
"

placeholder="Password"

type="password"

value={password}

onChange={(e)=>
setPassword(e.target.value)
}

/>



<button

onClick={signup}

className="
w-full
bg-blue-600
rounded-xl
p-3
font-bold
"

>

Create Free Account

</button>



<button

onClick={()=>
router.push("/login")
}

className="
w-full
text-blue-400
"

>

Already have account? Login

</button>


</div>


</div>


</main>

);


}