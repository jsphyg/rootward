// Interactive figure: the point at angle t on a circle of radius 1 is (cos t, sin t). Used on: trig-basics.
LW.widget("unit-circle", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Walk around the unit circle</h3>
    <svg viewBox="0 0 440 320" role="img" aria-label="A circle of radius 1 centred at the origin. A point on it at angle theta, with its across distance cos theta and up distance sin theta marked."></svg>
    <label for="uc">Angle = <output></output></label>
    <input id="uc" type="range" min="0" max="360" step="15" value="30">
    <p class="read"></p>
    <p class="cap">Across distance (orange) is the cosine. Up distance (green) is the sine. Past 90° they can be negative.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const cx = 220, cy = 160, R = 120, X = x => cx + x*R, Y = y => cy - y*R;
  const r3 = n => { const v = Math.round(n*1000)/1000; return (Object.is(v,-0) ? 0 : v); };
  const rad = { 0:"0", 15:"\\tfrac{\\pi}{12}", 30:"\\tfrac{\\pi}{6}", 45:"\\tfrac{\\pi}{4}", 60:"\\tfrac{\\pi}{3}", 90:"\\tfrac{\\pi}{2}", 120:"\\tfrac{2\\pi}{3}", 135:"\\tfrac{3\\pi}{4}", 150:"\\tfrac{5\\pi}{6}", 180:"\\pi", 210:"\\tfrac{7\\pi}{6}", 225:"\\tfrac{5\\pi}{4}", 240:"\\tfrac{4\\pi}{3}", 270:"\\tfrac{3\\pi}{2}", 300:"\\tfrac{5\\pi}{3}", 315:"\\tfrac{7\\pi}{4}", 330:"\\tfrac{11\\pi}{6}", 360:"2\\pi" };
  function draw(){
    const d = +sl.value, t = d*Math.PI/180, c = Math.cos(t), s = Math.sin(t);
    const big = d > 180 ? 1 : 0, ar = 0.28;
    const arc = d === 0 ? "" : d === 360 ? `<circle cx="${cx}" cy="${cy}" r="${ar*R}" style="fill:none;stroke:var(--muted)"/>` :
      `<path d="M${X(ar)} ${cy} A${ar*R} ${ar*R} 0 ${big} 0 ${X(ar*Math.cos(t))} ${Y(ar*Math.sin(t))}" style="fill:none;stroke:var(--muted)"/>`;
    svg.innerHTML = `
      <path class="ax" d="M${cx-R-40} ${cy} H${cx+R+40}"/><path class="ax" d="M${cx} ${cy-R-30} V${cy+R+30}"/>
      <circle cx="${cx}" cy="${cy}" r="${R}" style="fill:none;stroke:var(--accent);stroke-width:2.2;opacity:.8"/>
      <text class="mt" x="${X(1)+4}" y="${cy+16}">1</text><text class="mt" x="${X(-1)-22}" y="${cy+16}">−1</text>
      <text class="mt" x="${cx+6}" y="${Y(1)-6}">1</text><text class="mt" x="${cx+6}" y="${Y(-1)+16}">−1</text>
      ${arc}
      <path class="ln" d="M${cx} ${cy} L${X(c)} ${Y(s)}" style="opacity:.7"/>
      <path class="sec" d="M${cx} ${cy} H${X(c)}" style="stroke-width:3.5"/>
      <path class="tan" d="M${X(c)} ${cy} V${Y(s)}" style="stroke-dasharray:none;stroke-width:3.5"/>
      <circle class="ptw" cx="${X(c)}" cy="${Y(s)}" r="6"/>
      <text x="${X(c) + (c >= 0 ? 10 : -120)}" y="${Y(s) + (s >= 0 ? -10 : 22)}">(${String(r3(c)).replace("-","−")}, ${String(r3(s)).replace("-","−")})</text>`;
    out.textContent = d + "°";
    read.innerHTML = lw.tex(`${d}^\\circ = ${rad[d]} \\text{ rad}, \\quad \\cos = ${r3(c)}, \\quad \\sin = ${r3(s)}`);
  }
  sl.addEventListener("input",draw); draw();
});
