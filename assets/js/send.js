// Contact Form
// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbwd49aoY4Lh5EnmRybFRvn5mbfi5pV-DyrppyVtNbs_6LkBNlAl0rNcmrfGHv2F9eea/exec";
// const form = $("form[name='submit-to-google-sheet']");
// const btn = $(".btn-kirim");
// const loading = $(".btn-loading");

// form.on("submit", function (e) {
//   e.preventDefault();
//   // ketika tombol kirim di klik
//   // tampilkan tombol loading hilangkan tombol kirim
//   loading.toggleClass("hidden");
//   btn.toggleClass("hidden");

//   $.ajax({
//     url: scriptURL,
//     method: "POST",
//     data: new FormData(this),
//     processData: false,
//     contentType: false,
//     success: function (response) {
//       // tampilkan tombol kirim hilangkan tombol loading
//       loading.toggleClass("hidden");
//       btn.toggleClass("hidden");

//       // Menampilkan notifikasi
//       Swal.fire({
//         icon: "success",
//         title: "Pesan sudah terkirim!",
//         toast: true,
//         position: "top-end",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//       });

//       // Reset form
//       form[0].reset();
//     },
//     error: function (error) {
//       console.error("Error!", error.message);
//     },
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const chatId = "6873430601"; // Ganti dengan ID grup Telegram yang ingin Anda gunakan
  const botToken = "7526632607:AAFYaoafwAxjEYGPd7Fste8rDix4gHxkhFo"; // Ganti dengan token bot Telegram Anda

  // const botToken = "AAFYaoafwAxjEYGPd7Fste8rDix4gHxkhFo"; // Ganti dengan token bot kamu
  // const chatId = "7526632607"; // Ganti dengan chat_id kamu
  const form = document.getElementById("telegramForm");
  const btn = document.querySelector(".btn-kirim");
  const loading = document.querySelector(".btn-loading");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Tampilkan loading
    loading.classList.remove("hidden");
    btn.classList.add("hidden");

    // Ambil data form
    const formData = new FormData(form);
    const message =
      "Nama : " +
      formData.get("name") +
      "\n" +
      "Email : " +
      formData.get("email") +
      "\n" +
      "Subject : " +
      formData.get("subject") +
      "\n\n" +
      "Pesan : \n" +
      formData.get("message");
    // const message = `Nama: ${formData.get("name")}
    //   Email: ${formData.get("email")}
    //   Subject: ${formData.get("subject")}
    //   Pesan: ${formData.get("message")}`;

    // Kirim pesan ke Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Tampilkan tombol kirim dan sembunyikan loading
        loading.classList.add("hidden");
        btn.classList.remove("hidden");

        // Tampilkan notifikasi sukses menggunakan Swal
        Swal.fire({
          icon: "success",
          title: "Pesan sudah terkirim!",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        // Reset form
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  });
});
