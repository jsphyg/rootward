// Interactive figure: f(x) = x^3 - 3x with its tangent at a chosen x (top), and the derivative f'(x) = 3x^2 - 3 (bottom). Used on: derivative-function.
LW.widget("slope-reader", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Each slope on top becomes a height below</h3>
    <svg viewBox="0 0 440 420" role="img" aria-label="Top: the curve y = x cubed minus 3x with a tangent line at a chosen point. Bottom: the derivative curve, with a dot whose height equals that tangent's slope."></svg>
    <label for="sr">Input <b>x</b> = <output></output></label>
    <input id="sr" type="range" min="-2" max="2" step="0.25" value="-1.5">
    <p class="read"></p>
    <p class="cap">Where the top curve climbs, the bottom curve is above 0. Where it falls, the bottom curve is below 0. At the peak and the valley, the slope is 0.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=440,P=26, x0=-2.4,x1=2.4;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P);
  const top = {y0:-3, y1:3, T:10, B:190}, bot = {y0:-4, y1:10, T:225, B:410};
  const Y = (p, y) => p.B - (y-p.y0)/(p.y1-p.y0)*(p.B-p.T);
  const f = x => x*x*x - 3*x, d = x => 3*x*x - 3;
  const curve = (p, g, a, b) => { let s=""; for(let i=0;i<=200;i++){ const x=a+(b-a)*i/200; s += (s?"L":"M")+X(x).toFixed(1)+" "+Y(p,g(x)).toFixed(1);} return s; };
  const num = n => String(Math.round(n*1000)/1000).replace("-","−");
  function draw(){
    const a = parseFloat(sl.value), m = d(a), fa = f(a), ta = a-0.7, tb = a+0.7;
    svg.innerHTML = `
      <path class="ax" d="M${X(x0)} ${Y(top,0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${top.T} V${top.B}"/>
      <path class="cv" d="${curve(top, f, -2.15, 2.15)}"/>
      <path class="sec" d="M${X(ta)} ${Y(top, fa+m*(ta-a))} L${X(tb)} ${Y(top, fa+m*(tb-a))}"/>
      <circle class="ptw" cx="${X(a)}" cy="${Y(top,fa)}" r="5.5"/>
      <text class="mt" x="${W-110}" y="${top.B-6}">y = x³ − 3x</text>
      <path class="ax" d="M${X(x0)} ${Y(bot,0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${bot.T} V${bot.B}"/>
      <path class="tan" d="${curve(bot, d, -2.1, 2.1)}" style="stroke-dasharray:none;stroke-width:2.4"/>
      <path class="sec" d="M${X(a)} ${Y(bot,0)} V${Y(bot,m)}" style="stroke-dasharray:4 4"/>
      <circle class="ptw" cx="${X(a)}" cy="${Y(bot,m)}" r="5.5"/>
      <text class="mt" x="${W-150}" y="${bot.B-6}">y = f′(x) = 3x² − 3</text>`;
    out.textContent = num(a);
    const word = m > 0 ? "rising" : m < 0 ? "falling" : "flat";
    read.innerHTML = `Slope of the orange tangent: ` + lw.tex(`f'(${num(a).replace("−","-")}) = ${num(m).replace("−","-")}`) + `. The curve is <b>${word}</b> here.`;
  }
  sl.addEventListener("input",draw); draw();
});
