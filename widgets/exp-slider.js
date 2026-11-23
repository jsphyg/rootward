// Interactive figure: y = b^x for a chosen base b. Used on: exponential-functions.
LW.widget("exp-slider", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Change the growth factor</h3>
    <svg viewBox="0 0 440 300" role="img" aria-label="The graph of y = b to the power x. It always passes through (0, 1) and stays above the x-axis."></svg>
    <label for="eb">Base <b>b</b> = <output></output></label>
    <input id="eb" type="range" min="0.25" max="3" step="0.25" value="2">
    <p class="read"></p>
    <p class="cap">Every curve passes through (0, 1), because any base to the power 0 is 1. None ever touches the x-axis.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=440,H=300,P=26, x0=-3.3,x1=3.3,y0=-0.8,y1=8.5;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const num = n => String(n).replace("-","−");
  let ticks = ""; for(let t=-3;t<=3;t++) if(t) ticks += `<path class="ax" d="M${X(t)} ${Y(0)-4} V${Y(0)+4}"/><text class="mt" x="${X(t)-5}" y="${Y(0)+18}">${num(t)}</text>`;
  for(let t=2;t<=8;t+=2) ticks += `<path class="ax" d="M${X(0)-4} ${Y(t)} H${X(0)+4}"/><text class="mt" x="${X(0)-18}" y="${Y(t)+5}">${t}</text>`;
  function draw(){
    const b = parseFloat(sl.value); let cv = "", pen = false;
    for(let i=0;i<=300;i++){ const x = x0+(x1-x0)*i/300, y = Math.pow(b,x); if(y > y1+0.5){ pen = false; continue; } cv += (pen?"L":"M")+X(x).toFixed(1)+" "+Y(y).toFixed(1); pen = true; }
    svg.innerHTML = `
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>${ticks}
      <path class="cv" d="${cv}"/><circle class="ptw" cx="${X(0)}" cy="${Y(1)}" r="5.5"/>
      <text x="${X(0)+10}" y="${Y(1)+18}">(0, 1)</text>`;
    out.textContent = b;
    const kind = b > 1 ? "grows: each step right multiplies the height by " + b : b < 1 ? "shrinks: each step right multiplies the height by " + b : "stays flat: multiplying by 1 changes nothing";
    read.innerHTML = lw.tex(`y = ${b}^x`) + ` ${kind}.`;
  }
  sl.addEventListener("input",draw); draw();
});
