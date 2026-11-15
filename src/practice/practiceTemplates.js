export const practiceTemplates = [
  {
    id: 'neon-card',
    name: 'Kartu Profil Neon',
    level: 'Mudah',
    goal: 'Latihan CSS: border bercahaya, gradient, dan tombol hover.',
    files: [
      {
        name: 'index.html',
        content: '<div class="panggung">\n  <article class="kartu">\n    <div class="inisial">Z</div>\n    <h1>ZunSensei</h1>\n    <p>Belajar coding tanpa ribet.</p>\n    <button class="tombol">Ikuti</button>\n  </article>\n</div>\n'
      },
      {
        name: 'style.css',
        content: 'body {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  background: #090d16;\n  color: #e2e8f0;\n}\n\n.panggung {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n}\n\n.kartu {\n  width: 260px;\n  padding: 24px;\n  border-radius: 18px;\n  text-align: center;\n  background: #111827;\n  border: 1px solid rgba(56, 189, 248, 0.5);\n  box-shadow: 0 0 40px -10px rgba(56, 189, 248, 0.6);\n  animation: muncul 0.6s ease both;\n}\n\n.inisial {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 12px;\n  display: grid;\n  place-items: center;\n  border-radius: 16px;\n  font-weight: 800;\n  font-size: 22px;\n  color: #04121f;\n  background: linear-gradient(135deg, #38bdf8, #818cf8);\n}\n\nh1 {\n  margin: 0 0 6px;\n  font-size: 18px;\n}\n\np {\n  margin: 0 0 16px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n\n.tombol {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  color: #04121f;\n  background: linear-gradient(135deg, #34d399, #38bdf8);\n  transition: transform 0.2s ease;\n}\n\n.tombol:hover {\n  transform: translateY(-2px) scale(1.02);\n}\n\n@keyframes muncul {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n'
      }
    ]
  },
  {
    id: 'counter',
    name: 'Counter Interaktif',
    level: 'Sedang',
    goal: 'Latihan JavaScript: event listener, state angka, dan update DOM.',
    files: [
      {
        name: 'index.html',
        content: '<div class="kotak">\n  <h1>Counter</h1>\n  <p id="nilai">0</p>\n  <div class="baris">\n    <button id="kurang">-</button>\n    <button id="tambah">+</button>\n  </div>\n  <p id="jejak" class="jejak">Belum ada aksi.</p>\n</div>\n'
      },
      {
        name: 'style.css',
        content: 'body {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  background: #090d16;\n  color: #e2e8f0;\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n}\n\n.kotak {\n  padding: 28px;\n  border-radius: 18px;\n  background: #111827;\n  border: 1px solid #1e293b;\n  text-align: center;\n  width: 240px;\n}\n\nh1 {\n  margin: 0 0 8px;\n  font-size: 15px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #818cf8;\n}\n\n#nilai {\n  margin: 0 0 16px;\n  font-size: 44px;\n  font-weight: 800;\n  color: #38bdf8;\n}\n\n.baris {\n  display: flex;\n  gap: 8px;\n}\n\nbutton {\n  flex: 1;\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid #1e293b;\n  background: #0d1424;\n  color: #e2e8f0;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.15s ease, background 0.2s ease;\n}\n\nbutton:hover {\n  background: #16203a;\n  transform: translateY(-2px);\n}\n\n.jejak {\n  margin: 14px 0 0;\n  font-size: 11px;\n  color: #64748b;\n}\n'
      },
      {
        name: 'script.js',
        content: 'const nilai = document.querySelector("#nilai")\nconst jejak = document.querySelector("#jejak")\nconst tambah = document.querySelector("#tambah")\nconst kurang = document.querySelector("#kurang")\n\nlet angka = 0\n\nfunction render() {\n  nilai.textContent = angka\n  jejak.textContent = "Nilai terakhir: " + angka\n}\n\ntambah.addEventListener("click", () => {\n  angka += 1\n  render()\n  console.log("tambah ->", angka)\n})\n\nkurang.addEventListener("click", () => {\n  angka -= 1\n  render()\n  console.log("kurang ->", angka)\n})\n\nrender()\n'
      }
    ]
  },
  {
    id: 'debug',
    name: 'Debug Kode Rusak',
    level: 'Menantang',
    goal: 'Ada tag tidak tertutup dan variabel salah nama. Perbaiki sampai status hijau.',
    files: [
      {
        name: 'index.html',
        content: '<div class="bungkus">\n  <h1>Skor Pemain</h1>\n  <p id="skor">0</p>\n  <button id="tambah">Tambah Skor</button>\n</div>\n'
      },
      {
        name: 'style.css',
        content: 'body {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  background: #090d16;\n  color: #e2e8f0;\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n}\n\n.bungkus {\n  padding: 24px;\n  border-radius: 16px;\n  border: 1px solid #fb7185;\n  background: #111827;\n  text-align: center;\n  width: 240px;\n}\n\nh1 {\n  font-size: 15px;\n  margin: 0 0 10px;\n  color: #fb7185;\n}\n\n#skor {\n  font-size: 40px;\n  font-weight: 800;\n  margin: 0 0 12px;\n  color: #34d399;\n}\n\nbutton {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n  background: #34d399;\n  color: #04121f;\n}\n'
      },
      {
        name: 'script.js',
        content: 'const skor = document.querySelector("#skor")\nconst tombol = document.querySelector("#tambah")\n\nlet total = 0\n\ntombol.addEventListener("click", () => {\n  total = total + 1\n  skorEl.textContent = total\n  console.log("skor sekarang", total)\n})\n'
      }
    ]
  },
  {
    id: 'kosong',
    name: 'Starter Kosong',
    level: 'Bebas',
    goal: 'Mulai dari nol. Tulis apa pun lalu jalankan.',
    files: [
      { name: 'index.html', content: '<div class="kotak">\n  <h1>Halo</h1>\n</div>\n' },
      {
        name: 'style.css',
        content: 'body {\n  margin: 0;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: system-ui, sans-serif;\n  background: #090d16;\n  color: #e2e8f0;\n}\n'
      },
      { name: 'script.js', content: 'console.log("siap")\n' }
    ]
  }
]