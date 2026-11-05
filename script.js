/* Highlights the current section in the menu. The page works without this script. */
(function () {
  "use strict";
  if (!("IntersectionObserver" in window)) return;
  var links = document.querySelectorAll('nav a[href^="#"]');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && map[e.target.id]) {
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        map[e.target.id].setAttribute("aria-current", "true");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();
