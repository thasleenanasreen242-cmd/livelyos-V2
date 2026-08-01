"use client";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  category: string;
  time: string;
  priority: string;
  completed: boolean;
};


export default function DailyPlannerPage() {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("");

  const [tasks, setTasks] = useState<Task[]>([]);


  const categories = [
    "Work",
    "Study",
    "Health",
    "Family",
    "Personal",
    "Other",
  ];


  const priorities = [
    "High",
    "Medium",
    "Low",
  ];



  useEffect(()=>{

    const saved =
      localStorage.getItem("dailyTasks");

    if(saved){
      setTasks(JSON.parse(saved));
    }

  },[]);




  const saveTasks = (data:Task[])=>{

    setTasks(data);

    localStorage.setItem(
      "dailyTasks",
      JSON.stringify(data)
    );

  };




  const addTask = ()=>{


    if(
      !title ||
      !category ||
      !time ||
      !priority
    ){

      alert("Please fill all fields");
      return;

    }



    const newTask:Task={

      id:Date.now(),

      title,

      category,

      time,

      priority,

      completed:false,

    };



    saveTasks([
      ...tasks,
      newTask
    ]);



    setTitle("");
    setCategory("");
    setTime("");
    setPriority("");

  };






  const toggleTask=(id:number)=>{


    const updated =
      tasks.map(task=>

        task.id===id

        ?

        {
          ...task,
          completed:!task.completed
        }

        :

        task

      );


    saveTasks(updated);

  };







  const deleteTask=(id:number)=>{


    const updated =
      tasks.filter(
        task=>task.id!==id
      );


    saveTasks(updated);


  };





  const completed =
    tasks.filter(
      task=>task.completed
    ).length;



  const progress =
    tasks.length===0
    ?
    0
    :
    Math.round(
      (completed/tasks.length)*100
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
        Daily Planner 📅
      </h1>


      <p className="
        mt-2
        text-slate-400
      ">
        Organize your day and stay productive
      </p>





      {/* ADD TASK */}


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

          placeholder="Task name"

          className="
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





        <input

          type="time"

          value={time}

          onChange={(e)=>
            setTime(e.target.value)
          }

          className="
          mt-4
          w-full
          rounded-lg
          bg-slate-800
          p-3
          "

        />





        <select

          value={priority}

          onChange={(e)=>
            setPriority(e.target.value)
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
            Select Priority
          </option>


          {
            priorities.map(item=>(

              <option key={item}>
                {item}
              </option>

            ))
          }


        </select>





        <button

          onClick={addTask}

          className="
          mt-5
          w-full
          rounded-lg
          bg-blue-600
          py-3
          font-semibold
          "

        >

          Add Task

        </button>



      </div>







      {/* PROGRESS */}


      <div className="
        mt-8
        rounded-2xl
        border
        border-slate-700
        bg-slate-900
        p-6
      ">


        <h2 className="text-xl font-bold">
          Today's Progress
        </h2>


        <p className="
          mt-2
          text-3xl
          font-bold
          text-green-400
        ">
          {progress}%
        </p>


        <div className="
          mt-4
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
              width:`${progress}%`
            }}

          />

        </div>


      </div>








      {/* TASK LIST */}


      <h2 className="
        mt-10
        text-2xl
        font-bold
      ">
        Today's Tasks
      </h2>




      <div className="
        mt-5
        grid
        gap-5
        md:grid-cols-3
      ">



        {
          tasks.map(task=>(


            <div

              key={task.id}

              className="
              rounded-2xl
              border
              border-slate-700
              bg-slate-900
              p-5
              "

            >


              <h3 className={`
                text-xl
                font-bold
                ${
                  task.completed
                  ?
                  "line-through text-slate-500"
                  :
                  ""
                }
              `}>
                {task.title}
              </h3>



              <p className="mt-2 text-blue-400">
                {task.category}
              </p>



              <p className="mt-2">
                ⏰ {task.time}
              </p>



              <p className="mt-2 text-yellow-400">
                ⚡ {task.priority}
              </p>




              <button

                onClick={()=>
                  toggleTask(task.id)
                }

                className="
                mt-4
                text-green-400
                "

              >

                {
                  task.completed
                  ?
                  "Completed"
                  :
                  "Mark Complete"
                }

              </button>




              <button

                onClick={()=>
                  deleteTask(task.id)
                }

                className="
                ml-5
                text-red-400
                "

              >

                Delete

              </button>



            </div>


          ))
        }



      </div>




    </main>

  );

}