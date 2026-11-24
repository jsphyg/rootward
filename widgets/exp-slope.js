// Interactive figure: y = b^x with its tangent at a chosen x. Readout compares slope and height; their ratio is the same everywhere (it is ln b), and equals 1 when b = e. Used on: exp-log-derivatives.
LW.widget("exp-slope", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Slope compared with height</h3>
    <svg viewBox="0 0 440 300" role="img" aria-label="The curve y = b to the power x, with a tangent line at a chosen point."></svg>
    <label for="eb">Base <b>b</b> = <output class="ob"></output></label>
    <input id="eb" type="range" min="1.5" max="3.5" step="0.02" value="2">
    <label for="ex">Input <b>x</b> = <output class="ox"></output></label>
    <input id="ex" type="range" min="-2" max="1.5" step="0.25" value="0.5">
    <p class="read"></p>
    <p class="cap">Move x: slope ÷ height stays the same. Move b: that number changes. Near b = 2.72 (that is, e) it is 1, so the slope equals the height.</p></div>`;
  const svg = el.querySelector("svg"), ob = el.querySelector(".ob"), ox = el.querySelector(".ox"), read = el.querySelector(".read");
  const sb = el.querySelector("#eb"), sx = el.querySelector("#ex");
  const W=440,H=300,P=22, x0=-2.3,x1=1.9, y0=-0.6,y1=6;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const num = (n,d) => (Math.round(n*Math.pow(10,d))/Math.pow(10,d)).toFixed(d);
  function draw(){
    const b = parseFloat(sb.value), a = parseFloat(sx.value), k = Math.log(b), fa = Math.pow(b,a), m = fa*k;
    let s=""; for(let i=0;i<=200;i++){ const x=x0+0.1+(x1-x0-0.2)*i/200, y=Math.pow(b,x); if(y>y1+0.5) break; s += (s?"L":"M")+X(x).toFixed(1)+" "+Y(y).toFixed(1); }
    const ta=a-0.9, tb=a+0.9;
    svg.innerHTML = `<defs><clipPath id="ecl"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>
      <path class="cv" d="${s}"/>
      <path class="sec" clip-path="url(#ecl)" d="M${X(ta)} ${Y(fa+m*(ta-a))} L${X(tb)} ${Y(fa+m*(tb-a))}"/>
      <path class="ax" d="M${X(a)} ${Y(0)} V${Y(fa)}" style="stroke-dasharray:4 4"/>
      <circle class="ptw" cx="${X(a)}" cy="${Y(fa)}" r="5.5"/>`;
    ob.textContent = num(b,2); ox.textContent = String(a).replace("-","−");
    read.innerHTML = `Height: <b>${num(fa,3)}</b>. Slope: <b>${num(m,3)}</b>. Slope ÷ height = <b>${num(k,3)}</b>, which is ` + lw.tex(`\\ln ${num(b,2)}`) + `.`;
  }
  sb.addEventListener("input",draw); sx.addEventListener("input",draw); draw();
});
