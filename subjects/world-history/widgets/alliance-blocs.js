// Static figure: the two camps of 1914. Solid lines are alliances, dashed lines are ententes. Used on: alliance-system.
LW.widget("alliance-blocs", function(el){
  const box = (x, y, name, sub, cls) => `<rect class="box ${cls||""}" x="${x}" y="${y}" width="150" height="46"/>
    <text x="${x+75}" y="${y+21}" text-anchor="middle" style="font-size:14px">${name}</text>
    ${sub ? `<text class="mt" x="${x+75}" y="${y+37}" text-anchor="middle" style="font-size:10.5px">${sub}</text>` : ""}`;
  el.innerHTML = `<figure class="fig">
    <svg viewBox="0 0 480 300" role="img" aria-label="Two camps. Triple Alliance: Germany and Austria-Hungary allied, Italy linked by a dotted line. Triple Entente: France and Russia allied, Britain linked to each by dashed lines.">
      <text class="mt" x="85" y="22" text-anchor="middle">TRIPLE ALLIANCE</text>
      <text class="mt" x="375" y="22" text-anchor="middle">TRIPLE ENTENTE</text>
      <path class="ax" d="M230 10 V290" style="stroke-dasharray:2 6"/>
      <path class="ln" d="M85 86 V136"/>
      <path class="ln" d="M85 182 V232" style="stroke-dasharray:2 4;opacity:.6"/>
      <path class="ln" d="M375 86 V136"/>
      <path class="sec" d="M375 182 V232" style="stroke-dasharray:6 5"/>
      <path class="sec" d="M450 63 C470 120 470 200 450 255" style="stroke-dasharray:6 5"/>
      ${box(10, 40, "Germany", "")}
      ${box(10, 136, "Austria-Hungary", "")}
      ${box(10, 232, "Italy", "stayed out in 1914")}
      ${box(300, 40, "France", "")}
      ${box(300, 136, "Russia", "")}
      ${box(300, 232, "Britain", "entente only")}
    </svg>
    <figcaption>Solid lines are alliances, promises to fight. Orange dashed lines are ententes, which promised nothing. Italy's link was real on paper only.</figcaption>
  </figure>`;
});
