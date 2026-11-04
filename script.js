// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();
    const email = document.getElementById("visitorEmail").value.trim();
    const message = document.getElementById("visitorMessage").value.trim();

    if (!name || !email || !message) {
      alert("Please complete all fields.");
      return;
    }

    const whatsappMessage = `Hello, my name is ${name}.\nEmail: ${email}\n\n${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const adenNumber = "6287817513538";
    const husainNumber = "628551042456";

    const choice = prompt(
      "Pilih tujuan WhatsApp:\n1. Aden\n2. Husein",
      "1"
    );

    const selectedNumber = choice === "2" ? husainNumber : adenNumber;

    const whatsappURL = `https://wa.me/${selectedNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  });
}