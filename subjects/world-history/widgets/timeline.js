// Data-driven figure: a vertical timeline. Each data line is "date | event".
// Used on several pages; the events are written in the page's Markdown, not here.
LW.widget("timeline", function(el, lw, args){
  const rows = (args.lines || []).map(l => { const i = l.indexOf("|"); return i < 0 ? ["", l] : [l.slice(0, i).trim(), l.slice(i + 1).trim()]; });
  el.innerHTML = `<figure class="fig tl"><ol>${rows.map(r => `<li><span class="when">${r[0]}</span><span class="what">${r[1]}</span></li>`).join("")}</ol>
    ${args.caption ? `<figcaption>${args.caption}</figcaption>` : ""}</figure>`;
});
