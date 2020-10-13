<script type="text/javascript">
  var scholarshipRows = 1;

  var scholarships = ["Sch A", "Sch B", "Sch C"];
  var list = document.getElementById('scholarshipList');
  scholarships.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
  });
  function addScholarshipRow() {
    scholarshipRows++;
    var tableRef = document.getElementById('scholarshipsAndGrantsTable').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.style.cssText = "display: table-row;vertical-align: inherit;border-color: inherit;";
    newRow.innerHTML = 
`<td><div class="paragraph">
    <input type="text" id="schName${scholarshipRows}" size="40" class="sch-input-value" list="scholarshipList"/>
 </div></td>
 <td><div class="paragraph">
    <input type="text" id="schAmt${scholarshipRows}"/>
 </div></td>
 <td style="text-align:center;"><div class="paragraph">
   <input type="checkbox" id="schLiving${scholarshipRows}"/>
 </div></td>`;
  }
  var scholarshipButton = document.getElementById("add-scholarship");
  scholarshipButton.addEventListener('click', addScholarshipRow, false);
</script>
