<script type="text/javascript">
  var formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0,});
  var scholarshipIncomeMax = {2020:"2200", 2019:"2200", 2018:"2100", 2017:"2100", 2016:"2100", 2015:"2100", 2014:"2000"};
  function roundInputs() {
    var classname = document.getElementsByClassName("input-value");
    for (var i = 0; i < classname.length; i++) {
      if(classname[i].type == "number" && classname[i].value != "") {
        var value = parseFloat(classname[i].value);
        classname[i].value = Math.round(value).toString();
      }
    }
  }
  function sumScholarships() {
    var bodyRef = document.getElementById('scholarshipsAndGrantsTable').getElementsByTagName('tbody')[0];
    var results = {'living':0, 'nonLiving':0};
    //First row in tbody is actually the header. :(
    for (var j = 1; j < bodyRef.rows.length; j++) {
      var row = bodyRef.rows[j];
      var rowInputs = row.getElementsByTagName('input');
      var checked = rowInputs[2].checked;
      var amt = parseInt(rowInputs[1].value) || 0;
      if (checked) {
        results['living'] += amt;
      } else {
        results['nonLiving'] += amt;
      }
    }
    return results;
  }
  function sumExpenses() {
    var bodyRef = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
    var results = {'tuition':0, 'credit':0};
    //First row in tbody is actually the header. :(
    for (var j = 1; j < bodyRef.rows.length; j++) {
      var row = bodyRef.rows[j];
      var rowInputs = row.getElementsByTagName('input');
      var tuitionChecked = rowInputs[2].checked;
      var creditChecked = rowInputs[3].checked;
      var amt = parseInt(rowInputs[1].value) || 0;
      if (tuitionChecked) {
        results['tuition'] += amt;
      }
      if (creditChecked) {
        results['credit'] += amt;
      }
    }
    return results;
  }
  function updateOutputs() {
    roundInputs();
    //Update Year
    var taxYear = parseInt(document.getElementById('taxYearInput').value)||2020;
    var taxYearPlusOne = taxYear + 1;
    var yearSpans = document.getElementsByClassName("taxYear");
    for(i in yearSpans) { yearSpans[i].textContent = taxYear.toString(); }
    var yearPlusOneSpans = document.getElementsByClassName("taxYearPlusOne");
    for(i in yearPlusOneSpans) { yearPlusOneSpans[i].textContent = taxYearPlusOne.toString(); }
    //Update 8615 Income Limit
    var scholarshipIncomeMaxElems = document.getElementsByClassName("scholarshipIncomeMax");
    for(i in scholarshipIncomeMaxElems) { 
      if(taxYear in scholarshipIncomeMax) {
        scholarshipIncomeMaxElems[i].textContent = "$" + scholarshipIncomeMax[taxYear]; 
      } else {
        scholarshipIncomeMaxElems[i].textContent = "<consult Form 8615>"; 
      }
    }
    //Get credit type
    var creditType = document.querySelector('input[name = "creditType"]:checked').value;
    if(creditType == "llc") { 
      document.getElementById('supplyExp').value = "";
      document.getElementById('supplyExp').disabled = true;
    } else {
      document.getElementById('supplyExp').disabled = false;
    }
    //Calculate total tuition for scholarships and grants
    var expensesFromTable = sumExpenses();
    var springTuitionAll = parseInt(document.getElementById("springTuitionAll").value) || 0;
    var summerTuitionAll = parseInt(document.getElementById("summerTuitionAll").value) || 0;
    var fallTuitionAll = parseInt(document.getElementById("fallTuitionAll").value) || 0;
    var totalTuitionAll = springTuitionAll + summerTuitionAll + fallTuitionAll + expensesFromTable['tuition'];
    //Calculate total tuition for credits
    var springTuitionCredit = parseInt(document.getElementById("springTuitionCredit").value) || 0;
    var summerTuitionCredit = parseInt(document.getElementById("summerTuitionCredit").value) || 0;
    var fallTuitionCredit = parseInt(document.getElementById("fallTuitionCredit").value) || 0;
    var totalTuitionCredit = springTuitionCredit + summerTuitionCredit + fallTuitionCredit + expensesFromTable['credit'];
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
    var grantFromTable = sumScholarships();
    var grantLiving = parseInt(document.getElementById("grantLiving").value) || 0;
    grantLiving += grantFromTable['living'];
    var grantNonLiving = parseInt(document.getElementById("grantNonLiving").value) || 0;
    grantNonLiving += grantFromTable['nonLiving'];
    var distributions = parseInt(document.getElementById("distributions").value) || 0;
    var totalGrantsScholarships = grantLiving + grantNonLiving + distributions;
    document.getElementById("totalGrantsScholarships").textContent = formatter.format(totalGrantsScholarships);
    
    //Line 1
    var line1;
    if(creditType == "aoc") {
      line1 = 4000;
    } else {
      line1 = 10000;
    }
    document.getElementById("line1").textContent = formatter.format(line1);
    //Line 2
    var line2 = qualifiedExpensesAll - qualifiedExpensesCredit;
    if(line2 < 0) line2 = 0;
    document.getElementById("line2").textContent = formatter.format(line2);
    //Line 3
    var line3 = Math.min(line2, grantNonLiving + distributions);
    document.getElementById("line3").textContent = formatter.format(line3);
    //Line 4
    var line4 = grantNonLiving + distributions - line3;
    document.getElementById("line4").textContent = formatter.format(line4);
    //Line 5
    var line5 = line2 - line3;
    document.getElementById("line5").textContent = formatter.format(line5);
    //Line 6
    var line6 = Math.min(line5, grantLiving);
    document.getElementById("line6").textContent = formatter.format(line6);
    //Line 7
    var line7 = grantLiving - line6;
    document.getElementById("line7").textContent = formatter.format(line7);
    //Line 8
    var line8 = qualifiedExpensesCredit - line4;
    document.getElementById("line8").textContent = formatter.format(line8);
    //Line 9
    var line9 = line1;
    if (line8 - line7 < line1) {
      line9 = Math.max(line8 - line7, 0);
    }
    document.getElementById("line9").textContent = formatter.format(line9);
    //Line 10
    var line10 = Math.max(line7-line8, 0);
    document.getElementById("line10").textContent = formatter.format(line10);
    //Line 11
    var line11 = Math.min(line7-line10, line1-line9);
    // Transfer override
    var maxTransfer = line11;
    if(document.getElementById("overrideTransfer").checked) {
      maxTransfer = parseInt(document.getElementById("maxTransfer").value);
    }
    line11 = Math.min(line11, maxTransfer);
    document.getElementById("line11").textContent = formatter.format(line11);
    //Line 12
    var line12 = line9 + line11;
    document.getElementById("line12").textContent = formatter.format(line12);
    //Line 13
    var line13 = line10 + line11;
    document.getElementById("line13").textContent = formatter.format(line13);
        
    //Summary Qualified Expenses for Credit
    document.getElementById("qualifiedExpensesForCreditBeforeTransfer").textContent = formatter.format(line9);
    //Taxable Scholarships
    document.getElementById("taxableScholarshipBeforeTransfer").textContent = formatter.format(line10);

    //Return expenses
    returnExpenses = line12;
    document.getElementById("returnExpenses").textContent = formatter.format(returnExpenses);
    document.getElementById("qualifiedExpensesForCreditAfterTransfer").textContent = formatter.format(returnExpenses);
    //Return Income
    returnIncome = line13;
    document.getElementById("returnIncome").textContent = formatter.format(returnIncome);
    document.getElementById("taxableScholarshipAfterTransfer").textContent = formatter.format(returnIncome);
    //Alert if grants and scholarships that must be used for tuition and fees is greater than tuition and fees
    if(totalTuitionAll < (grantNonLiving + distributions)) { alert("Amount of 1099-Q distributions and grants and scholarships that must be used for tuition and fees are greater than actual tuition and fees. This return should be referred to the drop off program. Please consult tax site manager or VLT member."); }
    //Enable scholarship/grant section if needed
    var hideTransferElement = false;
    if(line7 > 0 || document.getElementById("overrideTransfer").checked) {
      hideTransferElement = false;
    }
    var transferElems = document.getElementsByClassName('transfer');
    for (var i = 0; i < transferElems.length; i++) {
      var transferDisplayType = hideTransferElement ? "none" : "block";
      transferElems[i].style.display = transferDisplayType;
    }
    var transferElems = document.getElementsByClassName('transfer-table');
    for (var i = 0; i < transferElems.length; i++) {
      var transferDisplayType = hideTransferElement ? "none" : "table-cell";
      transferElems[i].style.display = transferDisplayType;
    }  };
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
