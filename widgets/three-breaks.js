// Static figure: three ways a graph can break: a hole, a jump, a blow-up. Used on: continuity.
LW.widget("three-breaks", function(el){
  const hole = `<path class="cv" d="M15 120 L62 73"/><path class="cv" d="M70 65 L125 10"/><circle cx="66" cy="69" r="5" style="fill:var(--raise);stroke:var(--warn);stroke-width:2"/>`;
  const jump = `<path class="cv" d="M160 115 L210 85"/><circle cx="212" cy="84" r="5" style="fill:var(--raise);stroke:var(--warn);stroke-width:2"/><path class="cv" d="M212 45 L265 20"/><circle class="pt" cx="212" cy="45" r="5"/>`;
  // blow-up: y = 1/(x - a) drawn as two branches around x = 360
  let bl = "", br = ""; for(let i=0;i<=50;i++){ const d = 0.06 + i*0.05; const y = 6/d; if(70+y < 135) bl += (bl?"L":"M")+(360 - d*22).toFixed(1)+" "+(70 + y).toFixed(1); if(70-y > 5) br += (br?"L":"M")+(360 + d*22).toFixed(1)+" "+(70 - y).toFixed(1); }
  el.innerHTML = `<figure class="fig">
    <svg viewBox="0 0 440 170" role="img" aria-label="Three graphs: one with a single missing point, one that jumps from one height to another, and one that shoots off to infinity on both sides of a vertical line.">
      <path class="ax" d="M10 130 H130"/>${hole}<text class="mt" x="45" y="160">hole</text>
      <path class="ax" d="M155 130 H275"/>${jump}<text class="mt" x="198" y="160">jump</text>
      <path class="ax" d="M300 70 H420"/><path class="ax" d="M360 5 V135" style="stroke-dasharray:4 4"/>
      <path class="cv" d="${bl}"/><path class="cv" d="${br}"/><text class="mt" x="335" y="160">blow-up</text>
    </svg>
    <figcaption>Each graph forces you to lift your pen at one point, so none of them is continuous there.</figcaption>
  </figure>`;
});
