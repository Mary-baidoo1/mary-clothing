//form submission
document.getElementById("lead-form")
.addEventListener("submit",function(e){
e.preventDefault();

//Get form valves
const firstname =this.element[0].valve;
const lastname=this.elements[1].valve;
const emailaddress=this.elements[2].valve;
const phone=this.elements[3].valve;
const countrycode=this.elements[4].valve;
const plan=this.elements[5].valve;

//in real scenario,you would send this data to a server
console.log("Lead captured:", {firstname,lastname,emailaddress,phone,countrycode,plan});

//show configuration
alert("Thank you for intrest! we will conact you shortly with our plan details")

//Reset form
this.reset()
})


//show popup after 5 seconds

setTimeout(function(){
    document.getElementById("email-popup").style.display="flex"
},5000);

//close popup when x is clicked
document.querySelector(".close-btn").addEventListener("click",function(){
    document.getElementById("email-popup").style.display="none";
})

//close when clicking outside content
document.getElementById("email-popup").addEventListener("click",function(e){
    if(e. target===this){
   this.style.display="none";     
    }
})
