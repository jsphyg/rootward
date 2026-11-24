// Interactive figure: y = x^3 on [0, 2] with the secant from (0, 0) to (2, 8) (slope 4) and a movable tangent. Where the tangent's slope equals 4 (x = 2/sqrt(3)), the two lines are parallel. Used on: mean-value-theorem.
LW.widget("mvt-tangent", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Somewhere, the tangent matches the average</h3>
    <svg viewBox="0 0 400 300" role="img" aria-label="The curve y = x cubed from 0 to 2, with the straight line joining its ends, and a tangent line at a movable point."></svg>
    <label for="mv">Tangent point <b>x</b> = <output></output></label>
    <input id="mv" type="range" min="0.1" max="1.9" step="0.005" value="0.5">
    <p class="read"></p>
    <p class="cap">Dashed: the line from (0, 0) to (2, 8), with slope 4, the average rate. Orange: the tangent at your point. Slide until they are parallel: near x = 1.155.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const W=400,H=300,P=24, x0=-0.3,x1=2.3,y0=-1,y1=9;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  let cv=""; for(let i=0;i<=100;i++){ const x=2*i/100; cv += (cv?"L":"M")+X(x).toFixed(1)+" "+Y(x*x*x).toFixed(1); }
  const num = (n,d) => (Math.round(n*Math.pow(10,d))/Math.pow(10,d)).toFixed(d);
  function draw(){
    let a = parseFloat(sl.value); const m = 3*a*a, fa = a*a*a, close = Math.abs(m-4) < 0.05;
    const ta = a-0.8, tb = a+0.8;
    svg.innerHTML = `<defs><clipPath id="mvc"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>
      <path class="cv" d="${cv}" style="fill:none"/>
      <path class="ax" d="M${X(0)} ${Y(0)} L${X(2)} ${Y(8)}" style="stroke-dasharray:6 5;stroke-width:2"/>
      <path class="sec" clip-path="url(#mvc)" d="M${X(ta)} ${Y(fa+m*(ta-a))} L${X(tb)} ${Y(fa+m*(tb-a))}" style="${close ? "stroke-width:3.5" : ""}"/>
      <circle class="pt" cx="${X(0)}" cy="${Y(0)}" r="4.5"/><circle class="pt" cx="${X(2)}" cy="${Y(8)}" r="4.5"/>
      <circle class="ptw" cx="${X(a)}" cy="${Y(fa)}" r="5.5"/>`;
    out.textContent = num(a,3);
    read.innerHTML = `Tangent slope ${lw.tex("3x^2")} = <b>${num(m,2)}</b>. Average slope = <b>4</b>.` + (close ? " <b>Parallel.</b>" : m < 4 ? " The tangent is too shallow: move right." : " The tangent is too steep: move left.");
  }
  sl.addEventListener("input",draw); draw();
});
