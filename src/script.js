function calculateAge(){
const day=parseInt(document.querySelector("#day").value);
const month=parseInt(document.querySelector("#month").value);
const year=parseInt(document.querySelector("#year").value)

if(isNaN(day)|| isNaN(month)|| isNaN(year)||day<1 || day>31 || month<1 || month>12){
    alert("write the valid date")
    return;
}
const birthdate = new Date(`${year}-${month}-${day}`)
if(isNaN(birthdate.getTime())){
    alert("write the valid date")
    return
}
if (day < 1 || day > new Date(year, month, 0).getDate()) {
    alert("Please enter a valid date.");
    return;
}
const currentDate = new Date();
let age= currentDate.getFullYear()- birthdate.getFullYear();
let monthDiff= currentDate.getMonth()-birthdate.getMonth();
let dayDiff= currentDate.getDate()-birthdate.getDate();
if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--; // Adjust age if birthdate hasn't occurred this year yet
    monthDiff += 12; 
   // Add 12 months to compensate for the negative month difference
}
document.getElementById('reyear').textContent = `${age}`;
document.getElementById('remonth').textContent=`${monthDiff}`;
document.getElementById('reday').textContent=`${dayDiff}`


}
const calculateBtn =document.getElementById('calBtn');
calculateBtn.addEventListener('click',function(){
    calculateAge()
})