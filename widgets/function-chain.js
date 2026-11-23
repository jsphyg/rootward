// Interactive figure: x -> inner g(x) = x + 3 -> outer f(u) = u^2. Used on: composite-functions.
LW.widget("function-chain", function(el, lw){
  el.innerHTML = `<div class="wcard"><h3>Function chain machine</h3>
    <label for="ms">Input <b>x</b> = <output></output></label>
    <input id="ms" type="range" min="-5" max="3" step="0.5" value="2">
    <div class="machine" aria-live="polite"></div>
    <p class="read"></p>
    <p class="cap">The middle value u is the inner output and the outer input.</p></div>`;
  const sl = el.querySelector("input"), out = el.querySelector("output"), mach = el.querySelector(".machine"), read = el.querySelector(".read");
  const num = n => String(Math.round(n*1000)/1000);
  const fmt = n => num(n).replace("-","−");
  function draw(){
    const x = parseFloat(sl.value), u = x+3, y = u*u;
    out.textContent = fmt(x);
    mach.innerHTML = `<div class="mbox"><small>input</small>x = ${fmt(x)}</div><span class="arrow">→</span>
      <div class="mbox fx"><small>inner g</small>x + 3</div><span class="arrow">→</span>
      <div class="mbox"><small>middle value</small>u = ${fmt(u)}</div><span class="arrow">→</span>
      <div class="mbox fx"><small>outer f</small>u²</div><span class="arrow">→</span>
      <div class="mbox"><small>output</small>${fmt(y)}</div>`;
    read.innerHTML = lw.tex(`f(g(${num(x)})) = f(${num(u)}) = ${num(y)}`);
  }
  sl.addEventListener("input",draw); draw();
});
