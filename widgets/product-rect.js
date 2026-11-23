// Static figure: a rectangle with sides f and g, grown by small amounts. Used on: product-rule.
LW.widget("product-rect", function(el){
  el.innerHTML = `<figure class="fig">
    <svg viewBox="0 0 440 280" role="img" aria-label="A rectangle with sides f and g. It grows by a thin strip on the right of width change-in-f, a thin strip on top of height change-in-g, and a tiny corner square.">
      <rect x="60" y="80" width="240" height="160" style="fill:var(--accent);opacity:.18;stroke:var(--accent);stroke-width:2"/>
      <rect x="300" y="80" width="50" height="160" style="fill:var(--warn);opacity:.35;stroke:var(--warn);stroke-width:1.5"/>
      <rect x="60" y="40" width="240" height="40" style="fill:var(--good);opacity:.35;stroke:var(--good);stroke-width:1.5"/>
      <rect x="300" y="40" width="50" height="40" style="fill:var(--muted);opacity:.35;stroke:var(--muted);stroke-width:1.5"/>
      <text x="150" y="166">old area: f · g</text>
      <text x="306" y="166" style="font-size:13px">g · Δf</text>
      <text x="150" y="65" style="font-size:13px">f · Δg</text>
      <text x="306" y="65" style="font-size:11px">Δf·Δg</text>
      <text class="mt" x="170" y="262">f</text><text class="mt" x="318" y="262">Δf</text>
      <text class="mt" x="36" y="166">g</text><text class="mt" x="30" y="65">Δg</text>
    </svg>
    <figcaption>The new area is the old one plus two strips and a tiny corner. As the nudge shrinks, the corner shrinks fastest and drops out.</figcaption>
  </figure>`;
});
