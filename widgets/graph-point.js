// Interactive figure: move the input x and watch the point (x, x^2) trace the graph. Used on: graphs.
LW.widget("graph-point", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Across to the input, up to the output</h3>
    <svg viewBox="0 0 440 300" role="img" aria-label="The graph of y = x squared with one point marked at (x, x squared), and dashed guides from the x-axis up to the point"></svg>
    <label for="gp">Input <b>x</b> = <output></output></label>
    <input id="gp" type="range" min="-2" max="2" step="0.25" value="1">
    <p class="read"></p>
    <p class="cap">Every input you try lands on the curve. The curve is just all of these points at once.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=440,H=300,P=26, x0=-2.6,x1=2.6,y0=-0.8,y1=4.6;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const num = n => String(Math.round(n*10000)/10000).replace("-","−");
  let curve = ""; for(let x=-2.1;x<=2.1+1e-9;x+=0.05) curve += (curve?"L":"M")+X(x).toFixed(1)+" "+Y(x*x).toFixed(1);
  let ticks = ""; for(let t=-2;t<=2;t++){ if(t) ticks += `<path class="ax" d="M${X(t)} ${Y(0)-4} V${Y(0)+4}"/><text class="mt" x="${X(t)-5}" y="${Y(0)+18}">${num(t)}</text>`; }
  for(let t=1;t<=4;t++) ticks += `<path class="ax" d="M${X(0)-4} ${Y(t)} H${X(0)+4}"/><text class="mt" x="${X(0)-18}" y="${Y(t)+5}">${t}</text>`;
  function draw(){
    const x = parseFloat(sl.value), y = x*x;
    svg.innerHTML = `
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>${ticks}
      <text class="mt" x="${X(x1)-12}" y="${Y(0)-8}">x</text><text class="mt" x="${X(0)+8}" y="${Y(y1)+10}">y</text>
      <path class="cv" d="${curve}" style="opacity:.45"/>
      <path class="sec" d="M${X(x)} ${Y(0)} V${Y(y)}" style="stroke-dasharray:5 4"/>
      <path class="sec" d="M${X(0)} ${Y(y)} H${X(x)}" style="stroke-dasharray:2 4;opacity:.7"/>
      <circle class="ptw" cx="${X(x)}" cy="${Y(y)}" r="6"/>
      <text x="${Math.min(X(x)+10, W-110)}" y="${Math.max(Y(y)-10, 16)}">(${num(x)}, ${num(y)})</text>
      <text class="mt" x="${X(1.6)}" y="${Y(0.5)}">y = x²</text>`;
    out.textContent = num(x);
    read.innerHTML = `Go ${x<0?"left":"right"} ${num(Math.abs(x))}, then up ${num(y)}. ` + lw.tex(`f(${num(x).replace("−","-")}) = (${num(x).replace("−","-")})^2 = ${num(y)}`);
  }
  sl.addEventListener("input",draw); draw();
});
