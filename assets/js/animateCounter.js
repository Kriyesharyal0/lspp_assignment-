function animateCounter(n, t, e) {
  var r = document.getElementById(t),
    a = 0,
    i = 1,
    o = 50 * (n / e);
  function c() {
    ((a += i), a >= n && (clearInterval(u), (a = n)), (r.textContent = a));
  }
  var u = setInterval(c, o);
}
var observer = new IntersectionObserver(
    function (n) {
      var t = 0;
      (n.forEach(function (n) {
        n.isIntersecting &&
          (observer.unobserve(n.target),
          "counter1" === n.target.id
            ? animateCounter(95, n.target.id)
            : "counter2" === n.target.id
              ? animateCounter(80, n.target.id)
              : "counter3" === n.target.id
                ? animateCounter(5, n.target.id)
                : "counter4" === n.target.id &&
                  animateCounter(2100, n.target.id),
          (t = Math.max(t, parseInt(n.target.textContent))),
          (n.target.style.opacity = 1));
      }),
        n.forEach(function (n) {
          n.isIntersecting &&
            (animateCounter(parseInt(n.target.textContent), n.target.id, t),
            (n.target.style.opacity = 1));
        }));
    },
    { threshold: 0.5 },
  ),
  counterElements = document.querySelectorAll(".stats__number");
counterElements.forEach(function (n) {
  observer.observe(n);
});
