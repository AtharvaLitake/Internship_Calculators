var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var source = document.getElementById("source_value").value;
  source = parseFloat(source);
  if (source <= 0) {
    alert("Invalid Source Value");
    return false;
  }

  var convert = document.querySelector('input[name="source"]:checked').value;
  var unit = document.querySelector('input[name="unit"]:checked').value;
  var res;

  if (convert === "A1C") {
    if (unit === "mg") {
      res = 28.7 * source - 46.7;
    }
    if (unit === "mmol") {
      res = (28.7 * source - 46.7) / 18;
    }
  }

  if (convert === "eAG") {
    if (unit === "mg") {
      res = (source + 46.7) / 28.7;
    }
    if (unit === "mmol") {
      res = (28.7 * source - 46.7) / 18;
    }
  }

  document.getElementById("BMR").innerText = Math.round(res);
  var outputDiv1 = document.getElementById("output1");
  var h1none = document.getElementById("h1_nonediv");
  h1none.style.display = "block";
  outputDiv1.style.display = "block";
  return false;
});
