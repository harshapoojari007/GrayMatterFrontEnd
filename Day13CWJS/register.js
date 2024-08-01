const onSubmit=()=>{
    event.preventDefault();
    let myForm=document.getElementById('myform')
    let fname=myForm.fname.value;
     document.getElementById('fname').innerHTML=fname
    document.getElementById('lname').innerHTML=myForm.lname

}