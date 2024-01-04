  const f = require("func");

const target = "manifold";
const baseColor = Color.valueOf("96a0be");
let pallete = [
Color.valueOf("c6d4ff"),
baseColor.rgba(),
Color.valueOf("394462")
];
let palletei = [
Color.valueOf("c6d4ff").rgba(),
baseColor.rgba(),
Color.valueOf("606d90").rgba()
];

Events.on(ContentInitEvent, () => {
  let fonts = [Fonts.def, Fonts.outline];
  let ch = Fonts.getUnicode(target);

  let size = Mathf.round(Fonts.def.getData().lineHeight / Fonts.def.getData().scaleY);
  let tex = Core.atlas.find("farborne-industries-team-dread");
  let out = Scaling.fit.apply(tex.width, tex.height, size, size);

  for(let font of fonts){
    let list = Reflect.get(Font, font, "regions");
    list.add(tex);
    Reflect.set(Font, font, "regions", list);

    let glyph = font.getData().getGlyph(ch);
    glyph.page = 1;

    glyph.id = ch;
    glyph.srcX = glyph.srcY = 0;
    glyph.width = out.x;
    glyph.height = out.y;
    glyph.u = tex.u;
    glyph.v = tex.v2;
    glyph.u2 = tex.u2;
    glyph.v2 = tex.v;
    glyph.xoffset = 0;
    glyph.yoffset = -size;
    glyph.xadvance = size;
    glyph.kerning = null;
    glyph.fixedWidth = true;

    //font.getData().setGlyphRegion(glyph, tex);
  }

  const Dread = Team.get(5);
  Dread.name = "Dread";
  //Dread.color.set(Color.valueOf("87ceeb"));
  Reflect.set(Team, Dread, "color", baseColor);

  let newPal = Reflect.get(Team, Dread, "palette");
  newPal[0] = pallete[0];
  newPal[1] = pallete[1];
  newPal[2] = pallete[2];
  Reflect.set(Team, Dread, "palette", newPal);
  let newI = Reflect.get(Team, Dread, "palettei");
  newI[0] = palletei[0];
  newI[1] = palletei[1];
  newI[2] = palletei[2];
  Reflect.set(Team, Dread, "palettei", newI);

  Dread.hasPalette = true;
  Dread.emoji = Fonts.getUnicodeStr(target);
});

//thanks abreaker.#0 for team code
