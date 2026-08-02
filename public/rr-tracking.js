/* Renegade Reformer: outbound CTA click tracking. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  function isTrackedHref(href) {
    if (!href) return false;
    if (href.indexOf("momence.com") !== -1 || href.indexOf("momence.co") !== -1) return true;
    if (href.indexOf("wa.me/") !== -1 || href.indexOf("api.whatsapp.com") !== -1) return true;
    var path = href;
    try {
      path = new URL(href, window.location.href).pathname;
    } catch (e) {}
    return path === "/timetable" || path === "/pricing" || path.indexOf("/timetable") === 0 || path.indexOf("/pricing") === 0;
  }

  document.addEventListener(
    "click",
    function (event) {
      if (!window.dataLayer) return;
      var target = event.target;
      var link = target && target.closest ? target.closest("a[href]") : null;
      if (!link) return;
      var href = link.getAttribute("href");
      if (!isTrackedHref(href)) return;
      window.dataLayer.push({
        event: "cta_click",
        cta_destination: href,
        cta_label: (link.textContent || "").trim(),
        page_path: window.location.pathname,
      });
    },
    true
  );
})();
