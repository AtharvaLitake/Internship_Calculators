var form = document.getElementById("form");
form.addEventListener("submit", function (event)  { 
  var age = document.getElementById("myage").value;
  age = parseInt(age);
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var height_ft = document.getElementById("height_ft").value;
  height_ft = parseInt(height_ft);
  var height_inc = document.getElementById("height_inc").value;
  height_inc = parseInt(height_inc);
  var height = height_ft * 30.48 + height_inc * 2.54;
  var weight = document.getElementById("weight").value;
  weight = parseInt(weight);
  var activity_level = document.querySelector(
    'input[name="radio1"]:checked'
  ).value;
  activity_level = parseFloat(activity_level);
  var end_goals = document.getElementById("end_goals").value;
  var weight_goals = document.getElementById("weight_goals").value;
  weight_goals = parseInt(weight_goals);
  //BMR CALCULATION STARTS HERE
  var bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  //BMR CALCULATION ENDS HERE
  //ACTIVITY LEVEL CALCULATION STARTS HERE
  var activity = bmr * activity_level;
  //Calories Goal calculatations starts here
  var calorie_goal;
  if (end_goals === "Lose Weight") {
    calorie_goal = activity - activity * (weight_goals / 100);
  } else if (end_goals === "Maintain") {
    calorie_goal=activity
  } else {
    calorie_goal = activity + activity * (weight_goals / 100);
  }
  //Calories Goal calculatations ends here
  //final calories calculation
  var protein;
  var carb;
  var fats;
  protein = (0.25 * calorie_goal) / 4;
  protein = Math.round(protein);
  fats = (0.7 * calorie_goal) / 9;
  fats = Math.round(fats);
  carb = (0.05 * calorie_goal) / 4;
  carb = Math.round(carb);
  document.getElementById("calorie_goal").innerText=Math.round(calorie_goal)+ " g";
  document.getElementById("protein").innerText =protein + " g";
  document.getElementById("fats").innerText =fats + " g";
  document.getElementById("carb").innerText =carb + " g";
  var outputDiv1 = document.getElementById("output1")
  var outputDiv2 = document.getElementById("output2")
  var outputDiv3 = document.getElementById("output3")
  var outputDiv4 = document.getElementById("output4")
  var h1none=document.getElementById("h1_nonediv")
  h1none.style.display="block";
  outputDiv1.style.display = "block";
  outputDiv2.style.display = "block";
  outputDiv3.style.display = "block";
  outputDiv4.style.display = "block";
  return false;
})
