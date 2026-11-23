// Interactive figure: f(x) = 2x + 6 followed by its inverse, which brings x back. Used on: inverse-functions.
// Uses the .machine / .mbox styles from function-chain.css.
LW.widget("undo-machine", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Do it, then undo it</h3>
    <label for="um">Input <b>x</b> = <output></output></label>
    <input id="um" type="range" min="-3" max="5" step="0.5" value="2">
    <div class="machine" aria-live="polite"></div>
    <p class="read"></p>
    <p class="cap">The inverse runs the same steps backwards, in reverse order. Whatever goes in comes back out.</p></div>`;
  const sl = el.querySelector("input"), out = el.querySelector("output"), mach = el.querySelector(".machine"), read = el.querySelector(".read");
  const num = n => String(Math.round(n*1000)/1000);
  const fmt = n => num(n).replace("-","−");
  function draw(){
    const x = parseFloat(sl.value), y = 2*x + 6, back = (y - 6)/2;
    out.textContent = fmt(x);
    mach.innerHTML = `<div class="mbox"><small>input</small>x = ${fmt(x)}</div><span class="arrow">→</span>
      <div class="mbox fx"><small>f</small>double, add 6</div><span class="arrow">→</span>
      <div class="mbox"><small>output</small>${fmt(y)}</div><span class="arrow">→</span>
      <div class="mbox fx"><small>f⁻¹</small>take away 6, halve</div><span class="arrow">→</span>
      <div class="mbox"><small>back to</small>${fmt(back)}</div>`;
    read.innerHTML = lw.tex(`f(${num(x)}) = ${num(y)} \\quad\\text{and}\\quad f^{-1}(${num(y)}) = ${num(back)}`);
  }
  sl.addEventListener("input",draw); draw();
});
