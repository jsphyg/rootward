// Static figure: rise and run between (1, 2) and (3, 8). Used on: slope.
LW.widget("slope-triangle", function(el){
  el.innerHTML = `<figure class="fig">
    <svg viewBox="0 0 400 280" role="img" aria-label="A line through the points (1,2) and (3,8) with a right triangle showing rise 6 and run 2">
      <path class="ax" d="M40 250 H385"/><path class="ax" d="M40 250 V15"/>
      <path class="ln" d="M80 237.5 L304 27.5"/>
      <path class="sec" d="M120 200 H280 V50"/>
      <circle class="pt" cx="120" cy="200" r="5"/><circle class="pt" cx="280" cy="50" r="5"/>
      <text x="86" y="196">(1, 2)</text><text x="288" y="44">(3, 8)</text>
      <text x="172" y="220" class="mt">run = 3 − 1 = 2</text>
      <text x="288" y="130" class="mt">rise = 8 − 2 = 6</text>
      <text x="300" y="268" class="mt">x</text><text x="16" y="30" class="mt">y</text>
    </svg>
    <figcaption>Rise 6, run 2, so the slope is 6 ÷ 2 = 3. Every step right lifts the line 3 steps.</figcaption>
  </figure>`;
});
