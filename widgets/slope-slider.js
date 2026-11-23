// Interactive figure: a line through (0, 1) whose slope m is set by a slider, with a run-1 step triangle. Used on: slope.
LW.widget("slope-slider", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Change the slope</h3>
    <svg viewBox="0 0 440 300" role="img" aria-label="A straight line through the point (0, 1). A small triangle shows one step right and the rise that goes with it."></svg>
    <label for="ms2">Slope <b>m</b> = <output></output></label>
    <input id="ms2" type="range" min="-3" max="3" step="0.5" value="2">
    <p class="read"></p>
    <p class="cap">The orange step is always 1 to the right. The slope is how far the line rises (or falls) during that one step.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=440,H=300,P=26, x0=-3,x1=3,y0=-4,y1=5;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const num = n => String(n).replace("-","−");
  let ticks = ""; for(let t=-2;t<=2;t++) if(t) ticks += `<path class="ax" d="M${X(t)} ${Y(0)-4} V${Y(0)+4}"/><text class="mt" x="${X(t)-5}" y="${Y(0)+18}">${num(t)}</text>`;
  function draw(){
    const m = parseFloat(sl.value), b = 1;
    // clip the line to the box
    const xa = Math.max(x0, m ? Math.min((y0-b)/m, (y1-b)/m) : x0), xb = Math.min(x1, m ? Math.max((y0-b)/m, (y1-b)/m) : x1);
    const word = m > 0 ? "uphill" : m < 0 ? "downhill" : "flat";
    svg.innerHTML = `
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>${ticks}
      <path class="cv" d="M${X(xa)} ${Y(b+m*xa)} L${X(xb)} ${Y(b+m*xb)}"/>
      <path class="sec" d="M${X(0)} ${Y(b)} H${X(1)} V${Y(b+m)}"/>
      <circle class="pt" cx="${X(0)}" cy="${Y(b)}" r="5"/><circle class="pt" cx="${X(1)}" cy="${Y(b+m)}" r="5"/>
      <text class="mt" x="${X(0.5)-22}" y="${Y(b)+(m>0?18:-8)}">run 1</text>
      ${m ? `<text class="mt" x="${X(1)+8}" y="${Y(b+m/2)+5}">rise ${num(m)}</text>` : ""}`;
    out.textContent = num(m);
    read.innerHTML = `Each step right, the line goes ${m>0?"up":"down"} ${num(Math.abs(m))}. ` .replace(/goes (up|down) 0\. /,"stays level. ") + `It is <b>${word}</b>.`;
  }
  sl.addEventListener("input",draw); draw();
});
