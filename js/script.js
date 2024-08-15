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
        <p>BMI Anda adalah <h1>${bmi.toFixed(2)}</h1></p>
        <p>Kategori ${kategori}</p>
      `;
    });
  
    // Reset form
    const resetButton = form.querySelectorAll(".button")[1]; // Seleksi tombol reset dengan index kedua
    resetButton.addEventListener("click", function(event) {
      event.preventDefault(); 
      form.reset();
      outputDiv.innerHTML = ""; 
    });
  });
  