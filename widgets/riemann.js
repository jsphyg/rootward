// Interactive figure: area under y = x^2 from 0 to 2 estimated with n rectangles, using left, right or midpoint heights. True area is 8/3. Used on: riemann-sums.
LW.widget("riemann", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Rectangles under a curve</h3>
    <svg viewBox="0 0 400 300" role="img" aria-label="The curve y = x squared from 0 to 2, with rectangles under it whose total area estimates the area under the curve."></svg>
    <label for="rn">Number of rectangles <b>n</b> = <output></output></label>
    <input id="rn" type="range" min="1" max="50" step="1" value="4">
    <p class="rmode">Height from the
      <label><input type="radio" name="rm" value="0" checked> left edge</label>
      <label><input type="radio" name="rm" value="1"> right edge</label>
      <label><input type="radio" name="rm" value="0.5"> middle</label></p>
    <p class="read"></p>
    <p class="cap">The true area is 8/3 ≈ 2.6667. More, thinner rectangles get closer to it, whichever heights you use.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("#rn");
  const W=400,H=300,P=24, x0=-0.2,x1=2.2,y0=-0.3,y1=4.4;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const f = x => x*x;
  let cv=""; for(let i=0;i<=100;i++){ const x=2.1*i/100; cv += (cv?"L":"M")+X(x).toFixed(1)+" "+Y(f(x)).toFixed(1); }
  function draw(){
    const n = parseInt(sl.value), w = 2/n, t = parseFloat(el.querySelector('input[name="rm"]:checked').value);
    let rects = "", sum = 0;
    for (let i=0;i<n;i++){ const h = f((i+t)*w); sum += h*w;
      rects += `<rect x="${X(i*w)}" y="${Y(h)}" width="${X((i+1)*w)-X(i*w)}" height="${Y(0)-Y(h)}" style="fill:var(--accent);fill-opacity:.22;stroke:var(--accent);stroke-width:${n>20?0.6:1.4}"/>`; }
    svg.innerHTML = `${rects}
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>
      <path class="cv" d="${cv}" style="fill:none"/>
      <text class="mt" x="${X(2)-4}" y="${Y(0)+18}">2</text>`;
    out.textContent = n;
    const err = sum - 8/3;
    read.innerHTML = `Total of the rectangles: <b>${sum.toFixed(4)}</b>. That is ${err > 0.00005 ? "<b>too high</b> by " + err.toFixed(4) : err < -0.00005 ? "<b>too low</b> by " + (-err).toFixed(4) : "almost exactly right"}.`;
  }
  sl.addEventListener("input",draw); el.querySelectorAll('input[name="rm"]').forEach(r => r.addEventListener("change",draw)); draw();
});
