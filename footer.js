<script type="text/javascript">
  var formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0,});
  function roundInputs() {
    var classname = document.getElementsByClassName("input-value");
    for (var i = 0; i < classname.length; i++) {
      if(classname[i].type == "number" && classname[i].value != "") {
        var value = parseFloat(classname[i].value);
        classname[i].value = Math.round(value).toString();
      }
    }
  }
  function updateOutputs() {
    roundInputs();
    //Update Year
    var taxYear = parseInt(document.getElementById('taxYearInput').value)||2019;
    var taxYearPlusOne = taxYear + 1;
    var yearSpans = document.getElementsByClassName("taxYear");
    for(i in yearSpans) { yearSpans[i].textContent = taxYear.toString(); }
    var yearPlusOneSpans = document.getElementsByClassName("taxYearPlusOne");
    for(i in yearPlusOneSpans) { yearPlusOneSpans[i].textContent = taxYearPlusOne.toString(); }
    //Get credit type
    var creditType = document.querySelector('input[name = "creditType"]:checked').value;
    if(creditType == "llc") { 
      document.getElementById('supplyExp').value = "";
      document.getElementById('supplyExp').disabled = true;
    } else {
      document.getElementById('supplyExp').disabled = false;
    }
    //Calculate total tuition for scholarships and grants
    var springTuitionAll = parseInt(document.getElementById("springTuitionAll").value) || 0;
    var summerTuitionAll = parseInt(document.getElementById("summerTuitionAll").value) || 0;
    var fallTuitionAll = parseInt(document.getElementById("fallTuitionAll").value) || 0;
    var totalTuitionAll = springTuitionAll + summerTuitionAll + fallTuitionAll;
    //Calculate total tuition for credits
    var springTuitionCredit = parseInt(document.getElementById("springTuitionCredit").value) || 0;
    var summerTuitionCredit = parseInt(document.getElementById("summerTuitionCredit").value) || 0;
    var fallTuitionCredit = parseInt(document.getElementById("fallTuitionCredit").value) || 0;
    var totalTuitionCredit = springTuitionCredit + summerTuitionCredit + fallTuitionCredit;
    //Calculate book and supply expenses
    var bookExpenses = parseInt(document.getElementById("bookExp").value) || 0;
    var supplyExpenses = parseInt(document.getElementById("supplyExp").value) || 0;
    if(creditType == "llc") {supplyExpenses = 0;}
    var totalBooks = bookExpenses + supplyExpenses;
    //All qualified expenses
    var qualifiedExpensesAll = totalBooks + totalTuitionAll;
    document.getElementById("totalQualifiedAll").textContent = formatter.format(qualifiedExpensesAll);
    //Credit qualified expenses
    var qualifiedExpensesCredit = totalBooks + totalTuitionCredit;
    document.getElementById("totalQualifiedCredit").textContent = formatter.format(qualifiedExpensesCredit);
    //Grants and scholarships
    var grantLiving = parseInt(document.getElementById("grantLiving").value) || 0;
    var grantNonLiving = parseInt(document.getElementById("grantNonLiving").value) || 0;
    var distributions = parseInt(document.getElementById("distributions").value) || 0;
    var totalGrantsScholarships = grantLiving + grantNonLiving + distributions;
    document.getElementById("totalGrantsScholarships").textContent = formatter.format(totalGrantsScholarships);
    //Qualified Expenses for Credit
    var qualifiedExpensesForCredit = qualifiedExpensesCredit - totalGrantsScholarships;
    if(qualifiedExpensesForCredit < 0) qualifiedExpensesForCredit = 0;
    document.getElementById("qualifiedExpensesForCredit").textContent = formatter.format(qualifiedExpensesForCredit);
    //Taxable Scholarships
    var taxableScholarship = totalGrantsScholarships - qualifiedExpensesAll;
    if(taxableScholarship < 0) taxableScholarship = 0;
    document.getElementById("taxableScholarship").textContent = formatter.format(taxableScholarship);
    //Line 1
    var line1;
    if(creditType == "aoc") {
      line1 = 4000;
    } else {
      line1 = 10000;
    }
    document.getElementById("expMax").textContent = formatter.format(line1);
    //Line 2
    var line2 = qualifiedExpensesCredit;
    if(line2 < 0) line2 = 0;
    document.getElementById("line2").textContent = formatter.format(line2);
    //Line 3
    var line3 = qualifiedExpensesAll - qualifiedExpensesCredit;
    if(line3 < 0) line3 = 0;
    document.getElementById("line3").textContent = formatter.format(line3);
    //Line 4
    var line4 = grantNonLiving + distributions;
    if(line4 < 0) line4 = 0;
    document.getElementById("line4").textContent = formatter.format(line4);
    //Line 5
    var line5 = line4 - line3;
    if(line5 < 0) line5 = 0;
    document.getElementById("line5").textContent = formatter.format(line5);
    //Line 6
    var line6 = line2 - line5;
    if(line6 < 0) line6 = 0;
    document.getElementById("line6").textContent = formatter.format(line6);
    //Line 7
    var line7 = grantLiving - taxableScholarship;
    if(line7 < 0) line7 = 0;
    document.getElementById("line7").textContent = formatter.format(line7);
    //Line 8
    var line8 = line6 - line1;
    if(line8 < 0) line8 = 0;
    document.getElementById("line8").textContent = formatter.format(line8);
    //Line 9
    var line9 = line3 - line4;
    if(line9 < 0) line9 = 0;
    document.getElementById("line9").textContent = formatter.format(line9);
    //Line 10
    var line10 = line7 - line8 - line9;
    if(line10 < 0) line10 = 0;
    document.getElementById("line10").textContent = formatter.format(line10);
    //Return expenses
    returnExpenses = Math.min(line1, line6);
    document.getElementById("returnExpenses").textContent = formatter.format(returnExpenses);
    //Return Income
    returnIncome = line10 + taxableScholarship;
    document.getElementById("returnIncome").textContent = formatter.format(returnIncome);
    //Alert if grants and scholarships that must be used for tuition and fees is greater than tuition and fees
    if(qualifiedExpensesAll < line4) { alert("Amount of 1099-Q distributions and grants and scholarships that must be used for tuition and fees are greater than actual tuition and fees. This return should be referred to the drop off program. Please consult tax site manager or VLT member."); }
  };
  var classname = document.getElementsByClassName("input-value");
  for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener('change', updateOutputs, false);
  }
  var myRadios = document.getElementsByName("creditType");
  for (var i = 0; i < myRadios.length; i++) {
      myRadios[i].addEventListener('click', updateOutputs, false);
  }
  document.addEventListener('DOMContentLoaded', updateOutputs, false);
</script>
