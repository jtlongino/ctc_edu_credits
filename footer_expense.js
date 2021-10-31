<script type="text/javascript">
  var expenseRows = 1;

  // Key is name of expense, [valid for tax-free scholarship, valid for credit]
  var expensesAll = {
    "none": {
      "display-name": "Select School"
    },
    "acc" : {
      "display-name" : "ACC",
      "ALEKS License & Materials Fee": [true, true],
      "ALEKS License Fee": [true, true],
      "Course Fee": [true, true],
      "Fee, College Credit Insurance (FINSC)": [false, false],
      "Fee, General Use": [true, true],
      "Fee, Student Accident Insurance": [false, false],
      "Fee, Student Success Res 1": [true, true],
      "Fee, Student Activity": [true, true],
      "Fee, Sustainability": [true, true],
      "Fee, Student Parking": [false, false],
      "First day coll cr sales tax": [true, true],
      "First day inclusive-cc, no tax": [true, true],
      "Health Professions Insurance Fee": [true, false],
      "In-District Texas Resident Tuition": [true, true],
      "Out of District - Dual Students Fee": [true, true],
      "Out of District Fee": [true, true],
      "Out-of-District Texas Resident Tuition": [true, true],
      "Out-of-State & International Non-Resident Tuition": [true, true],
      "Site Fee": [true, true],
      "Student Success Course": [true, false],
      "Third Course Attempt": [true, true],
      "Tuition, College Credit": [true, true],
      "Tuition, Rule of Three": [true, true]
    },
    "ut-austin" : {
      "display-name" : "UT Austin",
      "Affiliated studies registration fee": [true, true],
      "Analecta fee": [false, false],
      "Application processing fee": [true, true],
      "Cactus fee": [false, false],
      "Theatre & Dance Package": [false, false],
      "Duplicate receipt fee": [false, false],
      "Emergency cash loan": [false, false],
      "Enrollment deposit": [true, true],
      "Field trip fee": [true, true],
      "Freshman & Transfer orientation fee": [true, true],
      "General property deposit": [true, true],
      "In absentia fee": [true, true],
      "Independent study & research fee": [true, true],
      "Installment payment plan fee": [false, false],
      "International Insurance Admin Fee": [true, false],
      "International student health insurance": [true, false],
      "International student orientation fee": [true, true],
      "International student service fee": [true, true],
      "Nonresident Tuition": [true, true],
      "Joint & cooperative program fees": [true, true],
      "Late registration fee": [false, false],
      "Matriculation fee": [false, false],
      "Parking permit fee": [false, false],
      "Reciprocal Exchange fee": [true, true],
      "Refund": [false, false],
      "Registration": [true, true],
      "Reinstatement fee": [false, false],
      "Service charge": [false, false],
      "Short-term loan": [false, false],
      "ID fee": [true, true],
      "Student speaker series fee": [false, false],
      "Texas performing bass pass": [false, false],
      "Texas-Resident Tuition": [true, true],
      "The big ticket": [false, false],
      "TWC & HHSC": [true, true]
    },
    "tx-state" : {
      "display-name" : "Texas State",
      "Athletics": [true, false],
      "Books and supplies": [true, true],
      "Bus": [true, false],
      "Computer service": [true, true],
      "Correspondence course": [true, true],
      "Electronic course": [true, true],
      "Environmental service": [true, true],
      "Excessive hours tuition": [true, true],
      "Extension course": [true, true],
      "Fees for auditing courses": [true, true],
      "ID services": [true, true],
      "International Education": [true, true],
      "Lab": [true, true],
      "Late payment ": [false, false],
      "Late registration": [true, true],
      "Library": [true, true],
      "McCoy Graduate Program": [true, true],
      "Meal plans": [false, false],
      "Medical Services": [true, false],
      "Non-Texas Resident": [true, true],
      "Off Campus": [true, true],
      "Online Fee": [true, true],
      "Orientation fee": [true, true],
      "Parking permit": [false, false],
      "Payment plan enrollment fee": [false, false],
      "Recreational sports": [true, false],
      "Residence hall": [false, false],
      "Returned item fee": [false, false],
      "Service fee": [true, true],
      "Student Center": [true, true],
      "Student Publication": [true, true],
      "Student Service": [true, false],
      "Student Success": [true, true],
      "Study Abroad Course": [true, true],
      "Texas Resident": [true, true]
    },
    "st-edwards" : {
      "display-name" : "St. Edwards",
      "Application fee": [true, true],
      "Car permit": [false, false],
      "Health insurance": [false, false],
      "Meal Plan": [false, false],
      "Residence Hall": [false, false],
      "Residence hall cleaning fee": [false, false],
      "Orientation fee": [true, true],
      "Technology fee": [true, true],
      "Topper Tender": [false, false],
      "Undergrad / Graduate Tuition": [true, true]
    },
    "texas-tech" : {
      "display-name" : "Texas Tech",
      "Academic Dep. Inst. Assessment Fee": [true, true],
      "ADIA": [true, true],
      "Advising & Retention fee": [true, true],
      "Application fee": [true, true],
      "Budget payment option": [false, false],
      "Cancellation fee": [false, false],
      "Credit Card Service Fee": [false, false],
      "Cultural Activities Fee": [false, false],
      "Designated Tuition": [true, true],
      "Dropped/Late registration fee": [false, false],
      "Energy fee": [true, true],
      "Financial & Record Services Fee": [true, true],
      "Fixed Designated Tuition": [true, true],
      "Graduate Tuition": [true, true],
      "Hospitality Dining plan": [false, false],
      "Hospitality Operations Cost": [false, false],
      "Housing Room Charge": [false, false],
      "ID Card Fee": [true, true],
      "IT Fee": [true, true],
      "International Application fee": [true, true],
      "International education fee": [true, true],
      "International student fee": [true, true],
      "Junction Medical Service Fee": [true, false],
      "Late payment fee": [false, false],
      "Law Designated Tuition": [true, true],
      "Library Fee": [true, true],
      "Meal Add-on": [false, false],
      "Medical Service Fee": [true, false],
      "Non-resident Tuition": [true, true],
      "Non-immigrant health ins.": [false, false],
      "Non-refundable application fee": [true, true],
      "Non-refundable enrollment fee": [true, true],
      "Non-resident distance education fee": [true, true],
      "Online learning & distance Ed. fee": [true, true],
      "Operations Tax-Dining plan": [false, false],
      "Placement fee": [true, true],
      "RCBA facility fee": [true, false],
      "Records fee": [true, true],
      "Returned check charge": [false, false],
      "Residence Hall ": [false, false],
      "Sponsored international student admin fee": [true, true],
      "State Tuition": [true, true],
      "Student Athletic Fee": [true, false],
      "Student Orientation fee": [true, true],
      "Student Recreation Fee": [false, false],
      "Student Services Fee": [true, true],
      "Student Union Fee": [true, true],
      "Supplemental Designated Tuition": [true, true],
      "Transportation Fee": [true, false],
      "Information Technology": [true, true]
    },
    "southwestern": {
      "display-name": "Southwestern University",
      "Registration": [true, true],
      "Tuition": [true, true],
      "Part-Time Tuition ": [true, true],
      "Overload Fee": [true, true],
      "Fine Arts Music Fee": [true, true],
      "Vehicle registration fee": [false, false],
      "Lab Fee ": [true, true],
      "Student Health insurance Fee": [false, false],
      "Dewar Tuition Insurance Fee /Deware Refund Plan": [false, false],
      "Heartland-ESCI Payment Plan": [false, false],
      "Texas Guaranteed Tuition Plan (TGTP)": [true, true],
      "Late Payment Fee": [false, false],
      "Payment Plan Fee": [false, false],
      "Music Course Fee": [true, true],
      "Lab Fee": [true, true],
      "Traffic ticket": [false, false],
      "Housing/Room": [false, false],
      "Meal Plan/ Board": [false, false],
      "Housing deposit": [false, false],
      "Enrollment deposit": [false, false],
      "Pirate Card/Pirate Bucs": [false, false],
      "Fraternity Parlor Fee": [false, false],
      "Pike Parlor Fee": [false, false],
      "VA-Benefits / Yellow Ribbon": [false, false],
      "Texas Tomorrow Funds": [true, true],
      "Panhellenic Online Payment": [false, false],
      "Semester Dues": [false, false],
      "Initiation Fees": [false, false],
      "New Member Fees": [false, false],
      "Badge Fee": [false, false]
    },
    "concordia": {
      "display-name": "Concordia University",
      "ADP - Austin": [true, true],
      "General services fee": [true, true],
      "Orientation Fee": [true, true],
      "Leadership and business fee": [true, true],
      "Tuition Fee": [true, true],
      "Tornado textbook fee": [true, true],
      "Residence hall (1,2, & 3 occupancy)": [false, false],
      "Meal plans (A, B, C, & D)": [false, false],
      "NCAA athlete fee": [false, false],
      "Resident-Commitment Deposit": [true, true],
      "Commuter-Commitment Deposit": [true, true],
      "Application fee": [true, true],
      "International application fee": [true, true],
      "International deposit": [true, true],
      "International health insurance": [false, false]
    },
    "ut-san-antonio": {
      "display-name": "UT San Antonio",
      "Add/drop fee": [false, false],
      "Advising fee": [true, true],
      "University fines (parking, library etc.)": [false, false],
      "Application fee": [true, true],
      "Athletics fee": [true, false],
      "Auditing fee": [false, false],
      "Automated services charge": [true, true],
      "Books": [true, true],
      "Creer service center registration fee": [true, true],
      "Credit by examination fee": [true, false],
      "Degree application fee": [true, true],
      "Driving range fee": [true, true],
      "Educational field instruction fee": [true, true],
      "Equipment and lane fee": [true, true],
      "ESL auxiliary fee": [true, true],
      "Field trip fee": [true, true],
      "Foreign language multimedia learning center fee": [true, true],
      "Foreign language testing": [true, true],
      "Foreign student Insurance fee": [false, false],
      "Housing & meals": [false, false],
      "ID card fee": [true, true],
      "Installment payment fee": [false, false],
      "Instrument users fee": [true, true],
      "International education fee": [true, true],
      "International tuition": [true, true],
      "Lab fee": [true, true],
      "Late payment fee": [false, false],
      "Late registration fee": [true, true],
      "Learning resources fee": [true, true],
      "Library resource charge": [true, true],
      "Locker fee": [false, false],
      "Medical services fee": [true, false],
      "Music major fee": [true, true],
      "Non-resident tuition": [true, true],
      "Orientation fee": [true, true],
      "Out-of-State tuition": [true, true],
      "Parking permit": [false, false],
      "Physical education fee": [true, true],
      "Pre-TASP fee": [true, true],
      "Property damage fee": [false, false],
      "Publication charge": [true, true],
      "Rec Center Fee": [true, false],
      "Returned check fee": [false, false],
      "Student Data Management fee": [true, true],
      "Student services fee": [true, true],
      "Studio art fee": [true, true],
      "Supplemental & special fee": [true, true],
      "Swimming pool fee": [true, true],
      "Tennis center fee": [false, false],
      "Transcript fee": [false, false],
      "Transportation fee": [true, false],
      "Texas Resident - Tuition": [true, true],
      "University center fee": [true, true],
      "Visual resource collections fee": [true, true],
      "Writing materials fee": [true, true]
    },
    "ut-medical": {
      "display-name": "UT Medical Branch",
      "SON UG RS E&G Tuit-Gnc": [true, true],
      "SON UG RS DES Tuit =46-Gnc": [true, true],
      "SON UG RS Des Tuit >46-Gnc": [true, true],
      "Liability Insurance Fee- SON": [true, true],
      "Medical Service Fee": [true, false],
      "Student Service Fee": [true, true],
      "Library Acquisition Fee": [true, true],
      "Sutd Comp & Teach Equip Fee": [true, true],
      "Jamail Student Ctr Fee": [true, true],
      "Edu Tech Infrastructure Fee": [true, true],
      "Student Health Insurance Fee": [false, false],
      "Alumni Field House Fee": [false, false],
      "Campus Security Fee": [true, true],
      "Graduation Fee": [true, true],
      "SON Assessment Tests": [true, true],
      "SON Materials Fee": [true, true],
      "SON Edu Supp Software Fee": [true, true],
      "SON UG Course Fees-Gnc": [true, true],
      "SON UG Site Visit Fees-Gnc": [true, true],
      "SON UG Placement Fees- Gnc": [true, true],
      "SOn UG Similation Fees-Gnc": [true, true],
      "Credit Card Payment Fee": [false, false],
      "Registration Fee": [true, true]
    },
    "ut-arlington": {
      "display-name": "UT Arlington",
      "Coll of Sci Enh Desg Tui UG": [true, true],
      "Computer & Info Tech Fee": [true, true],
      "Designated Tuition": [true, true],
      "Engineering Internet Fee": [true, true],
      "ID Activation Fee": [true, true],
      "Intercollegiate Athletics Fee": [true, false],
      "Intl Education Fee": [true, true],
      "Liberal Arts Enh Desg Tui UG": [true, true],
      "Library Service Fee": [true, true],
      "Medical Service Fee": [true, false],
      "Recreational Facility Fee": [false, false],
      "Registration Fee": [true, true],
      "Shuttle Bus Fee": [true, false],
      "Statutory Tuition": [true, true],
      "Student Service Fee": [true, false],
      "Student Union": [true, false]
    },
    "angelo-state": {
      "display-name": "Angelo State",
      "Advising Fee": [true, true],
      "Athletic Fee": [true, false],
      "Designated Tuition": [true, true],
      "Distance Learning Fee": [true, true],
      "Financial Records Fee": [true, true],
      "Instructional Enhancement Fee": [true, true],
      "International Education Fee": [true, true],
      "Library Fee": [true, true],
      "Medical Services Fee": [true, false],
      "Outdoor Facility Conservation Fee": [true, false],
      "Recreational Sports Fee": [true, false],
      "State Tuition": [true, true],
      "Student Services Fee": [false, false],
      "Technology Services": [true, true],
      "Transportation Fee": [true, false],
      "Tuition A": [true, true],
      "Tuition B": [true, true],
      "Undergrad Research Fee": [true, true],
      "University Center Fee": [true, false]
    },
    "tamu": {
      "display-name": "Texas A&M",
      "Field trip fee": [true, true],
      "Health Center Fee": [true, false],
      "Identification card": [true, true],
      "Laboratory fees": [true, true],
      "New student conference fee": [true, true],
      "Recreational Sports Fee": [true, false],
      "Student Center Complex Fee": [true, false],
      "Freshman Orientation Fee": [true, false],
      "University Advancement fee": [true, true],
      "Differential - Vet Med UG Res": [true, true],
      "Tuition": [true, true]
    },
    "huston-tillotson": {
      "display-name": "Huston-Tillotson",
      "General fees full-time": [true, true],
      "Health services fee": [true, false],
      "Physics lab fee": [true, true],
      "Residence hall activity": [false, false],
      "SGA (Student Government Association) fee": [false, false],
      "Technology fee": [true, true],
      "Tuition": [true, true]
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
  <input type="text" id="expName${expenseRows}" size="35" class="exp-input-name" list="expensesList"/>
</div></td>
<td>
  <select name="term" id="expTermSelect${expenseRows}">
    <option value="">--Select--</option>
    <option value="spring">Spring</option>
    <option value="summer">Summer</option>
    <option value="fall">Fall</option>
    <option value="other">Other</option>
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
    // If there is a previous row, set default academic term to the term
    // used in the previous row
    if (expenseRows > 1) {
      lastRowIndex = tableRef.rows[expenseRows-1].querySelector("select[name=term]").selectedIndex;
      newRow.querySelector("select[name=term]").selectedIndex = lastRowIndex;
    }      
    var rowInputs = newRow.getElementsByClassName("input-value");
    for (var i = 0; i < rowInputs.length; i++) {
      rowInputs[i].addEventListener('change', updateOutputs, false);
    }
    var rowInputs = newRow.getElementsByClassName("exp-input-name");
    for (var i = 0; i < rowInputs.length; i++) {
      rowInputs[i].addEventListener('change', updateExpensesTable, false);
    }
  }
  function removeExpenseRow() {
    var table = document.getElementById('expensesTable');
    var rowCount = table.rows.length;

    table.deleteRow(rowCount -1);
    expenseRows--;
    updateExpensesTable();
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
  var addExpenseButton = document.getElementById("add-expense");
  addExpenseButton.addEventListener('click', addExpenseRow, false);
  var removeExpenseButton = document.getElementById("remove-expense");
  removeExpenseButton.addEventListener('click', removeExpenseRow, false);
  var schoolSelect = document.getElementById("exp-school-select");
  schoolSelect.addEventListener('change', updateExpenseList, false);
  document.addEventListener('DOMContentLoaded', populateExpenseSelect, false);

</script>
