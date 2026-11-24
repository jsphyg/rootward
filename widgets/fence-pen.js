// Interactive figure: a rectangular pen made from 100 m of fencing. Slider sets the width x; the length is 50 - x and the area x(50 - x) is drawn as a bar and as a point on the area curve. Used on: optimization.
LW.widget("fence-pen", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>100 metres of fence: which pen holds the most?</h3>
    <svg viewBox="0 0 440 300" role="img" aria-label="Left: a rectangle with width x and length 50 minus x. Right: the graph of area against x, with a dot at the current choice."></svg>
    <label for="fp">Width <b>x</b> = <output></output> m</label>
    <input id="fp" type="range" min="1" max="49" step="1" value="10">
    <p class="read"></p>
    <p class="cap">Every pen uses all 100 m of fence. Long thin pens hold little. The area peaks when the pen is a square.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  // left panel: pen drawn at 3.4 px per metre inside a 180 x 180 box at (10, 60)
  const s = 3.4, LX = 15, LY = 245;
  // right panel: area curve, x from 0 to 50, area from 0 to 700
  const GX0 = 235, GX1 = 430, GY0 = 260, GY1 = 40;
  const GX = x => GX0 + x/50*(GX1-GX0), GY = a => GY0 - a/700*(GY0-GY1);
  let curve = ""; for(let i=0;i<=100;i++){ const x = 50*i/100; curve += (curve?"L":"M")+GX(x).toFixed(1)+" "+GY(x*(50-x)).toFixed(1); }
  function draw(){
    const x = parseFloat(sl.value), y = 50 - x, A = x*y;
    svg.innerHTML = `
      <rect x="${LX}" y="${LY - y*s}" width="${x*s}" height="${y*s}" style="fill:var(--accent);fill-opacity:.15;stroke:var(--accent);stroke-width:2.5"/>
      <text class="mt" x="${LX + x*s/2 - 8}" y="${LY + 18}">${x}</text>
      <text class="mt" x="${LX + x*s + 6}" y="${LY - y*s/2 + 5}">${y}</text>
      <path class="ax" d="M${GX0} ${GY0} H${GX1}"/><path class="ax" d="M${GX0} ${GY0} V${GY1-10}"/>
      <path class="cv" d="${curve}" style="fill:none"/>
      <path class="ax" d="M${GX(x)} ${GY0} V${GY(A)}" style="stroke-dasharray:4 4"/>
      <circle class="ptw" cx="${GX(x)}" cy="${GY(A)}" r="5.5"/>
      <text class="mt" x="${GX1-24}" y="${GY0+18}">x</text>
      <text class="mt" x="${GX0+6}" y="${GY1-14}">area</text>`;
    out.textContent = x;
    read.innerHTML = `Pen: <b>${x} m</b> by <b>${y} m</b>. Area: <b>${A} m²</b>.` + (x === 25 ? " This is the largest possible." : "");
  }
  sl.addEventListener("input",draw); draw();
});
