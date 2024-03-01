const pointsTable = [
  //410
  { height: 410, weightRanges: [0, 53.9], points: 0 },
  { height: 410, weightRanges: [54, 64.8], points: 1 },
  { height: 410, weightRanges: [64.9, 86.5], points: 2 },
  { height: 410, weightRanges: [86.6, 300], points: 3 },
  //411
  { height: 411, weightRanges: [0, 56.1], points: 0 },
  { height: 411, weightRanges: [56.2, 66.7], points: 1 },
  { height: 411, weightRanges: [66.8, 89.3], points: 2 },
  { height: 411, weightRanges: [89.4, 300], points: 3 },
  //50
  { height: 50, weightRanges: [0, 58], points: 0 },
  { height: 50, weightRanges: [58.1, 68.9], points: 1 },
  { height: 50, weightRanges: [69, 92.1], points: 2 },
  { height: 50, weightRanges: [92.2, 300], points: 3 },
  //51
  { height: 51, weightRanges: [0, 59.8], points: 0 },
  { height: 51, weightRanges: [59.9, 71.2], points: 1 },
  { height: 51, weightRanges: [71.3, 95.3], points: 2 },
  { height: 51, weightRanges: [95.4, 300], points: 3 },
  //52
  { height: 52, weightRanges: [0, 61.6], points: 0 },
  { height: 52, weightRanges: [61.7, 73.9], points: 1 },
  { height: 52, weightRanges: [74, 98.4], points: 2 },
  { height: 52, weightRanges: [98.5, 300], points: 3 },
  //53
  { height: 53, weightRanges: [0, 63.9], points: 0 },
  { height: 53, weightRanges: [64, 76.2], points: 1 },
  { height: 53, weightRanges: [76.3, 101.6], points: 2 },
  { height: 53, weightRanges: [101.7, 300], points: 3 },
  //54
  { height: 54, weightRanges: [0, 65.7], points: 0 },
  { height: 54, weightRanges: [65.8, 78.5], points: 1 },
  { height: 54, weightRanges: [78.6, 104.8], points: 2 },
  { height: 54, weightRanges: [104.9, 300], points: 3 },
  //55
  { height: 55, weightRanges: [0, 67.9], points: 0 },
  { height: 55, weightRanges: [68, 81.2], points: 1 },
  { height: 55, weightRanges: [81.3, 108.4], points: 2 },
  { height: 55, weightRanges: [108.5, 300], points: 3 },
  //56
  { height: 56, weightRanges: [0, 70.2], points: 0 },
  { height: 56, weightRanges: [70.3, 83.9], points: 1 },
  { height: 56, weightRanges: [84, 111.6], points: 2 },
  { height: 56, weightRanges: [111.7, 300], points: 3 },
  //57
  { height: 57, weightRanges: [0, 70.2], points: 0 },
  { height: 57, weightRanges: [70.3, 83.9], points: 1 },
  { height: 57, weightRanges: [84, 111.6], points: 2 },
  { height: 57, weightRanges: [111.7, 300], points: 3 },
  //58
  { height: 58, weightRanges: [0, 70.2], points: 0 },
  { height: 58, weightRanges: [70.3, 83.9], points: 1 },
  { height: 58, weightRanges: [84, 111.6], points: 2 },
  { height: 58, weightRanges: [111.7, 300], points: 3 },
  //59
  { height: 59, weightRanges: [0, 76.5], points: 0 },
  { height: 59, weightRanges: [76.6, 91.5], points: 1 },
  { height: 59, weightRanges: [91.6, 120], points: 2 },
  { height: 59, weightRanges: [120.1, 300], points: 3 },
  //60
  { height: 60, weightRanges: [0, 83.4], points: 0 },
  { height: 60, weightRanges: [83.5, 99.8], points: 1 },
  { height: 60, weightRanges: [99.9, 132.9], points: 2 },
  { height: 60, weightRanges: [133, 300], points: 3 },
  //61
  { height: 61, weightRanges: [0, 85.7], points: 0 },
  { height: 61, weightRanges: [85.8, 102.5], points: 1 },
  { height: 61, weightRanges: [102.6, 136.5], points: 2 },
  { height: 61, weightRanges: [136.6, 300], points: 3 },
  // Add more rules as needed
  { height: 62, weightRanges: [0, 87.9], points: 0 },
  { height: 62, weightRanges: [89, 105.2], points: 1 },
  { height: 62, weightRanges: [105.3, 140.6], points: 2 },
  { height: 62, weightRanges: [140.7, 300], points: 3 },
  //63
  { height: 63, weightRanges: [0, 90.6], points: 0 },
  { height: 63, weightRanges: [90.4, 108.4], points: 1 },
  { height: 63, weightRanges: [108.5, 144.2], points: 2 },
  { height: 63, weightRanges: [144.3, 300], points: 3 },
  //64
  { height: 64, weightRanges: [0, 92.9], points: 0 },
  { height: 64, weightRanges: [93, 111.1], points: 1 },
  { height: 64, weightRanges: [11.2, 148.3], points: 2 },
  { height: 64, weightRanges: [148.4, 300], points: 3 },

];

function assignPoints(height, weight) {
  const rule = pointsTable.find(({ height: h, weightRanges }) => {
    return (
      h === height && weight >= weightRanges[0] && weight <= weightRanges[1]
    );
  });

  return rule ? rule.points : 0;
}

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var age = document.querySelector('input[name="age"]:checked').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var birth = document.querySelector('input[name="birth"]:checked').value;
  var blood = document.querySelector('input[name="blood"]:checked').value;
  var activity = document.querySelector(
    'input[name="active_physically"]:checked'
  ).value;
  var old = document.querySelector('input[name="heriditary"]:checked').value;
  age = parseInt(age);
  gender = parseInt(gender);
  birth = parseInt(birth);
  blood = parseInt(blood);
  activity = parseInt(activity);
  old = parseInt(old);
  var sum = age + gender + birth + blood + old + activity; 
  //from here
  var ft = document.getElementById("ft").value;
  var inc = document.getElementById("inc").value;
  height = ft + inc;
  height = parseInt(height);
  // Example usage
  var weight = document.getElementById("weight").value;
  weight = parseFloat(weight);
  var points = assignPoints(height, weight);
  sum=sum+points
  document.getElementById("BMR").innerText = Math.round(sum);
  if(sum>5)
  {
    document.getElementById("risk_value").innerText = "Person has greater risk of getting diabetes";
  }
  else{
    document.getElementById("risk_value").innerText = "Person doesn't have risk of getting diabetes, if precautions taken";
  }
  var outputDiv1 = document.getElementById("output1");
  var h1none = document.getElementById("h1_nonediv");
  h1none.style.display = "block";
  outputDiv1.style.display = "block";

  return false;
});
