<script type="text/javascript">
  var expenseRows = 1;

  // Key is name of expense, [valid for tuition, valid for credit]
  var expensesAll = {
    "none": {
      "display-name": "Select School"
    },
    "ut-austin" : {
      "display-name" : "UT Austin",
      "UT Expense Both": [true, true],
      "UT Expense Credit": [false, true],
      "UT Expense Tuition": [true, false]
    },
    "acc" : {
      "display-name" : "ACC",
      "ACC Expense Both": [true, true],
      "ACC Expense Credit": [false, true],
      "ACC Expense Tuition": [true, false]
    },
    "texas-tech" : {
      "display-name" : "Texas Tech",
      "Tech Expense Both": [true, true],
      "Tech Expense Credit": [false, true],
      "Tech Expense Tuition": [true, false]
    },
    "other": {
      "display-name": "Other"
    }
  };

  var expenses = expensesAll["none"];
  var expensesUpper = {};

  function populateExpenseSelect() {
    var schoolSelect = document.getElementById("exp-school-select");
    // Remove all entries from select
    for (var i = schoolSelect.length-1; i >= 0; i--){
      var option = schoolSelect.options[i];
      option.remove();
    }
    // Add new options based on expenses keys
    for (var key in expensesAll) {
      var displayName = expensesAll[key]["display-name"];
      var option = document.createElement('option');
      option.value = key;
      option.label = displayName;
      option.selected = false;
      if (key == "none") option.selected = true;
      schoolSelect.appendChild(option);
    }
    updateExpenseList();
  }
    
  function updateExpenseList() {
    // Get the new expense list
    var selectedOption = null;
    var schoolSelect = document.getElementById("exp-school-select");
    for (var i = 0; i < schoolSelect.length; i++) {
      var option = schoolSelect.options[i];
      if (option.selected) {
        selectedOption = option;
      }
    }
    expenses = expensesAll[selectedOption.value];
    
    // Clear expense list
    var expList = document.getElementById('expensesList');
    for (var i = expList.options.length-1; i >= 0; i--){
      var option = expList.options[i];
      option.remove();
    }
    // Clear expensesUpper
    expensesUpper = {};
    
    // Populate expense list
    for (var key in expenses) {
      if (key.toString() != "display-name") {
        var option = document.createElement('option');
        option.value = key;
        expList.appendChild(option);
        expensesUpper[key.toUpperCase()] = expenses[key];
      }
    }
    updateExpensesTable();
  }
  function addExpenseRow() {
    expenseRows++;
    var tableRef = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.style.cssText = "display: table-row;vertical-align: inherit;border-color: inherit;";
    newRow.innerHTML = 
`<td><div class="paragraph">
  <input type="text" id="expName${expenseRows}" size="40" class="exp-input-name" list="expensesList"/>
</div></td>
<td>
  <select name="term" id="expTermSelect${expenseRows}">
    <option value="">--Select--</option>
    <option value="spring">Spring <span class="taxYear">2020</span></option>
    <option value="summer">Summer <span class="taxYear">2020</span></option>
    <option value="fall">Fall <span class="taxYear">2020</span></option>
    <option value="multiple">Combined</option>
  </select>
</td>
<td><div class="paragraph">
  <input type="number" class="input-value" id="expAmt${expenseRows}"/>
</div></td>
<td style="text-align:center;"><div class="paragraph">
  <input type="checkbox" class="input-value" id="expTuition${expenseRows}"/>
</div></td>
<td style="text-align:center;"><div class="paragraph">
  <input type="checkbox" class="input-value" id="expCredit${expenseRows}"/>
</div></td>`;
    var rowInputs = newRow.getElementsByClassName("input-value");
    for (var i = 0; i < rowInputs.length; i++) {
      rowInputs[i].addEventListener('change', updateOutputs, false);
    }
    var rowInputs = newRow.getElementsByClassName("exp-input-name");
    for (var i = 0; i < rowInputs.length; i++) {
      rowInputs[i].addEventListener('change', updateExpensesTable, false);
    }
  }
  function updateExpenseRows() {
    var bodyRef = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
    for (j = 1; j < bodyRef.rows.length; j++) {
      // Match name against list
      var row = bodyRef.rows[j];
      var rowInputs = row.getElementsByTagName('input');
      var expName = rowInputs[0].value.trim().toUpperCase();
      if (expName in expensesUpper) {
        rowInputs[2].checked = expensesUpper[expName][0];
        rowInputs[2].disabled = true;
        rowInputs[3].checked = expensesUpper[expName][1];
        rowInputs[3].disabled = true;
      } else {
        rowInputs[2].disabled = false;
        rowInputs[3].disabled = false;
      }
    }
  }
  function updateExpensesTable() {
    updateExpenseRows();
    updateOutputs();
  }

  var elements = document.getElementsByClassName("exp-input-name");
  for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('change', updateExpensesTable, false);
  }
  var expenseButton = document.getElementById("add-expense");
  expenseButton.addEventListener('click', addExpenseRow, false);
  var schoolSelect = document.getElementById("exp-school-select");
  schoolSelect.addEventListener('click', updateExpenseList, false);
  document.addEventListener('DOMContentLoaded', populateExpenseSelect, false);

</script>
