// Data-driven figure: plots y = fn(x) with marked points. Data lines (all optional except fn):
//   fn: x*x - 2*x          (JavaScript expression in x)
//   x: -1.5 3.5            (x range shown)   y: -2 4   (y range shown)
//   points: -1,3; 0,0; 1,-1   (filled dots, labelled)
//   holes: 1,2             (open circles: a missing point)
//   label: y = x² − 2x     (curve label)    caption: what to notice
// Used on: graphs.
LW.widget("plot", function(el, lw, args){
  const kv = {}; (args.lines||[]).forEach(l => { const i = l.indexOf(":"); if(i>0) kv[l.slice(0,i).trim()] = l.slice(i+1).trim(); });
  const f = new Function("x", "return (" + kv.fn + ");");
  const rng = (s, d) => s ? s.split(/\s+/).map(Number) : d;
  const pts = s => s ? s.split(";").map(p => p.split(",").map(Number)) : [];
  const [x0,x1] = rng(kv.x, [-3,3]), [y0,y1] = rng(kv.y, [-3,3]);
  const W=440,H=290,P=26;
  const X = x => P + (x-x0)/(x1-x0)*(W-2*P), Y = y => H-P - (y-y0)/(y1-y0)*(H-2*P);
  const num = n => String(n).replace("-","−");
  let cv = "", pen = false;
  for(let i=0;i<=400;i++){ const x = x0 + (x1-x0)*i/400, y = f(x);
    if(!isFinite(y) || y < y0-1 || y > y1+1){ pen = false; continue; }
    cv += (pen?"L":"M")+X(x).toFixed(1)+" "+Y(y).toFixed(1); pen = true; }
  let ticks = "";
  for(let t=Math.ceil(x0);t<=Math.floor(x1);t++) if(t) ticks += `<path class="ax" d="M${X(t)} ${Y(0)-4} V${Y(0)+4}"/><text class="mt" x="${X(t)-5}" y="${Y(0)+18}">${num(t)}</text>`;
  for(let t=Math.ceil(y0);t<=Math.floor(y1);t++) if(t) ticks += `<path class="ax" d="M${X(0)-4} ${Y(t)} H${X(0)+4}"/><text class="mt" x="${X(0)-20}" y="${Y(t)+5}">${num(t)}</text>`;
  const P_ = pts(kv.points), lowest = Math.min(...P_.map(q => q[1]));
  const dots = P_.map(([a,b]) => `<circle class="pt" cx="${X(a)}" cy="${Y(b)}" r="5"/><text x="${X(a)+8}" y="${b === lowest ? Y(b)+22 : Y(b)-8}">(${num(a)}, ${num(b)})</text>`).join("");
  const holes = pts(kv.holes).map(([a,b]) => `<circle cx="${X(a)}" cy="${Y(b)}" r="6" style="fill:var(--raise);stroke:var(--warn);stroke-width:2.2"/>`).join("");
  el.innerHTML = `<figure class="fig">
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Graph of ${kv.label || "a function"}">
      <path class="ax" d="M${X(x0)} ${Y(0)} H${X(x1)}"/><path class="ax" d="M${X(0)} ${Y(y0)} V${Y(y1)}"/>${ticks}
      <path class="cv" d="${cv}"/>${dots}${holes}
      ${kv.label ? `<text class="mt" text-anchor="end" x="${W-8}" y="${H-P-8}">${kv.label}</text>` : ""}
    </svg>${args.caption ? `<figcaption>${args.caption}</figcaption>` : ""}</figure>`;
});
