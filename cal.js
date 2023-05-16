function getNumb(numb){
   document.getElementById('result').value +=numb;
  
  // console.log(numb);
}
function clearAll(){
    document.getElementById('result').value ="";
   
}
function removeNum(){
    var res=document.getElementById('result').value;
    document.getElementById('result').value=document.getElementById('result').value.slice(0, res.length-1)
   
}
function getResult(){
    document.getElementById('result').value=eval(document.getElementById('result').value);

}
function power (){

    
}