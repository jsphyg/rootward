// Interactive figure: y = sqrt(x) and its tangent line at x = 4, L(x) = 2 + (x - 4)/4, with a zoom slider. Zoomed in, the curve and the line become hard to tell apart. Used on: linear-approximation.
LW.widget("tangent-zoom", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Zoom in, and the curve turns into its tangent line</h3>
    <svg viewBox="0 0 400 300" role="img" aria-label="The curve y = square root of x and its tangent line at the point (4, 2), shown in a window that can zoom in around that point."></svg>
    <label for="tz">Zoom: window width = <output></output></label>
    <input id="tz" type="range" min="0" max="5" step="1" value="0">
    <p class="read"></p>
    <p class="cap">Curve: y = √x. Straight line: the tangent at (4, 2). Each zoom step shows a window one third as wide.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=400,H=300,P=20;
  const f = Math.sqrt, L = x => 2 + (x-4)/4;
  const num = (n,d) => (Math.round(n*Math.pow(10,d))/Math.pow(10,d)).toFixed(d);
  function draw(){
    const z = parseInt(sl.value), half = 3.9/Math.pow(3,z), x0 = 4-half, x1 = 4+half, y0 = 2-half*0.37, y1 = 2+half*0.37;
    const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
    let c="", l=""; for(let i=0;i<=200;i++){ const x = x0+(x1-x0)*i/200; c += (c?"L":"M")+X(x).toFixed(2)+" "+Y(f(x)).toFixed(2); l += (l?"L":"M")+X(x).toFixed(2)+" "+Y(L(x)).toFixed(2); }
    svg.innerHTML = `<defs><clipPath id="tzc"><rect x="${P}" y="${P}" width="${W-2*P}" height="${H-2*P}"/></clipPath></defs>
      <g clip-path="url(#tzc)"><path class="sec" d="${l}"/><path class="cv" d="${c}"/></g>
      <circle class="ptw" cx="${X(4)}" cy="${Y(2)}" r="5"/>`;
    out.textContent = num(2*half, z < 2 ? 1 : z < 4 ? 2 : 3);
    const xe = 4 + half*0.9;
    read.innerHTML = `Near the right edge, at x = ${num(xe,4)}: the curve is at <b>${num(f(xe),6)}</b>, the line at <b>${num(L(xe),6)}</b>. Gap: <b>${num(L(xe)-f(xe),6)}</b>.`;
  }
  sl.addEventListener("input",draw); draw();
});
