// nervous_system.addEventListener("click", switch_presentation("nervous_system"));
// skeleton.addEventListener("click", switch_presentation("skeleton"));
// toxins.addEventListener("click", switch_presentation("toxins"));

function switch_presentation(subject) {
  const coral_reef = document.getElementById("coral-reef");
  const whale_migration = document.getElementById("whale-migration");
  const ocean_pollution = document.getElementById("ocean-pollution");
  console.log("Switching");
  coral_reef.style.display = "none";
  whale_migration.style.display = "none";
  ocean_pollution.style.display = "none";
  document.getElementById(subject).style.display = "block";
}
function switch_nervous_system() {
  switch_presentation("whale-migration");
}
function switch_skeleton() {
  switch_presentation("coral-reef");
}
function switch_toxins() {
  switch_presentation("ocean-pollution");
}
