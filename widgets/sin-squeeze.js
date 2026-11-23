// Interactive figure: a small angle h on the unit circle, showing the small triangle (area sin h / 2), the slice (area h / 2) and the big triangle (area tan h / 2). Used on: trig-derivatives.
LW.widget("sin-squeeze", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Three shapes, one inside the next</h3>
    <svg viewBox="0 0 440 330" role="img" aria-label="A quarter of a circle of radius 1. A small triangle sits inside a pie slice, which sits inside a taller triangle reaching up to the tangent line at x = 1."></svg>
    <label for="sq">Angle <b>h</b> (radians) = <output></output></label>
    <input id="sq" type="range" min="0.1" max="0.85" step="0.05" value="0.7">
    <p class="read"></p>
    <p class="cap">The small triangle fits inside the slice, and the slice fits inside the tall triangle. As h shrinks, all three squeeze together.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const S = 250, OX = 60, OY = 300;              // 1 unit = 250 px; origin at (60, 300)
  const X = x => OX + x*S, Y = y => OY - y*S;
  const num = n => (Math.round(n*1000)/1000).toFixed(3);
  function draw(){
    const h = parseFloat(sl.value), c = Math.cos(h), s = Math.sin(h), t = Math.tan(h);
    let arc = ""; for(let i=0;i<=60;i++){ const a = (Math.PI/2)*i/60; arc += (arc?"L":"M")+X(Math.cos(a)).toFixed(1)+" "+Y(Math.sin(a)).toFixed(1); }
    let slice = `M${X(0)} ${Y(0)}`; for(let i=0;i<=40;i++){ const a = h*i/40; slice += ` L${X(Math.cos(a)).toFixed(1)} ${Y(Math.sin(a)).toFixed(1)}`; } slice += " Z";
    const ty = t;
    svg.innerHTML = `
      <path class="ax" d="M${X(-0.1)} ${Y(0)} H${X(1.45)}"/><path class="ax" d="M${X(0)} ${Y(-0.05)} V${Y(1.15)}"/>
      <path class="ax" d="${arc}" style="fill:none;stroke-dasharray:3 4"/>
      <path d="M${X(1)} ${Y(0)} V${Y(ty)}" class="ax"/>
      <path d="M${X(0)} ${Y(0)} L${X(1)} ${Y(0)} L${X(1)} ${Y(ty)} Z" style="fill:var(--warn);fill-opacity:.12;stroke:var(--warn);stroke-width:2"/>
      <path d="${slice}" style="fill:var(--accent);fill-opacity:.18;stroke:var(--accent);stroke-width:2"/>
      <path d="M${X(0)} ${Y(0)} L${X(1)} ${Y(0)} L${X(c)} ${Y(s)} Z" style="fill:var(--good);fill-opacity:.25;stroke:var(--good);stroke-width:2"/>
      <circle class="pt" cx="${X(c)}" cy="${Y(s)}" r="4.5"/>
      <text class="mt" x="${X(0)-14}" y="${Y(0)+18}">0</text>
      <text class="mt" x="${X(1)-4}" y="${Y(0)+18}">1</text>`;
    out.textContent = (Math.round(h*100)/100).toFixed(2);
    read.innerHTML = `Small triangle: ${lw.tex("\\tfrac12\\sin h")} = <b>${num(s/2)}</b>. Slice: ${lw.tex("\\tfrac12 h")} = <b>${num(h/2)}</b>. Tall triangle: ${lw.tex("\\tfrac12\\tan h")} = <b>${num(t/2)}</b>. And ${lw.tex("\\dfrac{\\sin h}{h}")} = <b>${num(s/h)}</b>.`;
  }
  sl.addEventListener("input",draw); draw();
});
