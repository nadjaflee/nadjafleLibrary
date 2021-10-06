let passVision = document.getElementById('vision-icon');
let password = document.getElementById('password');
let passVisionOn = document.getElementById('vision-on-icon');
passVision.onclick = function() {
    password.type = "text";
    this.style.display = "none";
    passVisionOn.style.display = "block";
}
passVisionOn.onclick = function() {
    password.type = "password";
    this.style.display = "none";
    passVision.style.display = "block";
}