function Shake()
{
  let hurtEffect =
  [{
      filterType: "splash",
      filterId: "wound",
      rank:5,
      color: 0x990505,
      padding: 80,
      time: Math.random()*1000,
      seed: Math.random(),
      splashFactor: 1,
      spread: 0.5,
      blend: 1,
      dimX: 1,
      dimY: 1,
      cut: false,
      textureAlphaBlend: true,
      anchorX: 0.32+(Math.random()*0.36),
      anchorY: 0.32+(Math.random()*0.36)
  },
  {
      filterType: "transform",
      filterId: "hurtShake",
      autoDestroy: true,
      padding: 80,
      animated:
      {
          translationX:
          {
              animType: "cosOscillation",
              val1: 0,
              val2: -0.05,
              loops: 2,
              loopDuration: 150
          }
      }
  }];
  TokenMagic.addFiltersOnTargeted(hurtEffect);
}

Hooks.on("midi-qol.RollComplete", function(data){
  let hpDamage = data.damageList[0].hpDamage;
  let shakeDelay = getProperty(data.item, "data.flags.shake.shakeDelay");
  console.log("CAUGHT MIDI ROLL COMPLETE HOOK!");
  console.log("MIDI hpDamage: - " + hpDamage);
  console.log("DELAY DETECTED: - " + shakeDelay);
  setTimeout(function(){
    if (hpDamage > 0)
    {
      Shake();
    }
  }, shakeDelay);
});

Hooks.on("renderItemSheet", (app, html, data) => {
  const element = html.find('input[name="data.chatFlavor"]').parent().parent();
  const labelText = "Shake Delay";
  const shakeDelay = getProperty(app.object.data, "flags.shake.shakeDelay") ?? "";
  const shakeDelayField = `<div class="form-group"><label>${labelText}</label><input type="text" name="flags.shake.shakeDelay" value="${shakeDelay}"/> </div>`;
  element.append(shakeDelayField); 
});
