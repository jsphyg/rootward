// Interactive figure: top, f(t) = 2 - t with the signed area from 0 to x shaded; bottom, the area function A(x) = 2x - x^2/2 with a dot at the current x. The slope of A at x equals the height f(x). Used on: ftc.
LW.widget("area-accumulate", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>The area so far, as a function</h3>
    <svg viewBox="0 0 400 400" role="img" aria-label="Top: the line f of t equals 2 minus t, with the area from 0 to x shaded. Bottom: the graph of that area as x changes."></svg>
    <label for="acx">Right edge <b>x</b> = <output></output></label>
    <input id="acx" type="range" min="0" max="4" step="0.25" value="1">
    <p class="read"></p>
    <p class="cap">Top: f(t) = 2 − t. Bottom: A(x), the signed area under f from 0 to x. Where f is above the axis, A climbs. Where f is below, A falls. The steepness of A at x is the height of f at x.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=400,P=26, x0=-0.3,x1=4.3;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P);
  const top = {y0:-2.4, y1:2.4, T:10, B:180}, bot = {y0:-0.6, y1:2.6, T:215, B:390};
  const Y = (p, y) => p.B - (y-p.y0)/(p.y1-p.y0)*(p.B-p.T);
  const f = t => 2 - t, A = x => 2*x - x*x/2;
  const num = n => { const r = Math.round(n*1000)/1000; return String(r === 0 ? 0 : r).replace("-","−"); };
  let ac=""; for(let i=0;i<=100;i++){ const x=4*i/100; ac += (ac?"L":"M")+X(x).toFixed(1)+" "+Y(bot,A(x)).toFixed(1); }
  function draw(){
    const x = parseFloat(sl.value);
    let shade = "";
    const pos = Math.min(x,2);
    if (pos > 0) shade += `<path d="M${X(0)} ${Y(top,0)} L${X(0)} ${Y(top,f(0))} L${X(pos)} ${Y(top,f(pos))} L${X(pos)} ${Y(top,0)} Z" style="fill:var(--good);fill-opacity:.3"/>`;
    if (x > 2) shade += `<path d="M${X(2)} ${Y(top,0)} L${X(x)} ${Y(top,f(x))} L${X(x)} ${Y(top,0)} Z" style="fill:var(--warn);fill-opacity:.3"/>`;
    const m = f(x), ta = x-0.6, tb = x+0.6;
    svg.innerHTML = shade + `
      <path class="ax" d="M${X(x0)} ${Y(top,0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${top.T} V${top.B}"/>
      <path class="cv" d="M${X(-0.2)} ${Y(top,f(-0.2))} L${X(4.2)} ${Y(top,f(4.2))}"/>
      <circle class="ptw" cx="${X(x)}" cy="${Y(top,f(x))}" r="5"/>
      <path class="ax" d="M${X(x0)} ${Y(bot,0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${bot.T} V${bot.B}"/>
      <path class="tan" d="${ac}" style="stroke-dasharray:none;stroke-width:2.4;fill:none"/>
      <path class="sec" d="M${X(ta)} ${Y(bot,A(x)+m*(ta-x))} L${X(tb)} ${Y(bot,A(x)+m*(tb-x))}"/>
      <circle class="ptw" cx="${X(x)}" cy="${Y(bot,A(x))}" r="5"/>`;
    out.textContent = num(x);
    read.innerHTML = `Area so far: ${lw.tex(`A(${num(x)}) = ${num(A(x)).replace("−","-")}`)}. Height of f here: <b>${num(m)}</b>. Slope of A here: <b>${num(m)}</b>.`;
  }
  sl.addEventListener("input",draw); draw();
});
