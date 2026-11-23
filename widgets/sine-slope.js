// Interactive figure: y = sin x with its tangent at a chosen x (top), and y = cos x (bottom) with a dot at the height of that tangent's slope. Used on: trig-derivatives.
LW.widget("sine-slope", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>The slope of the sine wave is the cosine wave</h3>
    <svg viewBox="0 0 440 360" role="img" aria-label="Top: the sine wave with a tangent line at a chosen point. Bottom: the cosine wave, with a dot whose height equals that tangent's slope."></svg>
    <label for="ss">Input <b>x</b> (radians) = <output></output></label>
    <input id="ss" type="range" min="0" max="6.25" step="0.25" value="0.5">
    <p class="read"></p>
    <p class="cap">Top: y = sin x. Bottom: y = cos x. Move x and watch the dot below. It always sits at the height of the slope above.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=440,P=22, x0=-0.4,x1=6.7;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P);
  const top = {y0:-1.5, y1:1.5, T:10, B:165}, bot = {y0:-1.5, y1:1.5, T:195, B:350};
  const Y = (p, y) => p.B - (y-p.y0)/(p.y1-p.y0)*(p.B-p.T);
  const curve = (p, g, a, b) => { let s=""; for(let i=0;i<=200;i++){ const x=a+(b-a)*i/200; s += (s?"L":"M")+X(x).toFixed(1)+" "+Y(p,g(x)).toFixed(1);} return s; };
  const num = n => { const r = Math.round(n*100)/100; return String(r === 0 ? 0 : r).replace("-","−"); };
  function draw(){
    const a = parseFloat(sl.value), m = Math.cos(a), fa = Math.sin(a), ta = a-0.8, tb = a+0.8;
    svg.innerHTML = `
      <path class="ax" d="M${X(x0)} ${Y(top,0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${top.T} V${top.B}"/>
      <path class="cv" d="${curve(top, Math.sin, -0.3, 6.6)}"/>
      <path class="sec" d="M${X(ta)} ${Y(top, fa+m*(ta-a))} L${X(tb)} ${Y(top, fa+m*(tb-a))}"/>
      <circle class="ptw" cx="${X(a)}" cy="${Y(top,fa)}" r="5.5"/>
      <path class="ax" d="M${X(x0)} ${Y(bot,0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${bot.T} V${bot.B}"/>
      <path class="tan" d="${curve(bot, Math.cos, -0.3, 6.6)}" style="stroke-dasharray:none;stroke-width:2.4"/>
      <path class="sec" d="M${X(a)} ${Y(bot,0)} V${Y(bot,m)}" style="stroke-dasharray:4 4"/>
      <circle class="ptw" cx="${X(a)}" cy="${Y(bot,m)}" r="5.5"/>`;
    out.textContent = num(a);
    const word = m > 0.005 ? "rising" : m < -0.005 ? "falling" : "flat";
    read.innerHTML = `Slope of the tangent on top: about <b>${num(m)}</b>. And ` + lw.tex(`\\cos(${num(a)}) \\approx ${num(m).replace("−","-")}`) + `. The wave is <b>${word}</b> here.`;
  }
  sl.addEventListener("input",draw); draw();
});
