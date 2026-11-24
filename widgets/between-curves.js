// Interactive figure: the region between y = x + 2 (top) and y = x^2 (bottom) from x = -1 to x = 2, with a movable thin strip showing its height (x + 2) - x^2. Used on: area-between-curves.
LW.widget("between-curves", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Each strip runs from the bottom curve to the top one</h3>
    <svg viewBox="0 0 400 300" role="img" aria-label="The line y = x + 2 and the parabola y = x squared, crossing at x = minus 1 and x = 2, with the region between them shaded and one thin strip highlighted."></svg>
    <label for="bcx">Strip at <b>x</b> = <output></output></label>
    <input id="bcx" type="range" min="-1" max="2" step="0.25" value="0.5">
    <p class="read"></p>
    <p class="cap">Line: y = x + 2. Parabola: y = x². They cross at x = −1 and x = 2. The strip's height is top minus bottom, wherever the curves sit.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=400,H=300,P=20, x0=-1.8,x1=2.8,y0=-0.6,y1=5;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const top = x => x + 2, bot = x => x*x;
  let par="", reg=""; for(let i=0;i<=100;i++){ const x=-1.6+3.9*i/100; if (x*x <= y1+0.2) par += (par?"L":"M")+X(x).toFixed(1)+" "+Y(x*x).toFixed(1); }
  for(let i=0;i<=60;i++){ const x=-1+3*i/60; reg += (reg?"L":"M")+X(x).toFixed(1)+" "+Y(bot(x)).toFixed(1); } reg += ` L${X(2)} ${Y(4)} L${X(-1)} ${Y(1)} Z`;
  const num = n => { const r = Math.round(n*1000)/1000; return String(r === 0 ? 0 : r).replace("-","−"); };
  function draw(){
    const x = parseFloat(sl.value), w = 0.08, h = top(x) - bot(x);
    svg.innerHTML = `<path d="${reg}" style="fill:var(--accent);fill-opacity:.14;stroke:none"/>
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>
      <path class="cv" d="${par}" style="fill:none"/>
      <path class="tan" d="M${X(-1.6)} ${Y(0.4)} L${X(2.6)} ${Y(4.6)}" style="stroke-dasharray:none;stroke-width:2.4"/>
      <rect x="${X(x-w/2)}" y="${Y(top(x))}" width="${X(x+w/2)-X(x-w/2)}" height="${Y(bot(x))-Y(top(x))}" style="fill:var(--warn);fill-opacity:.55"/>`;
    out.textContent = num(x);
    read.innerHTML = `Top ${lw.tex(`${num(top(x)).replace("−","-")}`)}, bottom ${lw.tex(`${num(bot(x)).replace("−","-")}`)}, strip height ${lw.tex(`(x + 2) - x^2 = ${num(h).replace("−","-")}`)}.`;
  }
  sl.addEventListener("input",draw); draw();
});
