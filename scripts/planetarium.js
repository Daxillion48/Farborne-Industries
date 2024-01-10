Events.on(ClientLoadEvent, () => {
  Vars.ui.settings.addCategory("@setting.farbrone-industries", Icon.planet, t =>{
    t.checkPref("asteroids-enabled", false);
    t.checkPref("tantros-visible", false);
    t.checkPref("tantros-accessible", false);
  });

  let asten = Core.settings.getBool("asteroids-enabled", false);
  let tantvis = Core.settings.getBool("tantros-visible", false);
  let tanten = Core.settings.getBool("tantros-enabled", false);

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
  };

  if (tanten) {
    Planets.tantros.visible = true;
    Planets.tantros.accessible = true;
    Planets.tantros.alwaysUnlocked = true;
  };
});
//Thank you so much sh1penfire#0
