"use strict";

var eaPercentage = document.getElementById("eaPerc"),
    propertyVal = document.getElementById("propertyVal"),
    output = document.getElementById("estPrice"),
    eaPercentVal = document.getElementById("eaPercVal"),
    eaFee = document.getElementById("estFee"),
    oeaFlat = document.getElementById("oeaFlat"),
    oeaSave = document.getElementById("oeaSave"); // Update the current slider value (each time you drag the slider handle)

function myEventHandler() {
  var propertyValVal = Math.round(propertyVal.value),
      agentsFee = Math.round(propertyValVal / 100 * eaPercentage.value),
      oeaSaving = Math.round(agentsFee - oeaFlat.value),
      oeaFlatz = Math.round(oeaFlat.value);
  output.innerHTML = formatPound(propertyValVal, "£");
  eaFee.innerHTML = formatPound(oeaFlatz, "£");
  oeaSave.innerHTML = formatPound(oeaSaving, "£");
  eaPercentVal.innerHTML = eaPercentage.value;
} // Adds a currency symbol and commas to numbers


function formatPound(n, currency) {
  //console.log(n);
  return currency + n.toFixed().replace(/./g, function (c, i, a) {
    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
} // init the func on user input


propertyVal.oninput = function () {
  myEventHandler();
};

oeaFlat.oninput = function () {
  myEventHandler();
};

eaPerc.oninput = function () {
  myEventHandler();
}; // init the func on page load


myEventHandler();