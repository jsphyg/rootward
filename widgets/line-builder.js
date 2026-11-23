// Interactive figure: y = m x + b with sliders for m and b. Used on: linear-functions.
LW.widget("line-builder", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Build a line</h3>
    <svg viewBox="0 0 440 300" role="img" aria-label="A straight line y = m x + b. A dot marks where it crosses the y-axis, and a small step triangle shows the slope."></svg>
    <label for="lbm">Slope <b>m</b> = <output id="lbmo"></output></label>
    <input id="lbm" type="range" min="-3" max="3" step="0.5" value="2">
    <label for="lbb">Starting height <b>b</b> = <output id="lbbo"></output></label>
    <input id="lbb" type="range" min="-3" max="3" step="0.5" value="1">
    <p class="read"></p>
    <p class="cap">b moves the whole line up or down without tilting it. m tilts it without moving the crossing point.</p></div>`;
  const svg = el.querySelector("svg"), read = el.querySelector(".read"), sm = el.querySelector("#lbm"), sb = el.querySelector("#lbb");
  const om = el.querySelector("#lbmo"), ob = el.querySelector("#lbbo");
  const W=440,H=300,P=26, x0=-4,x1=4,y0=-5,y1=5;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const num = n => String(n).replace("-","−");
  let ticks = ""; for(let t=-3;t<=3;t++) if(t){ ticks += `<path class="ax" d="M${X(t)} ${Y(0)-4} V${Y(0)+4}"/><path class="ax" d="M${X(0)-4} ${Y(t)} H${X(0)+4}"/>`; }
  function draw(){
    const m = parseFloat(sm.value), b = parseFloat(sb.value);
    const clip = (lo, hi) => m ? [Math.max(x0, Math.min((lo-b)/m, (hi-b)/m)), Math.min(x1, Math.max((lo-b)/m, (hi-b)/m))] : [x0, x1];
    const [xa, xb] = clip(y0, y1);
    svg.innerHTML = `
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>${ticks}
      <text class="mt" x="${X(x1)-12}" y="${Y(0)-8}">x</text><text class="mt" x="${X(0)+8}" y="${Y(y1)+12}">y</text>
      <path class="cv" d="M${X(xa)} ${Y(b+m*xa)} L${X(xb)} ${Y(b+m*xb)}"/>
      <path class="sec" d="M${X(0)} ${Y(b)} H${X(1)} V${Y(b+m)}"/>
      <circle class="ptw" cx="${X(0)}" cy="${Y(b)}" r="6"/>
      <text x="${X(0)-70}" y="${Y(b)+5}">(0, ${num(b)})</text>`;
    om.textContent = num(m); ob.textContent = num(b);
    const mt = m === 1 ? "" : m === -1 ? "-" : String(m);
    const rule = m === 0 ? `y = ${b}` : `y = ${mt}x` + (b > 0 ? ` + ${b}` : b < 0 ? ` - ${-b}` : "");
    read.innerHTML = lw.tex(rule) + `. Crosses the y-axis at ${num(b)}. Each step right: ${m===0?"no change":(m>0?"up ":"down ")+(m===0?"":num(Math.abs(m)))}.`;
  }
  sm.addEventListener("input",draw); sb.addEventListener("input",draw); draw();
});
