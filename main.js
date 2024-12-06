// nervous_system.addEventListener("click", switch_presentation("nervous_system"));
// skeleton.addEventListener("click", switch_presentation("skeleton"));
// toxins.addEventListener("click", switch_presentation("toxins"));

function switch_presentation(subject) {
  const coral_reef = document.getElementById("coral-reef");
  const whale_migration = document.getElementById("whale-migration");
  const ocean_pollution = document.getElementById("ocean-pollution");
  coral_reef.style.display = "none";
  whale_migration.style.display = "none";
  ocean_pollution.style.display = "none";
  coral_reef.classList.remove('show');
  ocean_pollution.classList.remove('show');
  whale_migration.classList.remove('show');

  document.getElementById(subject).style.display = "block";
  animation(subject);
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
function animation(subject) {
  const element1 = document.getElementById(subject)
  setTimeout(() => {
    element1.classList.add('show');
  }, 200);
}



