"use client";

import { useState } from "react";
import { useApp } from "../context/AppContext";


export default function SettingsPage(){


const {
currency,
updateSettings,
profile
}=useApp();




const [theme,setTheme]=useState("Dark");

const [notifications,setNotifications]=useState(true);

const [emailAlerts,setEmailAlerts]=useState(true);

const [privacy,setPrivacy]=useState(true);

const [language,setLanguage]=useState("English");







const saveSettings=()=>{


updateSettings({

currency,
theme,
notifications,
emailAlerts,
privacy,
language

});


alert(
"Settings updated successfully"
);


};







const exportData=()=>{


const data={

profile:
JSON.parse(
localStorage.getItem("profile") || "{}"
),

income:
JSON.parse(
localStorage.getItem("income") || "[]"
),

expenses:
JSON.parse(
localStorage.getItem("expenses") || "[]"
),

budgets:
JSON.parse(
localStorage.getItem("budgets") || "[]"
)

};




const blob =
new Blob(

[
JSON.stringify(
data,
null,
2
)
],

{
type:"application/json"
}

);



const url =
URL.createObjectURL(blob);



const link =
document.createElement("a");


link.href=url;


link.download=
"LivelyOS-backup.json";


link.click();


};








const resetData=()=>{


const confirmReset =
confirm(
"Are you sure you want to delete all data?"
);



if(confirmReset){

localStorage.clear();

window.location.reload();

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
Settings ⚙️
</h1>


<p className="
mt-2
text-slate-400
">
Manage your LivelyOS preferences
</p>








{/* PROFILE HEADER */}


<section className="
mt-8
rounded-2xl
border
border-slate-700
bg-gradient-to-r
from-slate-900
to-slate-800
p-6
">


<div className="
flex
items-center
gap-5
">


<div className="
h-20
w-20
overflow-hidden
rounded-full
bg-blue-600
flex
items-center
justify-center
text-3xl
">


{

profile?.photo

?

<img

src={profile.photo}

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




<div>

<h2 className="
text-2xl
font-bold
">

{
profile?.name ||
"User"
}

</h2>


<p className="
text-slate-400
">

{
profile?.email ||
"Manage your account"
}

</p>


</div>


</div>


</section>









<div className="
mt-8
grid
gap-6
lg:grid-cols-2
">







{/* APP PREFERENCES */}


<Card title="App Preferences">


<SettingSelect

label="Currency"

value={currency}

onChange={(v:any)=>
updateSettings({
currency:v
})
}

options={[
"₹",
"AED",
"$",
"€"
]}

/>






<SettingSelect

label="Language"

value={language}

onChange={setLanguage}

options={[
"English",
"Malayalam",
"Arabic"
]}

/>







<SettingSelect

label="Theme"

value={theme}

onChange={setTheme}

options={[
"Dark",
"Light"
]}

/>





</Card>









{/* NOTIFICATIONS */}


<Card title="Notifications">


<Toggle

title="Push Notifications"

value={notifications}

setValue={setNotifications}

/>



<Toggle

title="Email Alerts"

value={emailAlerts}

setValue={setEmailAlerts}

/>


</Card>









{/* PRIVACY */}


<Card title="Privacy & Security">


<Toggle

title="Allow Analytics"

value={privacy}

setValue={setPrivacy}

/>



<p className="
mt-5
rounded-lg
bg-slate-800
p-4
text-sm
text-slate-400
">

Your financial data stays stored securely
on your device.

</p>


</Card>









{/* DATA MANAGEMENT */}


<Card title="Data Management">


<button

onClick={exportData}

className="
w-full
rounded-xl
bg-green-600
py-3
font-semibold
"

>

⬇ Export Backup

</button>




<button

onClick={resetData}

className="
mt-4
w-full
rounded-xl
bg-red-600
py-3
font-semibold
"

>

🗑 Delete All Data

</button>



</Card>






</div>








<button

onClick={saveSettings}

className="
mt-8
w-full
rounded-xl
bg-blue-600
py-4
text-lg
font-bold
hover:bg-blue-700
"

>

Save All Settings

</button>








<div className="
mt-8
rounded-2xl
border
border-slate-700
bg-slate-900
p-6
">


<h2 className="
text-xl
font-bold
">

About LivelyOS

</h2>


<p className="
mt-3
text-slate-400
">

Version 1.0.0

<br/>

Your personal finance and lifestyle
management assistant.

</p>


</div>







</main>

);

}









function Card({
title,
children
}:any){


return (

<section className="
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

{title}

</h2>


{children}


</section>

);


}









function Toggle({
title,
value,
setValue
}:any){


return (

<div className="
flex
items-center
justify-between
py-3
">


<span>

{title}

</span>



<input

type="checkbox"

checked={value}

onChange={(e)=>
setValue(
e.target.checked
)
}

/>


</div>

);


}









function SettingSelect({
label,
value,
onChange,
options
}:any){


return (

<div className="
mb-5
">


<label className="
text-slate-400
">

{label}

</label>


<select

value={value}

onChange={(e)=>
onChange(e.target.value)
}

className="
mt-2
w-full
rounded-xl
bg-slate-800
p-3
"


>


{

options.map(
(item:string)=>(

<option key={item}>

{item}

</option>

))

}


</select>


</div>

);


}