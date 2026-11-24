// Interactive figure: the line y = x with the region between it and the x-axis from a to b shaded, green above the axis and red below. Readout gives the signed area (b^2 - a^2)/2. Used on: definite-integral.
LW.widget("integral-shade", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Signed area under y = x</h3>
    <svg viewBox="0 0 400 280" role="img" aria-label="The line y = x, with the region between it and the x-axis shaded from a to b. Parts above the axis and below it are shaded differently."></svg>
    <label for="isa">Start <b>a</b> = <output class="oa"></output></label>
    <input id="isa" type="range" min="-3" max="3" step="0.5" value="-1">
    <label for="isb">End <b>b</b> = <output class="ob"></output></label>
    <input id="isb" type="range" min="-3" max="3" step="0.5" value="2">
    <p class="read"></p>
    <p class="cap">Area above the axis counts as positive, area below as negative. If b is left of a, the whole answer flips sign.</p></div>`;
  const svg = el.querySelector("svg"), oa = el.querySelector(".oa"), ob = el.querySelector(".ob"), read = el.querySelector(".read");
  const sa = el.querySelector("#isa"), sb = el.querySelector("#isb");
  const W=400,H=280,P=20, x0=-3.4,x1=3.4,y0=-3.4,y1=3.4;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const num = n => { const r = Math.round(n*100)/100; return String(r === 0 ? 0 : r).replace("-","−"); };
  const tri = (u, v) => `M${X(u)} ${Y(0)} L${X(u)} ${Y(u)} L${X(v)} ${Y(v)} L${X(v)} ${Y(0)} Z`;
  function draw(){
    const a = parseFloat(sa.value), b = parseFloat(sb.value), lo = Math.min(a,b), hi = Math.max(a,b);
    let s = "";
    if (lo < 0) s += `<path d="${tri(lo, Math.min(hi,0))}" style="fill:var(--warn);fill-opacity:.3;stroke:none"/>`;
    if (hi > 0) s += `<path d="${tri(Math.max(lo,0), hi)}" style="fill:var(--good);fill-opacity:.3;stroke:none"/>`;
    svg.innerHTML = s + `
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>
      <path class="cv" d="M${X(-3.3)} ${Y(-3.3)} L${X(3.3)} ${Y(3.3)}"/>
      <path class="ax" d="M${X(a)} ${Y(0)-6} V${Y(0)+6}" style="stroke-width:2.5"/><text class="mt" x="${X(a)-4}" y="${Y(0)+22}">a</text>
      <path class="ax" d="M${X(b)} ${Y(0)-6} V${Y(0)+6}" style="stroke-width:2.5"/><text class="mt" x="${X(b)-4}" y="${Y(0)-12}">b</text>`;
    oa.textContent = num(a); ob.textContent = num(b);
    const val = (b*b - a*a)/2;
    read.innerHTML = lw.tex(`\\int_{${num(a).replace("−","-")}}^{${num(b).replace("−","-")}} x\\,dx = ${num(val).replace("−","-")}`) + (a === b ? ". No width, no area." : b < a ? ". The limits are backwards, so the sign flips." : ".");
  }
  sa.addEventListener("input",draw); sb.addEventListener("input",draw); draw();
});
