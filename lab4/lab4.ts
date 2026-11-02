let tasks:string []=[];

   const button=document.getElementById("add");
   button?.addEventListener("click",()=>{
    const textInput=document.getElementById("input") as HTMLInputElement;
   const text= textInput.value;
   tasks.push(text);
   render()
  })
  

function render(){
    const div=document.getElementById("tasks");
    const p=document.createElement("p");
     p.textContent=tasks[tasks.length-1];
     div?.appendChild(p)

}
