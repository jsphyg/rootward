// Interactive figure: the circle x^2 + y^2 = 25 with a point moving around it and its tangent line. Readout gives the slope -x/y. Used on: implicit-differentiation.
LW.widget("circle-tangent", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>The slope of a circle, point by point</h3>
    <svg viewBox="0 0 360 360" role="img" aria-label="The circle x squared plus y squared equals 25, with a point on it and the tangent line through that point."></svg>
    <label for="ct">Move the point around the circle</label>
    <input id="ct" type="range" min="0" max="359" step="1" value="53">
    <p class="read"></p>
    <p class="cap">The tangent line always meets the radius at a right angle. Its slope is −x ÷ y, read straight off the point.</p></div>`;
  const svg = el.querySelector("svg"), read = el.querySelector(".read"), sl = el.querySelector("input");
  const C = 180, S = 26;                       // centre pixel, pixels per unit
  const X = x => C + x*S, Y = y => C - y*S;
  const num = n => { const r = Math.round(n*100)/100; return String(r === 0 ? 0 : r).replace("-","−"); };
  function draw(){
    // 53 degrees is close to the point (3, 4); snap exact points so the readout matches the text
    const deg = parseFloat(sl.value), t = deg*Math.PI/180;
    let x = 5*Math.cos(t), y = 5*Math.sin(t);
    if (deg === 53) { x = 3; y = 4; }
    let line, word;
    if (Math.abs(y) < 0.09) { line = `M${X(x)} ${Y(-6.5)} V${Y(6.5)}`; word = "The tangent is <b>vertical</b> here, so it has no slope: −x ÷ y would divide by 0."; }
    else {
      const m = -x/y, dx = 3.2/Math.sqrt(1+m*m);
      line = `M${X(x-dx)} ${Y(y-m*dx)} L${X(x+dx)} ${Y(y+m*dx)}`;
      word = `Point (${num(x)}, ${num(y)}). Slope ` + lw.tex(`-\\tfrac{x}{y} \\approx ${num(m).replace("−","-")}`) + `.`;
    }
    svg.innerHTML = `
      <path class="ax" d="M${X(-6.5)} ${Y(0)} H${X(6.5)}"/><path class="ax" d="M${X(0)} ${Y(-6.5)} V${Y(6.5)}"/>
      <circle cx="${C}" cy="${C}" r="${5*S}" class="cv" style="fill:none"/>
      <path class="ax" d="M${X(0)} ${Y(0)} L${X(x)} ${Y(y)}" style="stroke-dasharray:4 4"/>
      <path class="sec" d="${line}"/>
      <circle class="ptw" cx="${X(x)}" cy="${Y(y)}" r="5.5"/>`;
    read.innerHTML = word;
  }
  sl.addEventListener("input",draw); draw();
});
