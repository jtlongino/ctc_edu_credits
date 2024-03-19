<script type="text/javascript">
  var scholarshipRows = 1;

  // Key is name of scholarship, value is true if can be used for living expenses, false otherwise
  var scholarships = {
    "Americorps Scholarship":true,
    "Assistance League Scholarships":false,
    "Barbara Tidwell Scholarship (Texas State)":false,
    "Brown Scholarship (St. Edwards)":false,
    "Concordia Grant":false,
    "Edwardian Grant":false,
    "Exemplary Presidents Achievement Scholarship (UT)":true,
    "Faculty Scholarship (St. Edwards)":false,
    "Federal Pell Grant":true,
    "Federal Supplemental Education Opportunity Grant (SEOG)":true,
    "Federal Supplemental Grant (Southwestern)":true,
    "Foundation Communities":false,
    "Goodwill":false,
    "HACA":false,
    "Hazelwood Scholarship (Texas Veterans Commission)":false,
    "Hindu Charities Scholarship (ACC)":true,
    "Howard Sides Scholarship (Southwestern)":false,
    "Institutional grant (St. Edwards)":false,
    "Iraq and Afghanistan Service Grant":false,
    "Maverick (St. Edwards)":false,
    "McDonald’s Scholarship":true,
    "Moreau Scholarship":true,
    "Redleaf Properties Endowed":true,
    "Service Scholarship (St. Edwards)":false,
    "Simmang Scholarship SON":false,
    "St. David’s Foundation Scholarship":true,
    "State Top 10%":true,
    "TEACH":true,
    "Texas Aggie Scholarship":false,
    "Texas Association of Chicanos in Higher Education (TACHE) Scholarship":false,
    "Texas Educational Opportunity NTX2":true,
    "Texas Equal Opportunity Grant":true,
    "Texas Excellence Grant":true,
    "Texas Grant":true,
    "Texas Grant - Continuing":true,
    "Texas Public Education Grant":true,
    "Texas State Achievement Scholarship":true,
    "Texas State Tuition Grant":true,
    "TX Tuition Equalization Grant":true,
    "Transfer Scholar Award":false,
    "Tuition Scholarship for Resident Student":false,
    "Undergrad Assistance Grant":false,
    "U.S. Department of Veteran Affairs":true,
    "UT Austin - Scholarship from SS1":false,
    "UT Austin - Financial Aid Scholarships":true,
    "UT Austin - Scholarships (tuition and fees)":false,
    "UT Austin - Scholarships and Grants":true,
    "Walther Grant":false,
    "W.E.B. DuBois Scholar (Huston-Tillotson)":false,
    "Workforce":false,
    "Your Private Scholarship (St. Edwards)":false
  };
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
   <input type="checkbox" class="input-value" id="schLiving${scholarshipRows}"/>
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
  function removeScholarshipRow() {
    var table = document.getElementById('scholarshipsAndGrantsTable');
    var rowCount = table.rows.length;

    table.deleteRow(rowCount -1);
    
    scholarshipRows--;
    updateScholarshipTable();
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
  var addScholarshipButton = document.getElementById("add-scholarship");
  addScholarshipButton.addEventListener('click', addScholarshipRow, false);
  var removeScholarshipButton = document.getElementById("remove-scholarship");
  removeScholarshipButton.addEventListener('click', removeScholarshipRow, false);  
</script>
