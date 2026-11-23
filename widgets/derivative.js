// Interactive figure: secant through x = 1 and x = 1 + h on y = x^2. Used on: derivative.
LW.widget("derivative", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Slide h toward zero</h3>
    <svg viewBox="0 0 440 290" role="img" aria-label="The curve y = x squared with a secant line through x = 1 and x = 1 + h"></svg>
    <label for="hs">Step size <b>h</b> = <output></output></label>
    <input id="hs" type="range" min="0.05" max="2" step="0.05" value="2">
    <p class="read"></p>
    <p class="cap">Watch the orange secant line turn into the dashed green tangent as h shrinks.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=440,H=290,Lp=34,Rp=14,Tp=14,Bp=26, x0=-0.5,x1=3.5,y0=-1,y1=11.5;
  const X = x => Lp + (x-x0)/(x1-x0)*(W-Lp-Rp), Y = y => H-Bp - (y-y0)/(y1-y0)*(H-Tp-Bp);
  let curve = ""; for(let x=x0;x<=x1+1e-9;x+=0.05) curve += (curve?"L":"M")+X(x).toFixed(1)+" "+Y(x*x).toFixed(1);
  function draw(h){
    const s = 2+h, qx = 1+h, qy = qx*qx, ea = 0.0, eb = Math.min(x1, qx+0.9), hs = h.toFixed(2);
    svg.innerHTML = `
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>
      <path class="cv" d="${curve}"/>
      <path class="tan" d="M${X(0)} ${Y(-1)} L${X(3)} ${Y(5)}"/>
      <path class="sec" d="M${X(ea)} ${Y(1+s*(ea-1))} L${X(eb)} ${Y(1+s*(eb-1))}"/>
      <circle class="pt" cx="${X(1)}" cy="${Y(1)}" r="5.5"/>
      <circle class="ptw" cx="${X(qx)}" cy="${Y(qy)}" r="5.5"/>
      <text x="${X(1)-22}" y="${Y(1)+20}">P (x = 1)</text>
      <text x="${Math.min(X(qx)+8, W-70)}" y="${Y(qy)+18}">Q (x = ${qx.toFixed(2)})</text>
      <text class="mt" x="${W-120}" y="${Y(0)-6}">y = x²</text>`;
    out.textContent = hs;
    read.innerHTML = `<b style="color:var(--warn)">Secant slope</b> = ${lw.tex(`\\dfrac{(1 + ${hs})^2 - 1}{${hs}} = 2 + h = ${s.toFixed(2)}`)}<br><b style="color:var(--good)">Tangent slope</b> (dashed) = <b>2</b>`;
  }
  sl.addEventListener("input",()=>draw(parseFloat(sl.value))); draw(2);
});
