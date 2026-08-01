"use client";

import { useEffect, useState } from "react";

type Meal = {
  id: number;
  day: string;
  mealType: string;
  meal: string;
  calories: number;
  ingredients: string;
};


export default function MealPlannerPage() {

  const [day, setDay] = useState("");
  const [mealType, setMealType] = useState("");
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  const [ingredients, setIngredients] = useState("");

  const [plans, setPlans] = useState<Meal[]>([]);


  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];


  const mealTypes = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
  ];


  useEffect(() => {

    const saved =
      localStorage.getItem("mealPlans");

    if(saved){
      setPlans(JSON.parse(saved));
    }

  }, []);



  const saveMeals = (data:Meal[]) => {

    setPlans(data);

    localStorage.setItem(
      "mealPlans",
      JSON.stringify(data)
    );

  };



  const addMeal = () => {

    if(
      !day ||
      !mealType ||
      !meal ||
      !calories
    ){
      alert("Please complete all fields");
      return;
    }


    const newMeal:Meal = {

      id:Date.now(),

      day,

      mealType,

      meal,

      calories:Number(calories),

      ingredients,

    };


    saveMeals([
      ...plans,
      newMeal
    ]);



    setDay("");
    setMealType("");
    setMeal("");
    setCalories("");
    setIngredients("");

  };




  const deleteMeal = (id:number)=>{

    const updated =
      plans.filter(
        item=>item.id !== id
      );


    saveMeals(updated);

  };



  const totalCalories =
    plans.reduce(
      (sum,item)=>
        sum + item.calories,
      0
    );



  const groceryList =
    plans.flatMap(item =>
      item.ingredients
      .split(",")
      .map(i=>i.trim())
      .filter(Boolean)
    );




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
        Meal Planner 🍽️
      </h1>


      <p className="
        mt-2
        text-slate-400
      ">
        Plan meals, track calories and manage groceries
      </p>



      {/* ADD MEAL */}

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

          value={day}

          onChange={(e)=>
            setDay(e.target.value)
          }

          className="
          w-full
          rounded-lg
          bg-slate-800
          p-3
          "

        >

          <option value="">
            Select Day
          </option>


          {days.map(day=>(

            <option key={day}>
              {day}
            </option>

          ))}


        </select>




        <select

          value={mealType}

          onChange={(e)=>
            setMealType(e.target.value)
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
            Select Meal Type
          </option>


          {mealTypes.map(type=>(

            <option key={type}>
              {type}
            </option>

          ))}


        </select>




        <input

          value={meal}

          onChange={(e)=>
            setMeal(e.target.value)
          }

          placeholder="
          Meal name e.g Chicken Rice
          "

          className="
          mt-4
          w-full
          rounded-lg
          bg-slate-800
          p-3
          "

        />




        <input

          type="number"

          value={calories}

          onChange={(e)=>
            setCalories(e.target.value)
          }

          placeholder="Calories"

          className="
          mt-4
          w-full
          rounded-lg
          bg-slate-800
          p-3
          "

        />





        <input

          value={ingredients}

          onChange={(e)=>
            setIngredients(e.target.value)
          }

          placeholder="
          Ingredients: Rice, Chicken, Salad
          "

          className="
          mt-4
          w-full
          rounded-lg
          bg-slate-800
          p-3
          "

        />





        <button

          onClick={addMeal}

          className="
          mt-5
          w-full
          rounded-lg
          bg-blue-600
          py-3
          font-semibold
          hover:bg-blue-700
          "

        >

          Add Meal

        </button>



      </div>





      {/* SUMMARY */}

      <div className="
        mt-8
        grid
        gap-5
        md:grid-cols-3
      ">


        <div className="
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          p-5
        ">

          <p className="text-slate-400">
            Total Meals
          </p>

          <h2 className="text-3xl font-bold">
            {plans.length}
          </h2>

        </div>



        <div className="
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          p-5
        ">

          <p className="text-slate-400">
            Total Calories
          </p>

          <h2 className="text-3xl font-bold text-green-400">
            {totalCalories}
          </h2>

        </div>


      </div>






      {/* MEAL CARDS */}

      <h2 className="
        mt-10
        text-2xl
        font-bold
      ">
        Weekly Plan
      </h2>




      <div className="
        mt-5
        grid
        gap-5
        md:grid-cols-3
      ">


        {plans.map(item=>(


          <div

            key={item.id}

            className="
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
            p-5
            "

          >


            <h3 className="text-xl font-bold">
              {item.day}
            </h3>


            <p className="text-blue-400">
              {item.mealType}
            </p>


            <p className="mt-3">
              🍽️ {item.meal}
            </p>


            <p className="mt-2 text-green-400">
              🔥 {item.calories} kcal
            </p>


            <p className="
              mt-2
              text-sm
              text-slate-400
            ">
              🥗 {item.ingredients}
            </p>




            <button

              onClick={()=>
                deleteMeal(item.id)
              }

              className="
              mt-4
              text-red-400
              "

            >

              Delete

            </button>


          </div>


        ))}


      </div>





      {/* GROCERY */}

      <div className="
        mt-10
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
          🛒 Grocery List
        </h2>



        {
          groceryList.length === 0 ?

          <p className="
            mt-3
            text-slate-400
          ">
            Add ingredients to generate grocery list
          </p>


          :

          <ul className="
            mt-4
            list-disc
            pl-5
          ">

            {
              [...new Set(groceryList)]
              .map((item,index)=>(

                <li key={index}>
                  {item}
                </li>

              ))
            }

          </ul>

        }


      </div>



    </main>

  );

}