// Static figure: a function drawn as a machine. Used on: functions.
LW.widget("function-machine", function(el){
  el.innerHTML = `<figure class="fig">
    <svg viewBox="0 0 420 110" role="img" aria-label="A function drawn as a machine: x goes in, f of x comes out">
      <text x="14" y="62" style="font-size:18px">x = 3</text>
      <path class="ax" d="M70 55 H135"/><path class="ax" d="M128 49 L136 55 L128 61"/>
      <rect class="box" x="136" y="22" width="150" height="66"/>
      <text x="161" y="62" style="font-size:18px">square it</text>
      <path class="ax" d="M286 55 H350"/><path class="ax" d="M343 49 L351 55 L343 61"/>
      <text x="358" y="62" style="font-size:18px">9</text>
    </svg>
    <figcaption>The function is the middle box. The same input always gives the same output.</figcaption>
  </figure>`;
});
