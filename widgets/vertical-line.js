// Static figure: the vertical line test on a circle (fails) and a parabola (passes). Used on: graphs.
LW.widget("vertical-line", function(el){
  let par = ""; for(let x=-1.6;x<=1.6001;x+=0.05){ const px = 310 + x*60, py = 200 - x*x*60; par += (par?"L":"M")+px.toFixed(1)+" "+py.toFixed(1); }
  el.innerHTML = `<figure class="fig">
    <svg viewBox="0 0 440 240" role="img" aria-label="Left: a circle crossed twice by one vertical line. Right: a U-shaped parabola crossed once by a vertical line.">
      <path class="ax" d="M20 120 H200"/><path class="ax" d="M110 20 V220"/>
      <circle cx="110" cy="120" r="70" style="fill:none;stroke:var(--accent);stroke-width:2.6"/>
      <path class="sec" d="M140 18 V222" style="stroke-dasharray:6 5"/>
      <circle class="ptw" cx="140" cy="56.7" r="6"/><circle class="ptw" cx="140" cy="183.3" r="6"/>
      <text x="40" y="234" class="mt">circle: hits twice</text>
      <path class="ax" d="M230 200 H400"/><path class="ax" d="M310 20 V220"/>
      <path class="cv" d="${par}"/>
      <path class="tan" d="M370 18 V222"/>
      <circle class="pt" cx="370" cy="140" r="6" style="fill:var(--good)"/>
      <text x="252" y="234" class="mt">parabola: hits once</text>
    </svg>
    <figcaption>One vertical line, two crossings: the circle gives one input two outputs, so it is not a function.</figcaption>
  </figure>`;
});
