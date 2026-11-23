// Interactive figure: inputs close in on x = 1 from both sides of (x^2 - 1)/(x - 1), which has a hole at (1, 2). Used on: limits.
LW.widget("limit-zoom", function(el, lw){
  const D = [0.5, 0.3, 0.2, 0.1, 0.05, 0.01, 0.001];
  el.innerHTML = `<div class="wcard"><h3>Close in on x = 1</h3>
    <svg viewBox="0 0 440 290" role="img" aria-label="The line y = x + 1 with a hole at (1, 2). Two points, one on each side of x = 1, slide toward the hole."></svg>
    <label for="lz">Distance from 1 = <output></output></label>
    <input id="lz" type="range" min="0" max="${D.length-1}" step="1" value="0">
    <p class="read"></p>
    <p class="cap">Neither point ever lands on x = 1. But both outputs crowd in on 2 from either side, so the limit is 2.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=440,H=290,P=26, x0=-0.6,x1=2.6,y0=-0.4,y1=3.6;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const f = x => (x*x - 1)/(x - 1);
  const fmt = n => String(Math.round(n*100000)/100000);
  function draw(){
    const d = D[+sl.value], a = 1-d, b = 1+d;
    svg.innerHTML = `
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>
      <path class="ax" d="M${X(1)} ${Y(0)-4} V${Y(0)+4}"/><text class="mt" x="${X(1)-4}" y="${Y(0)+18}">1</text>
      <path class="ax" d="M${X(0)-4} ${Y(2)} H${X(0)+4}"/><text class="mt" x="${X(0)-16}" y="${Y(2)+5}">2</text>
      <path class="tan" d="M${X(0)} ${Y(2)} H${X(1)}" style="opacity:.6"/>
      <path class="cv" d="M${X(x0)} ${Y(x0+1)} L${X(x1)} ${Y(x1+1)}"/>
      <circle cx="${X(1)}" cy="${Y(2)}" r="6" style="fill:var(--raise);stroke:var(--warn);stroke-width:2.2"/>
      <path class="sec" d="M${X(a)} ${Y(0)} V${Y(f(a))}" style="stroke-dasharray:4 4"/><path class="sec" d="M${X(b)} ${Y(0)} V${Y(f(b))}" style="stroke-dasharray:4 4"/>
      <circle class="pt" cx="${X(a)}" cy="${Y(f(a))}" r="5"/><circle class="pt" cx="${X(b)}" cy="${Y(f(b))}" r="5"/>`;
    out.textContent = fmt(d);
    read.innerHTML = `From the left: ${lw.tex(`f(${fmt(a)}) = ${fmt(f(a))}`)}<br>From the right: ${lw.tex(`f(${fmt(b)}) = ${fmt(f(b))}`)}`;
  }
  sl.addEventListener("input",draw); draw();
});
