// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const outputDiv = document.querySelector(".output");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Ambil nilai input dari form
      const beratBadan = parseFloat(form.querySelector("input[placeholder='Berad Badan']").value);
      const tinggiBadan = parseFloat(form.querySelector("input[placeholder='Tinggi Badan']").value) / 100; // Convert cm to meters
      
      if (isNaN(beratBadan) || isNaN(tinggiBadan)) {
        outputDiv.textContent = "Silakan masukkan berat badan dan tinggi badan yang valid.";
        return;
      }
  
      // Hitung BMI
      const bmi = beratBadan / (tinggiBadan * tinggiBadan);
      let kategori = "";
  
      // Tentukan kategori BMI
      if (bmi < 18.5) {
        kategori = "Berat badan kurang";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Berat badan normal";
      } else if (bmi >= 25 && bmi < 29.9) {
        kategori = "Berat badan berlebih";
      } else {
        kategori = "Obesitas";
      }
  
      // Tampilkan hasil
      outputDiv.innerHTML = `
        <p>BMI Anda adalah: <h1>${bmi.toFixed(2)}</h1></p>
        <p>Kategori: ${kategori}</p>
      `;


    //   
    
    // const hasil = document.createElement("h3");
    // const teksHasil = document.createTextNode("Hasil BMI");
    // hasil.appendChild(teksHasil);
    // hasil.style.margin = "2rem";
    // const outputSection = document.getElementsByTagName("section")[0];
    // const output = document.getElementById("output");
    // outputSection.insertBefore(hasil, output);

    // output.innerHTML = `<p>BMI Anda adalah: ${bmi.toFixed(2)}</p>`;

    // const kesimpulan = document.createElement("h3");
    // const kesimpulanIsi = document.createTextNode(`Kategori : ${kategori}`);
    // kesimpulan.appendChild(kesimpulanIsi);
    // kesimpulan.style.margin = "2rem";
    // outputSection.appendChild(kesimpulan);
    // const sblOutput = document.querySelectorAll("h3");
    // sblOutput[0].remove();
    // sblOutput[1].remove();

    });
  
    // Reset form
    // Reset form
    const resetButton = form.querySelectorAll(".button")[1]; // Seleksi tombol reset dengan index kedua
    resetButton.addEventListener("click", function(event) {
      event.preventDefault(); // Cegah reset default untuk melakukan custom reset
      form.reset();
      outputDiv.innerHTML = ""; // Kosongkan output ketika form direset
    });
  });
  