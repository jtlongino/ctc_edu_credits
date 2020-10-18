<script type="text/javascript">
  var expenseRows = 1;

  // Key is name of expense, [valid for tuition, valid for credit]
  var expenses = {
    "Expense Both": [true, true],
    "Expense Credit": [false, true],
    "Expense Tuition": [true, false]
  };
  var expList = document.getElementById('expensesList');
  var expensesUpper = {};
  for (var key in expenses) {
    var keyStr = key.toString();
    var option = document.createElement('option');
    option.value = key;
    expList.appendChild(option);
    expensesUpper[key.toUpperCase()] = expenses[key];
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
</script>
