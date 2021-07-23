function HurtShake(shakeDelay)
{
  console.log("Hurt Shaking");
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
  setTimeout(function(){
    TokenMagic.addFiltersOnTargeted(hurtEffect);
  },shakeDelay);
}
function DeathShake(shakeDelay)
{
  console.log("Death Shaking");
  let hurtEffect =
  [{
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
  let deathEffect =
  [{
      filterType: "splash",
      filterId: "death",
      color: 0x900505,
      padding: 30,
      time: Math.random()*1000,
      seed: Math.random()/100,
      splashFactor: 2,
      spread: 7,
      blend: 1,
      dimX: 1,
      dimY: 1,
      cut: true,
      textureAlphaBlend: false
  }];
  setTimeout(function(){
    TokenMagic.addFiltersOnTargeted(hurtEffect);
    setTimeout(function(){
      TokenMagic.addFiltersOnTargeted(deathEffect, true);
    },400);
  },shakeDelay);

}

Hooks.on("midi-qol.RollComplete", function(data){
  console.log("Targets hit: " + (data.hitTargets.size ?? 0));
  if(data.hitTargets.size > 0)
  {
    let hpDamage = data.damageList[0].hpDamage;
    let newHP = data.damageList[0].newHP;
    let shakeDelay = getProperty(data.item, "data.flags.shake.shakeDelay") ?? "";
    if (hpDamage > 0 && newHP > 0)
    {
      HurtShake(shakeDelay);
    }
    else if (hpDamage > 0 && newHP <= 0)
    {
      DeathShake(shakeDelay);
    }
  }
});

Hooks.on("renderItemSheet", (app, html, data) => {
  const element = html.find('input[name="data.chatFlavor"]').parent().parent();
  const labelText = "Shake Delay";
  const shakeDelay = getProperty(app.object.data, "flags.shake.shakeDelay") ?? "";
  const shakeDelayField = `<div class="form-group"><label>${labelText}</label><input type="text" name="flags.shake.shakeDelay" value="${shakeDelay}"/> </div>`;
  element.append(shakeDelayField); 
});
