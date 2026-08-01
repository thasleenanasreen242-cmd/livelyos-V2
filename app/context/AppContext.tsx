"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const AppContext = createContext<any>(null);



export function AppProvider({
  children
}:{
  children: React.ReactNode;
}) {



const [profile,setProfile] = useState({

  name:"",
  email:"",
  phone:"",
  dob:"",
  location:"",
  occupation:"",
  incomeGoal:"",
  savingsGoal:"",
  family:"",
  expenseGoal:"",
  about:"",
  photo:""

});





const [currency,setCurrency] =
useState("₹");





const [income,setIncome] =
useState<any[]>([]);





const [expenses,setExpenses] =
useState<any[]>([]);





const [budgets,setBudgets] =
useState<any[]>([]);





const [settings,setSettings] =
useState({

theme:"Dark",

notifications:true,

emailAlerts:true,

privacy:true,

language:"English"

});









// LOAD DATA

useEffect(()=>{



const savedProfile =
localStorage.getItem("profile");


if(savedProfile){

setProfile(
JSON.parse(savedProfile)
);

}





const savedIncome =
localStorage.getItem("income");


if(savedIncome){

setIncome(
JSON.parse(savedIncome)
);

}





const savedExpenses =
localStorage.getItem("expenses");


if(savedExpenses){

setExpenses(
JSON.parse(savedExpenses)
);

}





const savedBudgets =
localStorage.getItem("budgets");


if(savedBudgets){

setBudgets(
JSON.parse(savedBudgets)
);

}






const savedSettings =
localStorage.getItem("settings");



if(savedSettings){


const data =
JSON.parse(savedSettings);



setSettings(data);



if(data.currency){

setCurrency(
data.currency
);

}


}



},[]);









// PROFILE UPDATE

const updateProfile=(data:any)=>{


const updated={

...profile,

...data

};



setProfile(updated);



localStorage.setItem(

"profile",

JSON.stringify(updated)

);


};









// SETTINGS UPDATE

const updateSettings=(data:any)=>{


const updated={

...settings,

...data

};



setSettings(updated);



localStorage.setItem(

"settings",

JSON.stringify(updated)

);



if(data.currency){

setCurrency(
data.currency
);

}


};









// INCOME

const addIncome=(item:any)=>{


const updated=[

...income,

{

...item,

id:Date.now()

}

];



setIncome(updated);



localStorage.setItem(

"income",

JSON.stringify(updated)

);


};









// EXPENSE

const addExpense=(item:any)=>{


const updated=[

...expenses,

{

...item,

id:Date.now()

}

];



setExpenses(updated);



localStorage.setItem(

"expenses",

JSON.stringify(updated)

);


};









// BUDGET

const addBudget=(item:any)=>{


const updated=[

...budgets,

{

...item,

id:Date.now()

}

];



setBudgets(updated);



localStorage.setItem(

"budgets",

JSON.stringify(updated)

);


};









return (

<AppContext.Provider

value={{



profile,

updateProfile,



currency,

updateSettings,

settings,



income,

expenses,

budgets,



addIncome,

addExpense,

addBudget



}}

>


{children}


</AppContext.Provider>


);



}








export function useApp(){


return useContext(
AppContext
);


}