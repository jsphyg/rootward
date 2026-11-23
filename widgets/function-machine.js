// Static figure: a function drawn as a machine. Used on: functions.
LW.widget("function-machine", function(el){
  el.innerHTML = `<figure class="fig">
    <svg viewBox="0 0 520 110" role="img" aria-label="A function drawn as a machine: 3 goes in, the rule double then add 1 runs, 7 comes out">
      <text x="14" y="62" style="font-size:18px">in: 3</text>
      <path class="ax" d="M74 55 H125"/><path class="ax" d="M118 49 L126 55 L118 61"/>
      <rect class="box" x="126" y="22" width="260" height="66"/>
      <text x="256" y="61" text-anchor="middle" style="font-size:16px">double, then add 1</text>
      <path class="ax" d="M386 55 H430"/><path class="ax" d="M423 49 L431 55 L423 61"/>
      <text x="438" y="62" style="font-size:18px">out: 7</text>
    </svg>
    <figcaption>The function is the box. The same input always gives the same output.</figcaption>
  </figure>`;
});
