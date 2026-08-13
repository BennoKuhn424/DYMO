(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

function handleContactSubmit(e) {
  e.preventDefault();
  var form = e.target;
  var name = form.querySelector('[name="name"]').value.trim();
  var email = form.querySelector('[name="email"]').value.trim();
  var phone = form.querySelector('[name="phone"]').value.trim();
  var topic = form.querySelector('[name="topic"]').value;
  var message = form.querySelector('[name="message"]').value.trim();
  var body =
    "Name: " +
    name +
    "\nEmail: " +
    email +
    "\nPhone: " +
    phone +
    "\nTopic: " +
    topic +
    "\n\nMessage:\n" +
    message;
  var mailto =
    "mailto:Dymolift.ed@gmail.com?subject=" +
    encodeURIComponent("Website enquiry — DYMO") +
    "&body=" +
    encodeURIComponent(body);
  window.location.href = mailto;
}
