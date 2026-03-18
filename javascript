function toggleMode(){
document.body.classList.toggle("dark")
}

document.getElementById("form").addEventListener("submit",function(e){

let name=document.getElementById("name").value
let email=document.getElementById("email").value

if(name=="" || email==""){
alert("Please fill all details")
e.preventDefault()
}
else{
alert("Message Sent Successfully")
}

})

let text = "Apurva Wankhade - Web Developer";
let index = 0;

function typing(){
if(index < text.length){
document.getElementById("typing").innerHTML += text.charAt(index);
index++;
setTimeout(typing,100);
}
}

typing();

document.addEventListener("mousemove",function(e){
const cursor=document.querySelector(".cursor");
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});



// Make sure you include EmailJS SDK in your HTML head:
// <script type="text/javascript" src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js"></script>

emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      alert('Message sent successfully! ✅');
    }, function(error) {
      alert('Oops! Something went wrong...', error);
    });

  this.reset(); // Clear the form
});
