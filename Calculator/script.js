let input=document.getElementById("inputext");
let result=document.getElementById("inputext");
let display=(number)=>{
    result.value+=number;

}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter the valid result")
    }
}
function clr(){
    result.value=" ";
}
function del(){
    result.value=result.value.slice(0,-1); //deletes last one number.
}