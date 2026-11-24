// Interactive figure: the family y = x^2 + C. A slider shifts C; a second slider picks x and shows that every curve in the family has the same slope 2x there. Used on: antiderivatives.
LW.widget("antideriv-family", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Many curves, one derivative</h3>
    <svg viewBox="0 0 400 300" role="img" aria-label="Several copies of the parabola y = x squared, shifted up and down, with matching tangent lines at the same x."></svg>
    <label for="afc">Shift <b>C</b> = <output class="oc"></output></label>
    <input id="afc" type="range" min="-3" max="3" step="0.5" value="1">
    <label for="afx">Input <b>x</b> = <output class="ox"></output></label>
    <input id="afx" type="range" min="-1.5" max="1.5" step="0.25" value="1">
    <p class="read"></p>
    <p class="cap">Faint: other members of the family x² + C. Moving the curve up or down does not change its steepness anywhere, so all of them have derivative 2x.</p></div>`;
  const svg = el.querySelector("svg"), oc = el.querySelector(".oc"), ox = el.querySelector(".ox"), read = el.querySelector(".read");
  const sc = el.querySelector("#afc"), sx = el.querySelector("#afx");
  const W=400,H=300,P=20, x0=-2.2,x1=2.2,y0=-3.5,y1=6;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const curve = C => { let s=""; for(let i=0;i<=100;i++){ const x=-2.1+4.2*i/100, y=x*x+C; if(y>y1+0.3) { continue; } s += (s?"L":"M")+X(x).toFixed(1)+" "+Y(y).toFixed(1);} return s; };
  const num = n => { const r = Math.round(n*100)/100; return String(r === 0 ? 0 : r).replace("-","−"); };
  function draw(){
    const C = parseFloat(sc.value), a = parseFloat(sx.value), m = 2*a;
    let s = `<defs><clipPath id="afcl"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>`;
    for (let k=-3;k<=3;k++) if (k !== C) s += `<path class="cv" d="${curve(k)}" style="fill:none;opacity:.25"/>`;
    s += `<path class="cv" d="${curve(C)}" style="fill:none;stroke-width:3"/>`;
    const ta=a-0.7, tb=a+0.7, fa=a*a+C;
    s += `<path class="sec" clip-path="url(#afcl)" d="M${X(ta)} ${Y(fa+m*(ta-a))} L${X(tb)} ${Y(fa+m*(tb-a))}"/><circle class="ptw" cx="${X(a)}" cy="${Y(fa)}" r="5"/>`;
    svg.innerHTML = s;
    oc.textContent = num(C); ox.textContent = num(a);
    read.innerHTML = `Curve ${lw.tex(`y = x^2 ${C < 0 ? "-" : "+"} ${Math.abs(C)}`)}. Slope at x = ${num(a)}: <b>${num(m)}</b>, whatever C is.`;
  }
  sc.addEventListener("input",draw); sx.addEventListener("input",draw); draw();
});
