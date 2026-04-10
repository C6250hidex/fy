// Sync Text Inputs
function sync() {
  document.getElementById("outName").innerText =
    document.getElementById("inName").value;

  document.getElementById("outNick").innerText =
    document.getElementById("inNick").value;

  document.getElementById("outSkill").innerText =
    document.getElementById("inSkill").value;

  document.getElementById("outHardest").innerText =
    document.getElementById("inHardest").value;

  document.getElementById("outQuote").innerText =
    `"${document.getElementById("inQuote").value}"`;

  document.getElementById("outNext").innerText =
    document.getElementById("inNext").value;

  document.getElementById("outDept").innerText =
    document.getElementById("inDept").value;

  document.getElementById("outLevel").innerText =
    document.getElementById("inLevel").value;

  document.getElementById("outState").innerText =
    document.getElementById("inState").value;

  document.getElementById("outHobbies").innerText =
    document.getElementById("inHobbies").value;

  document.getElementById("outBusiness").innerText =
    document.getElementById("inBusiness").value;

  document.getElementById("outWorst").innerText =
    document.getElementById("inWorst").value;
}

// Handle Image Upload
function updateImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("outImage").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Generate and Download Image
function download() {
  const card = document.getElementById("poster-canvas");

  html2canvas(card, { scale: 3, useCORS: true }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "Finalist-Card-2026.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
