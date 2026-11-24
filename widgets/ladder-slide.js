// Interactive figure: a 10 m ladder against a wall. The bottom slides out at 1 m/s; readout gives the top's height and how fast it falls (dy/dt = -x/y). Used on: related-rates.
LW.widget("ladder-slide", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Pull the bottom out at a steady 1 m/s</h3>
    <svg viewBox="0 0 380 300" role="img" aria-label="A ladder of length 10 leaning against a wall. Its foot is x metres from the wall and its top is y metres up."></svg>
    <label for="ld">Distance of the foot from the wall, <b>x</b> = <output></output> m</label>
    <input id="ld" type="range" min="1" max="9.8" step="0.2" value="6">
    <p class="read"></p>
    <p class="cap">The foot always moves at 1 m/s. The top does not. It falls slowly at first, then faster and faster as it nears the ground.</p></div>`;
  const svg = el.querySelector("svg"), out = el.querySelector("output"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const S = 25, OX = 40, OY = 275;              // 1 m = 25 px; corner of wall and floor at (40, 275)
  const X = x => OX + x*S, Y = y => OY - y*S;
  const num = (n,d) => (Math.round(n*Math.pow(10,d))/Math.pow(10,d)).toFixed(d);
  function draw(){
    const x = parseFloat(sl.value), y = Math.sqrt(100 - x*x), rate = x/y;
    svg.innerHTML = `
      <path class="ax" d="M${X(0)} ${Y(0)} H${X(13.5)}" style="stroke-width:2"/>
      <path class="ax" d="M${X(0)} ${Y(0)} V${Y(10.6)}" style="stroke-width:3"/>
      <path class="cv" d="M${X(x)} ${Y(0)} L${X(0)} ${Y(y)}" style="stroke-width:4"/>
      <circle class="ptw" cx="${X(x)}" cy="${Y(0)}" r="5"/><circle class="ptw" cx="${X(0)}" cy="${Y(y)}" r="5"/>
      <text class="mt" x="${X(x/2)-4}" y="${Y(0)+18}">x</text>
      <text class="mt" x="${X(0)+8}" y="${Y(y/2)}">y</text>
      <text class="mt" x="${X(x/2)+10}" y="${Y(y/2)-6}">10</text>`;
    out.textContent = num(x,1);
    read.innerHTML = `Top height ${lw.tex("y")} = <b>${num(y,2)} m</b>. The top is falling at ${lw.tex("\\tfrac{x}{y}")} = <b>${num(rate,2)} m/s</b>.`;
  }
  sl.addEventListener("input",draw); draw();
});
