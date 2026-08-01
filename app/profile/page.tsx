"use client";

import { useApp } from "../context/AppContext";


export default function ProfilePage() {


  const {
    profile,
    updateProfile,
    currency
  } = useApp();





  const handleChange = (
    field:string,
    value:string
  )=>{


    updateProfile({

      [field]:value

    });


  };







  const uploadPhoto = (
    e:any
  )=>{


    const file =
    e.target.files?.[0];



    if(file){


      const reader =
      new FileReader();



      reader.onload=()=>{


        updateProfile({

          photo:reader.result

        });


      };



      reader.readAsDataURL(file);


    }


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
Profile 👤
</h1>


<p className="
mt-2
text-slate-400
">
Manage your personal information
</p>







<div className="
mt-8
grid
gap-8
lg:grid-cols-3
">







{/* PROFILE CARD */}



<section className="
rounded-2xl
border
border-slate-700
bg-slate-900
p-6
">


<div className="
flex
flex-col
items-center
text-center
">





<div className="
h-32
w-32
overflow-hidden
rounded-full
bg-blue-600
flex
items-center
justify-center
text-5xl
">


{

profile?.photo

?

<img

src={profile.photo}

alt="Profile"

className="
h-full
w-full
object-cover
"

/>


:

"👤"


}



</div>







<label className="
mt-5
cursor-pointer
rounded-lg
bg-blue-600
px-5
py-2
font-semibold
hover:bg-blue-700
">

Upload Photo


<input

type="file"

accept="image/*"

hidden

onChange={uploadPhoto}

/>


</label>







<h2 className="
mt-5
text-2xl
font-bold
">

{
profile?.name ||
"Your Name"
}

</h2>




<p className="
text-slate-400
">

{
profile?.occupation ||
"Occupation"
}

</p>



</div>








<div className="
mt-8
space-y-4
text-sm
">


<p>
📧 {profile?.email || "Email"}
</p>


<p>
📱 {profile?.phone || "Phone"}
</p>


<p>
📍 {profile?.location || "Location"}
</p>


<p>
💰 Income Goal:
{currency}
{profile?.incomeGoal || 0}
</p>


<p>
🎯 Savings Goal:
{currency}
{profile?.savingsGoal || 0}
</p>


</div>





</section>









{/* FORM */}



<section className="
rounded-2xl
border
border-slate-700
bg-slate-900
p-6
lg:col-span-2
">



<h2 className="
text-2xl
font-bold
">
Personal Details
</h2>






<div className="
mt-6
grid
gap-4
md:grid-cols-2
">





<Input

label="Full Name"

value={profile?.name}

placeholder="Your name"

onChange={(v:any)=>
handleChange("name",v)
}

/>





<Input

label="Email"

value={profile?.email}

placeholder="Email"

onChange={(v:any)=>
handleChange("email",v)
}

/>





<Input

label="Phone"

value={profile?.phone}

placeholder="Phone"

onChange={(v:any)=>
handleChange("phone",v)
}

/>





<Input

label="Date of Birth"

value={profile?.dob}

placeholder="DD/MM/YYYY"

onChange={(v:any)=>
handleChange("dob",v)
}

/>





<Input

label="Location"

value={profile?.location}

placeholder="City"

onChange={(v:any)=>
handleChange("location",v)
}

/>





<Input

label="Occupation"

value={profile?.occupation}

placeholder="Job / Business"

onChange={(v:any)=>
handleChange("occupation",v)
}

/>





<Input

label="Monthly Income Goal"

value={profile?.incomeGoal}

placeholder="50000"

onChange={(v:any)=>
handleChange("incomeGoal",v)
}

/>





<Input

label="Savings Goal"

value={profile?.savingsGoal}

placeholder="10000"

onChange={(v:any)=>
handleChange("savingsGoal",v)
}

/>





<Input

label="Family Members"

value={profile?.family}

placeholder="Number"

onChange={(v:any)=>
handleChange("family",v)
}

/>





<Input

label="Expense Target"

value={profile?.expenseGoal}

placeholder="30000"

onChange={(v:any)=>
handleChange("expenseGoal",v)
}

/>






</div>







<label className="
mt-6
block
text-slate-400
">

About You

</label>



<textarea

value={profile?.about || ""}

onChange={(e)=>
handleChange(
"about",
e.target.value
)
}

className="
mt-2
h-32
w-full
rounded-lg
bg-slate-800
p-3
"

placeholder="Write about yourself"

/>






<div className="
mt-6
rounded-lg
bg-green-900/30
p-4
text-green-400
">

✓ Profile saved automatically

</div>





</section>







</div>






</main>

);

}








function Input({
label,
value,
placeholder,
onChange
}:any){


return (

<div>


<label className="
text-sm
text-slate-400
">

{label}

</label>



<input

value={value || ""}

placeholder={placeholder}

onChange={(e)=>
onChange(e.target.value)
}

className="
mt-2
w-full
rounded-lg
bg-slate-800
p-3
outline-none
"

/>


</div>

);


}