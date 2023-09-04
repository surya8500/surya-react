import React from "react";

function Todo(){

    var [arr,setArr]=React.useState([ {
        title:'clear bills',
        status:false
      },
      {
        title:'Moksha School',
        status:true
      },
      {
        title:'Manas Bus Fee',
        status:false
      },
      {
        title:'Gold Bill',
        status:false
      },
      {
        title:'Current Bill',
        status:true
      },])
      console.log(arr)

      function abc(){
        var newtask=document.getElementById("i").value
        setArr([...arr,{ title:newtask}])
      }


      function done(i){
        var x=[...arr];
        x[i].status=!x[i].status;
        setArr([...x])


      }
      function undo(i){
        var x=[...arr];
        x[i].status=!x[i].status;
        setArr([...x])

      }

return(

  <div>
    <input type="text" id="i" />
    <button onClick={abc}>add task</button>

    {
      arr.map(function(s,i){
        return(
          <div className="todo">
            <ul id="a">
            <li style={ s.status===true? {backgroundColor:"green"}:{backgroundColor:"red"} } >{s.title}  <button className="todo-button" onClick={()=>{done(i)}}>done</button> <button onClick={()=>{undo(i)}} className="todo-button">undo</button></li>
            
            </ul>
            </div>
        )


      })
    }
  </div>
)

}
export default Todo