var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  var age = document.getElementById("myage").value;
  age = parseInt(age);
  if (age <= 0) {
    alert("Enter a valid Age");
    return false;
  }
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var height_ft = document.getElementById("height_ft").value;
  height_ft = parseInt(height_ft);
  if (height_ft <= 0) {
    alert("Enter appropriate height in feet");
    return false;
  }
  var height_inc = document.getElementById("height_inc").value;
  height_inc = parseInt(height_inc);
  if (height_inc <= 0) {
    alert("Enter appropriate height in inches");
    return false;
  }
  var height = height_ft * 30.48 + height_inc * 2.54;
  var weight = document.getElementById("weight").value;
  weight = parseInt(weight);
  if (weight <= 0) {
    alert("Enter appropriate Weight in kilograms");
    return false;
  }
  //BMR CALCULATION STARTS HERE
  var bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  //BMR CALCULATION ENDS HERE
  document.getElementById("BMR").innerText =
  Math.round(bmr) + " Calories / Day";
  var outputDiv1 = document.getElementById("output1");
  var h1none = document.getElementById("h1_nonediv");
  h1none.style.display = "block";
  outputDiv1.style.display = "block";
  return false;
});
