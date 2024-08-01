const onSubmit=()=>{
    event.preventDefault();
   let fname=document.getElementById('fname').value;
   let lname=document.getElementById('lname').value;
   let username=document.getElementById('username').value;
   let password=document.getElementById('password').value;
   let dob=document.getElementById('dob').value;
   let mobile=document.getElementById('mobile').value;
   let address=document.getElementById('address').value;

    let checkbox=document.getElementsByName('skill');
        let checkboxes=Array.from(checkbox)
       let checkboxesValues= checkboxes.filter(i=>i.checked).map(i=>i.value).join(',')
    
       let selected=document.getElementsByName('qual');
       let selects=Array.from(selected)
       let selectedQual=selects.filter(i=>i.selected).map(i=>i.value)

       let radio=document.getElementsByName('gender');
       let radios=Array.from(radio)
      let selectedGender = radios.filter(i=>i.checked).map(i=>i.value)




let fileInput = document.getElementById('fileInput');
let files = fileInput.files;
if (files.length > 0) {
    var fileName = files[0].name;
    console.log("Selected file:", fileName);
} else {
    filename="No file Selected";
    console.log("No file selected.");
}


let photoInput = document.getElementById('photoInput');
let photos = photoInput.files;
if (photos.length > 0) {
    var photoName = photos[0].name;
    console.log("Selected file:", photoName);
} else {
    photoName="No photos Selected";
    console.log("No photos selected.");
}

const formData={
"First Name":fname,
"Last Name":lname,
"Username":username,
"Password":password,
"DOB":dob,
"Mobile":mobile,
"Address":address,
"Skills":checkboxesValues,
"Qualification":selectedQual,
"Gender":selectedGender,
"Profil":fileName,
"Photo":photoName

}
localStorage.setItem('formData', JSON.stringify(formData));
window.location.href="UserDeatils.html";
//console.log(fname+" "+lname+" "+username +" "+ password +" "+ dob +" "+mobile+" "+ address +" "+checkboxesValues +" "+selectedQual +" "+selectedGender)







}