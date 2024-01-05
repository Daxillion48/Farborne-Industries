Vars.ui.settings.addCategory("@farbrone-industries", Icon.effect, st =>{
  st.checkPref("asteroids-enabled", false);
  st.checkPref("tantros-visible", false);
  st.checkPref("tantros-accessible", false);
});

let asten = Core.settings.getBool("asteroids-enabled");
let tantvis = Core.settings.getBool("tantros-visible");
let tanten = Core.settings.getBool("tantros-enabled");

if (asten) {
  Planets.verilus.accessible = true;
  Planets.verilus.alwaysUnlocked = true;
  Planets.verilus.visible = true;
  Planets.notva.accessible = true;
  Planets.notva.alwaysUnlocked = true;
  Planets.notva.visible = true;
  Planets.gier.accessible = true;
  Planets.gier.alwaysUnlocked = true;
  Planets.gier.visible = true;
};

if (tantvis) {
  Planets.tantros.visible = true;
  if (tanten) {
    Planets.tantros.accessible = true;
    Planets.tantros.alwaysUnlocked = true;
  };
};

//Thank you so much sh1penfire#0
