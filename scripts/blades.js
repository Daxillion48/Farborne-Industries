const carry = extend(UnitType, "carry", {
 draw(unit) {
  this.super$draw(unit);
  Draw.rect(
   "farborne-industries-carryblade",
   unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
   unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
   Time.time * -15);
 }
});
