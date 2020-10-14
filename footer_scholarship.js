<script type="text/javascript">
  var scholarshipRows = 1;

  // Key is name of scholarship, value is true if can be used for living expenses, false otherwise
  var scholarships = {"Sch A":true, "Sch B":false, "Sch C":false};
  var schList = document.getElementById('scholarshipList');
  var scholarshipsUpper = {};
  for (var key in scholarships) {
    var keyStr = key.toString();
    var option = document.createElement('option');
    option.value = key;
    schList.appendChild(option);
    scholarshipsUpper[key.toUpperCase()] = scholarships[key];
  }
  function addScholarshipRow() {
    scholarshipRows++;
    var tableRef = document.getElementById('scholarshipsAndGrantsTable').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.style.cssText = "display: table-row;vertical-align: inherit;border-color: inherit;";
    newRow.innerHTML = 
`<td><div class="paragraph">
    <input type="text" id="schName${scholarshipRows}" size="40" class="sch-input-name" list="scholarshipList"/>
 </div></td>
 <td><div class="paragraph">
    <input type="number" class="input-value" id="schAmt${scholarshipRows}"/>
 </div></td>
 <td style="text-align:center;"><div class="paragraph">
   <input type="checkbox" id="schLiving${scholarshipRows}"/>
 </div></td>`;
    var rowInputs = newRow.getElementsByClassName("input-value");
    for (var i = 0; i < rowInputs.length; i++) {
      rowInputs[i].addEventListener('change', updateOutputs, false);
    }
    var rowInputs = newRow.getElementsByClassName("sch-input-name");
    for (var i = 0; i < rowInputs.length; i++) {
      rowInputs[i].addEventListener('change', updateScholarshipTable, false);
    }
  }
  function updateScholarshipRows() {
    var bodyRef = document.getElementById('scholarshipsAndGrantsTable').getElementsByTagName('tbody')[0];
    for (j = 1; j < bodyRef.rows.length; j++) {
      // Match name against list
      var row = bodyRef.rows[j];
      var rowInputs = row.getElementsByTagName('input');
      var schName = rowInputs[0].value.trim().toUpperCase();
      if (schName in scholarshipsUpper) {
        rowInputs[2].checked = scholarshipsUpper[schName];
        rowInputs[2].disabled = true;
      } else {
        rowInputs[2].disabled = false;
      }
    }
  }

  function updateScholarshipTable() {
    updateScholarshipRows();
    updateOutputs();
  }
  var elements = document.getElementsByClassName("sch-input-name");
  for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('change', updateScholarshipTable, false);
  }
  var scholarshipButton = document.getElementById("add-scholarship");
  scholarshipButton.addEventListener('click', addScholarshipRow, false);
</script>
