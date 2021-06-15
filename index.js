function countCharl() {
  var inp = document.getElementById("name").value;
  var splitInp = inp.split(" ");
  var counter = 0;
  for (i = 0; i < splitInp.length; i++) {
    if (splitInp[i] == "charl" || splitInp[i] == "Charl") {
      counter += 1;
    }
  }
  document.getElementById("charlOutput").innerHTML =
    "Num Charls → " + counter.toString();
}
