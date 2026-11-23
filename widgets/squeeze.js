// Static figure: a wobbly function trapped between 1 - x^2 and 1 + x^2, all meeting at (0, 1). Used on: squeeze-theorem.
LW.widget("squeeze", function(el){
  const W=440,H=280,P=24, x0=-1.2,x1=1.2,y0=-0.3,y1=2.5;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const path = f => { let d = ""; for(let i=0;i<=800;i++){ const x = x0+(x1-x0)*i/800; if(Math.abs(x) < 1e-6) continue; d += (d?"L":"M")+X(x).toFixed(1)+" "+Y(f(x)).toFixed(1); } return d; };
  el.innerHTML = `<figure class="fig">
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Two curves, 1 plus x squared above and 1 minus x squared below, touching at (0, 1). A wobbly curve between them is pinched to the same point.">
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>
      <path class="sec" d="${path(x => 1 + x*x)}"/><path class="tan" d="${path(x => 1 - x*x)}"/>
      <path class="cv" d="${path(x => 1 + x*x*Math.sin(9/x))}" style="stroke-width:1.8"/>
      <circle class="pt" cx="${X(0)}" cy="${Y(1)}" r="5"/>
      <text x="${X(0)+10}" y="${Y(1)-10}">(0, 1)</text>
      <text class="mt" x="${X(-1.15)}" y="${Y(2.35)}">upper: 1 + x² (orange)</text>
      <text class="mt" x="${X(-1.15)}" y="${Y(2.35)+20}">lower: 1 − x² (dashed)</text>
    </svg>
    <figcaption>The middle curve wobbles, but it is stuck between the other two. Both close in on (0, 1), so it has nowhere else to go.</figcaption>
  </figure>`;
});
