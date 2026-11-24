// Interactive figure: f(x) = x^3 - 3x (top), its slope f'(x) = 3x^2 - 3 (middle) and the slope of that, f''(x) = 6x (bottom), with a marker at a chosen x. Used on: higher-derivatives.
LW.widget("deriv-stack", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>A function, its slope, and the slope of its slope</h3>
    <svg viewBox="0 0 440 470" role="img" aria-label="Three graphs stacked: y = x cubed minus 3x, its derivative 3x squared minus 3, and its second derivative 6x. A dashed vertical line marks the chosen x on all three."></svg>
    <label for="ds">Input <b>x</b> = <output></output></label>
    <input id="ds" type="range" min="-2" max="2" step="0.25" value="-1">
    <p class="read"></p>
    <p class="cap">Top: f(x) = x³ − 3x. Middle: f′(x) = 3x² − 3. Bottom: f″(x) = 6x. Where the bottom graph is below 0, the top curve bends downward. Where it is above 0, the top curve bends upward.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=440,P=26, x0=-2.4,x1=2.4;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P);
  const panels = [
    {f: x => x*x*x - 3*x, y0:-3, y1:3, T:10, B:145},
    {f: x => 3*x*x - 3,   y0:-4, y1:12, T:165, B:305},
    {f: x => 6*x,         y0:-13, y1:13, T:325, B:460}];
  const Y = (p, y) => p.B - (y-p.y0)/(p.y1-p.y0)*(p.B-p.T);
  const curve = p => { let s=""; for(let i=0;i<=200;i++){ const x=-2.1+4.2*i/200, y=p.f(x); s += (s?"L":"M")+X(x).toFixed(1)+" "+Y(p,Math.max(p.y0,Math.min(p.y1,y))).toFixed(1);} return s; };
  const num = n => { const r = Math.round(n*1000)/1000; return String(r === 0 ? 0 : r).replace("-","−"); };
  const cls = ["cv", "tan", "sec"];
  function draw(){
    const a = parseFloat(sl.value);
    let s = `<path class="ax" d="M${X(a)} 6 V464" style="stroke-dasharray:4 4"/>`;
    panels.forEach((p,i) => {
      s += `<path class="ax" d="M${X(x0)} ${Y(p,0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${p.T} V${p.B}"/>
        <path class="${cls[i]}" d="${curve(p)}" style="stroke-dasharray:none;stroke-width:2.4;fill:none"/>
        <circle class="ptw" cx="${X(a)}" cy="${Y(p,p.f(a))}" r="5"/>`;
    });
    svg.innerHTML = s;
    out.textContent = num(a);
    const d2 = 6*a, bend = d2 > 0 ? "bends <b>upward</b>, like a cup" : d2 < 0 ? "bends <b>downward</b>, like a cap" : "is <b>switching</b> from bending down to bending up";
    read.innerHTML = lw.tex(`f(${num(a).replace("−","-")}) = ${num(panels[0].f(a)).replace("−","-")},\\ f'(${num(a).replace("−","-")}) = ${num(panels[1].f(a)).replace("−","-")},\\ f''(${num(a).replace("−","-")}) = ${num(d2).replace("−","-")}`) + `. Here the top curve ${bend}.`;
  }
  sl.addEventListener("input",draw); draw();
});
