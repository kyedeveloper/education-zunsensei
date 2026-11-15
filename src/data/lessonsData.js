// Seluruh materi nyata, tanpa Lorem Ipsum.

export const codingCategories = [
  { id: 'frontend', label: 'Web Frontend', hint: 'Yang dilihat pengguna di layar', accent: 'cyan' },
  { id: 'backend', label: 'Backend & Scripting', hint: 'Otak yang bekerja di server', accent: 'violet' },
  { id: 'mobile', label: 'Mobile Development', hint: 'Aplikasi Android & iOS', accent: 'emerald' },
  { id: 'game', label: 'Game Development', hint: 'Mekanika game & scripting engine', accent: 'rose' },
  { id: 'systems', label: 'Systems & Data', hint: 'Dekat ke mesin dan data', accent: 'cyan' }
]

export const languages = [
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    tagline: 'Kerangka setiap halaman web',
    description:
      'HTML menyusun struktur dokumen: judul, paragraf, gambar, tombol, dan form. Semua yang kamu lihat di browser berdiri di atas struktur ini.',
    analogy:
      'HTML itu kerangka rumah. Ia menentukan di mana pintu, jendela, dan kamar. Tanpa kerangka, cat dan dekorasi tidak punya tempat menempel.',
    structure: {
      title: 'Struktur dokumen dasar',
      code: '<!DOCTYPE html>\n<html lang="id">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Halaman Pertama</title>\n  </head>\n  <body>\n    <h1>Halo, Dunia</h1>\n  </body>\n</html>'
    },
    variables: {
      title: 'Menyimpan nilai lewat atribut',
      note: 'HTML tidak punya variabel. Data disimpan di atribut seperti id, class, dan data-*.',
      code: '<div id="kartu-utama" class="kartu" data-peran="profil">\n  <p>Nama: <span data-field="nama">Zun</span></p>\n</div>'
    },
    functions: {
      title: 'Elemen semantik sebagai peran',
      note: 'Elemen semantik memberi tahu browser dan mesin pencari fungsi tiap bagian halaman.',
      code: '<header>Navigasi atas</header>\n<main>Isi utama</main>\n<aside>Sidebar</aside>\n<footer>Catatan bawah</footer>'
    },
    loops: {
      title: 'Daftar berulang',
      note: 'Pengulangan di HTML dilakukan dengan menulis elemen list, atau digenerate lewat JavaScript.',
      code: '<ul>\n  <li>Item satu</li>\n  <li>Item dua</li>\n  <li>Item tiga</li>\n</ul>'
    },
    example: {
      title: 'Kartu profil mini',
      note: 'Simpan sebagai index.html lalu buka di browser.',
      code: '<!DOCTYPE html>\n<html lang="id">\n  <head><title>Kartu</title></head>\n  <body>\n    <article style="border:1px solid #1E293B;padding:16px;border-radius:12px">\n      <h2>ZunSensei</h2>\n      <p>Belajar coding tanpa ribet.</p>\n      <button>Ikuti</button>\n    </article>\n  </body>\n</html>'
    }
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    tagline: 'Tampilan, tata letak, dan warna',
    description:
      'CSS mengatur warna, jarak, ukuran, dan posisi. Ia yang membuat halaman terasa rapi dan nyaman dibaca.',
    analogy:
      'CSS itu cat, wallpaper, dan penataan furnitur. Struktur rumahnya sama, tapi hasil akhirnya bisa beda total.',
    structure: {
      title: 'Aturan dasar',
      code: '.kartu {\n  padding: 16px;\n  border-radius: 12px;\n  background: #111827;\n  color: #e2e8f0;\n}'
    },
    variables: {
      title: 'Custom property',
      note: 'Variabel CSS memudahkan penggantian tema secara global.',
      code: ':root {\n  --aksen: #38BDF8;\n}\n\n.tombol {\n  background: var(--aksen);\n}'
    },
    functions: {
      title: 'Fungsi bawaan',
      note: 'clamp, calc, dan min/max membantu membuat ukuran responsif.',
      code: '.judul {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}'
    },
    loops: {
      title: 'Pola berulang',
      note: 'Selektor struktural menerapkan aturan ke banyak elemen sekaligus.',
      code: '.daftar li:nth-child(odd) {\n  background: #0d1424;\n}\n\n.daftar li:nth-child(even) {\n  background: #111827;\n}'
    },
    example: {
      title: 'Tombol gradient dengan hover',
      code: '.tombol {\n  padding: 12px 20px;\n  border-radius: 10px;\n  border: none;\n  color: #04121f;\n  font-weight: 700;\n  background: linear-gradient(135deg, #38BDF8, #818CF8);\n  transition: transform .2s ease;\n}\n\n.tombol:hover {\n  transform: translateY(-2px);\n}'
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    tagline: 'Membuat halaman jadi hidup',
    description:
      'JavaScript menangani interaksi: klik, animasi, validasi form, sampai mengambil data dari server.',
    analogy:
      'JavaScript itu instalasi listrik dan saklar. Rumah yang tadinya diam jadi bisa menyala, bergerak, dan merespons.',
    structure: {
      title: 'Modul dan eksekusi',
      code: '<script type="module">\n  const tombol = document.querySelector("#simpan")\n  tombol.addEventListener("click", () => {\n    console.log("disimpan")\n  })\n</script>'
    },
    variables: {
      title: 'let dan const',
      note: 'Pakai const sebagai default, let hanya saat nilai perlu berubah.',
      code: 'const nama = "Zun"\nlet hitungan = 0\nhitungan += 1\nconsole.log(nama, hitungan)'
    },
    functions: {
      title: 'Fungsi panah',
      code: 'const salam = (nama) => {\n  return "Halo, " + nama\n}\n\nconsole.log(salam("Zun"))'
    },
    loops: {
      title: 'Perulangan for',
      code: 'for (let i = 1; i <= 3; i += 1) {\n  console.log("Putaran ke-" + i)\n}'
    },
    example: {
      title: 'Counter sederhana',
      code: 'const label = document.querySelector("#nilai")\nconst tambah = document.querySelector("#tambah")\nlet angka = 0\n\ntambah.addEventListener("click", () => {\n  angka += 1\n  label.textContent = angka\n})'
    }
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    tagline: 'JavaScript dengan pengaman tipe',
    description:
      'TypeScript menambahkan tipe statis. Kesalahan kecil seperti salah nama properti tertangkap sebelum kode dijalankan.',
    analogy:
      'TypeScript itu helm proyek. Pekerjaannya sama, tapi ada pengaman sebelum kamu menabrak masalah.',
    structure: {
      title: 'Tipe pada parameter',
      code: 'type Pengguna = {\n  nama: string\n  umur: number\n}\n\nfunction sapa(pengguna: Pengguna): string {\n  return "Halo " + pengguna.nama\n}'
    },
    variables: {
      title: 'Anotasi tipe',
      code: 'const judul: string = "DevLab"\nconst jumlah: number = 3\nconst aktif: boolean = true'
    },
    functions: {
      title: 'Generic sederhana',
      code: 'function pertama<T>(daftar: T[]): T | undefined {\n  return daftar[0]\n}\n\nconsole.log(pertama<number>([10, 20]))'
    },
    loops: {
      title: 'Iterasi bertipe',
      code: 'const angka: number[] = [1, 2, 3]\nfor (const n of angka) {\n  console.log(n * 2)\n}'
    },
    example: {
      title: 'Interface + validasi',
      code: 'interface Produk {\n  nama: string\n  harga: number\n}\n\nfunction totalSemua(produk: Produk[]): number {\n  return produk.reduce((total, p) => total + p.harga, 0)\n}\n\nconsole.log(totalSemua([{ nama: "Kopi", harga: 15000 }]))'
    }
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    tagline: 'JavaScript di sisi server',
    description:
      'Node.js menjalankan JavaScript di luar browser: server HTTP, CLI, worker, dan API. Cocok untuk layanan jaringan.',
    analogy:
      'Node.js itu dapur restoran. Pelanggan memesan dari depan, dapur memproses pesanan di belakang.',
    structure: {
      title: 'Server HTTP minimal',
      code: 'import http from "node:http"\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "application/json" })\n  res.end(JSON.stringify({ status: true }))\n})\n\nserver.listen(3000)'
    },
    variables: {
      title: 'Module environment',
      code: 'const port = Number(process.env.PORT) || 3000\nconst mode = process.env.NODE_ENV || "development"\nconsole.log(port, mode)'
    },
    functions: {
      title: 'Fungsi async',
      code: 'async function ambilData(url) {\n  const res = await fetch(url)\n  return res.json()\n}'
    },
    loops: {
      title: 'Loop dengan jeda',
      code: 'for (let i = 0; i < 3; i += 1) {\n  await new Promise((r) => setTimeout(r, 300))\n  console.log("tick", i)\n}'
    },
    example: {
      title: 'Baca file JSON',
      code: 'import fs from "node:fs/promises"\n\nconst baca = async () => {\n  const isi = await fs.readFile("./data.json", "utf8")\n  console.log(JSON.parse(isi))\n}\n\nbaca().catch(console.error)'
    }
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    tagline: 'Sintaks bersih untuk banyak hal',
    description:
      'Python dipakai untuk API, automasi, data, dan machine learning. Sintaksnya ringkas sehingga mudah dibaca.',
    analogy:
      'Python itu resep masakan yang ditulis jelas langkah demi langkah. Siapa pun bisa mengikuti urutannya.',
    structure: {
      title: 'Blok dengan indentasi',
      code: 'def sapa(nama):\n    if not nama:\n        return "Halo, tamu"\n    return "Halo, " + nama\n\nprint(sapa("Zun"))'
    },
    variables: {
      title: 'Tipe dinamis',
      code: 'nama = "Zun"\numur = 20\naktif = True\nprint(nama, umur, aktif)'
    },
    functions: {
      title: 'Parameter default',
      code: 'def hitung_total(harga, jumlah=1, pajak=0.11):\n    return harga * jumlah * (1 + pajak)\n\nprint(hitung_total(50000, 2))'
    },
    loops: {
      title: 'Perulangan bersih',
      code: 'for i in range(1, 4):\n    print("Putaran", i)'
    },
    example: {
      title: 'API dengan FastAPI',
      code: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/api/halo")\ndef halo(nama: str = "tamu"):\n    return {"status": True, "creator": "ZunSensei", "result": {"pesan": "Halo " + nama}}'
    }
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    tagline: 'Mesin di balik jutaan situs',
    description:
      'PHP berjalan di server dan menghasilkan HTML. Sangat umum untuk CMS, form, dan aplikasi web klasik.',
    analogy:
      'PHP itu mesin kasir toko. Ia mencatat pesanan, menghitung total, lalu memberi struk ke pembeli.',
    structure: {
      title: 'Blok PHP di dalam HTML',
      code: '<?php\n$nama = "Zun";\n?>\n<h1>Halo, <?= htmlspecialchars($nama) ?></h1>'
    },
    variables: {
      title: 'Variabel dengan $',
      code: '<?php\n$judul = "DevLab";\n$jumlah = 3;\necho $judul . " - " . $jumlah;\n?>'
    },
    functions: {
      title: 'Fungsi dengan tipe',
      code: '<?php\nfunction total(int $harga, int $jumlah): int {\n    return $harga * $jumlah;\n}\necho total(10000, 3);\n?>'
    },
    loops: {
      title: 'foreach pada array',
      code: '<?php\n$buah = ["apel", "jeruk", "mangga"];\nforeach ($buah as $b) {\n    echo $b . "<br>";\n}\n?>'
    },
    example: {
      title: 'Endpoint JSON',
      code: '<?php\nheader("Content-Type: application/json");\nheader("Access-Control-Allow-Origin: *");\n\n$nama = $_GET["nama"] ?? "tamu";\n\necho json_encode([\n  "status" => true,\n  "creator" => "ZunSensei",\n  "result" => ["pesan" => "Halo " . $nama]\n]);\n?>'
    }
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    category: 'backend',
    tagline: 'Cepat, ringan, mudah dikerahkan',
    description:
      'Go dibuat untuk layanan jaringan berskala besar. Kompilasinya jadi satu binary tanpa dependensi runtime.',
    analogy:
      'Go itu pabrik dengan banyak jalur perakitan paralel. Cepat, terukur, dan tiap jalur tidak saling menunggu.',
    structure: {
      title: 'Paket dan fungsi utama',
      code: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Halo, Dunia")\n}'
    },
    variables: {
      title: 'Deklarasi bertipe',
      code: 'var nama string = "Zun"\numur := 20\nfmt.Println(nama, umur)'
    },
    functions: {
      title: 'Multiple return',
      code: 'func bagi(a, b float64) (float64, error) {\n\tif b == 0 {\n\t\treturn 0, fmt.Errorf("pembagi nol")\n\t}\n\treturn a / b, nil\n}'
    },
    loops: {
      title: 'Hanya ada for',
      code: 'for i := 1; i <= 3; i++ {\n\tfmt.Println("Putaran", i)\n}'
    },
    example: {
      title: 'HTTP handler JSON',
      code: 'package main\n\nimport (\n\t"encoding/json"\n\t"net/http"\n)\n\nfunc halo(w http.ResponseWriter, r *http.Request) {\n\tw.Header().Set("Content-Type", "application/json")\n\tjson.NewEncoder(w).Encode(map[string]any{\n\t\t"status": true, "creator": "ZunSensei",\n\t})\n}\n\nfunc main() {\n\thttp.HandleFunc("/api/halo", halo)\n\thttp.ListenAndServe(":8080", nil)\n}'
    }
  },
  {
    id: 'ruby',
    name: 'Ruby',
    category: 'backend',
    tagline: 'Sintaks ramah dibaca manusia',
    description:
      'Ruby populer lewat framework Rails. Kodenya terasa seperti kalimat biasa dan cepat ditulis.',
    analogy:
      'Ruby itu bahasa manusia yang santai. Kamu menulis instruksi seperti ngobrol, bukan seperti perintah mesin.',
    structure: {
      title: 'Method dan blok',
      code: 'def sapa(nama)\n  puts "Halo, #{nama}"\nend\n\nsapa("Zun")'
    },
    variables: {
      title: 'Simbol dan string',
      code: 'nama = "Zun"\nperan = :pengembang\nputs nama, peran'
    },
    functions: {
      title: 'Keyword argument',
      code: 'def total(harga:, jumlah: 1)\n  harga * jumlah\nend\n\nputs total(harga: 50000, jumlah: 2)'
    },
    loops: {
      title: 'each pada rentang',
      code: '(1..3).each do |i|\n  puts "Putaran #{i}"\nend'
    },
    example: {
      title: 'Route Sinatra',
      code: 'require "sinatra"\nrequire "json"\n\nget "/api/halo" do\n  content_type :json\n  { status: true, creator: "ZunSensei", result: { pesan: "Halo" } }.to_json\nend'
    }
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'mobile',
    tagline: 'Bahasa resmi Android modern',
    description:
      'Kotlin ringkas, null-safe, dan berjalan di JVM. Dipakai luas untuk aplikasi Android modern.',
    analogy:
      'Kotlin itu remote TV dengan tombol jelas. Kamu menekan satu tombol, hasilnya tepat tanpa salah pencet.',
    structure: {
      title: 'Fungsi utama',
      code: 'fun main() {\n    println("Halo, Dunia")\n}'
    },
    variables: {
      title: 'val dan var',
      note: 'val tidak bisa diubah, var bisa.',
      code: 'val nama = "Zun"\nvar hitungan = 0\nhitungan += 1\nprintln("$nama $hitungan")'
    },
    functions: {
      title: 'Fungsi ekspresi',
      code: 'fun luas(p: Int, l: Int): Int = p * l\n\nprintln(luas(4, 5))'
    },
    loops: {
      title: 'Rentang',
      code: 'for (i in 1..3) {\n    println("Putaran $i")\n}'
    },
    example: {
      title: 'Data class',
      code: 'data class Pengguna(val nama: String, val umur: Int)\n\nfun main() {\n    val u = Pengguna("Zun", 20)\n    println(u)\n}'
    }
  },
  {
    id: 'swift',
    name: 'Swift',
    category: 'mobile',
    tagline: 'Bahasa aplikasi Apple',
    description:
      'Swift dipakai membangun aplikasi iOS, iPadOS, macOS, dan watchOS. Aman, cepat, dan terintegrasi dengan SwiftUI.',
    analogy:
      'Swift itu panel kontrol pesawat modern: banyak pengaman otomatis supaya kamu tidak salah tarik tuas.',
    structure: {
      title: 'Top-level code',
      code: 'import Foundation\n\nlet nama = "Zun"\nprint("Halo, \\(nama)")'
    },
    variables: {
      title: 'let dan var',
      code: 'let judul = "DevLab"\nvar hitungan = 0\nhitungan += 1\nprint(judul, hitungan)'
    },
    functions: {
      title: 'Fungsi dengan label',
      code: 'func total(harga: Int, jumlah: Int = 1) -> Int {\n    return harga * jumlah\n}\n\nprint(total(harga: 10000, jumlah: 3))'
    },
    loops: {
      title: 'Rentang tertutup',
      code: 'for i in 1...3 {\n    print("Putaran \\(i)")\n}'
    },
    example: {
      title: 'Struct dan properti',
      code: 'struct Pengguna {\n    let nama: String\n    let umur: Int\n}\n\nlet u = Pengguna(nama: "Zun", umur: 20)\nprint(u.nama)'
    }
  },
  {
    id: 'dart',
    name: 'Dart (Flutter)',
    category: 'mobile',
    tagline: 'Satu kode untuk banyak platform',
    description:
      'Dart adalah bahasa di balik Flutter. Satu basis kode bisa menghasilkan aplikasi Android, iOS, web, dan desktop.',
    analogy:
      'Dart itu cetakan kue universal. Satu cetakan bisa dipakai untuk banyak loyang berbeda.',
    structure: {
      title: 'Fungsi utama',
      code: 'void main() {\n  print("Halo, Dunia");\n}'
    },
    variables: {
      title: 'final dan var',
      code: 'final nama = "Zun";\nvar hitungan = 0;\nhitungan += 1;\nprint("$nama $hitungan");'
    },
    functions: {
      title: 'Fungsi ringkas',
      code: 'int luas(int p, int l) => p * l;\n\nvoid main() {\n  print(luas(4, 5));\n}'
    },
    loops: {
      title: 'Perulangan for',
      code: 'for (var i = 1; i <= 3; i++) {\n  print("Putaran $i");\n}'
    },
    example: {
      title: 'Widget Flutter',
      code: 'import "package:flutter/material.dart";\n\nvoid main() => runApp(\n  MaterialApp(\n    home: Scaffold(\n      body: Center(child: Text("Halo ZunSensei")),\n    ),\n  ),\n);'
    }
  },
  {
    id: 'java',
    name: 'Java',
    category: 'mobile',
    tagline: 'Basis Android klasik dan sistem besar',
    description:
      'Java berjalan di JVM, sangat umum di enterprise, backend, dan aplikasi Android lama. Ekosistemnya matang.',
    analogy:
      'Java itu gedung bertingkat dengan standar konstruksi ketat. Banyak lantai, semua punya aturan jelas.',
    structure: {
      title: 'Kelas dan main',
      code: 'public class Utama {\n    public static void main(String[] args) {\n        System.out.println("Halo, Dunia");\n    }\n}'
    },
    variables: {
      title: 'Tipe eksplisit',
      code: 'String nama = "Zun";\nint hitungan = 0;\nhitungan += 1;\nSystem.out.println(nama + " " + hitungan);'
    },
    functions: {
      title: 'Method statis',
      code: 'static int luas(int p, int l) {\n    return p * l;\n}\n\nSystem.out.println(luas(4, 5));'
    },
    loops: {
      title: 'For klasik',
      code: 'for (int i = 1; i <= 3; i++) {\n    System.out.println("Putaran " + i);\n}'
    },
    example: {
      title: 'Record',
      code: 'public record Pengguna(String nama, int umur) {}\n\npublic class Utama {\n    public static void main(String[] args) {\n        Pengguna u = new Pengguna("Zun", 20);\n        System.out.println(u.nama());\n    }\n}'
    }
  },
  {
    id: 'lua',
    name: 'Lua',
    category: 'game',
    tagline: 'Scripting ringan untuk Roblox',
    description:
      'Lua dipakai di Roblox Studio (Luau) dan banyak engine. Ringan, cepat, dan mudah disisipkan ke aplikasi lain.',
    analogy:
      'Lua itu skrip panggung. Sutradara sudah menyiapkan panggungnya, kamu hanya menulis gerakan aktornya.',
    structure: {
      title: 'Script Roblox dasar',
      code: 'local Players = game:GetService("Players")\n\nPlayers.PlayerAdded:Connect(function(player)\n\tprint("Masuk: " .. player.Name)\nend)'
    },
    variables: {
      title: 'local',
      code: 'local nama = "Zun"\nlocal hitungan = 0\nhitungan = hitungan + 1\nprint(nama, hitungan)'
    },
    functions: {
      title: 'Fungsi dengan parameter',
      code: 'local function luas(p, l)\n\treturn p * l\nend\n\nprint(luas(4, 5))'
    },
    loops: {
      title: 'for numerik',
      code: 'for i = 1, 3 do\n\tprint("Putaran " .. i)\nend'
    },
    example: {
      title: 'Part berputar',
      code: 'local part = Instance.new("Part")\npart.Anchored = true\npart.Parent = workspace\n\nwhile true do\n\tpart.CFrame = part.CFrame * CFrame.Angles(0, math.rad(2), 0)\n\ttask.wait(0.03)\nend'
    }
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'game',
    tagline: 'Bahasa utama Unity',
    description:
      'C# dipakai untuk gameplay Unity, tool editor, dan aplikasi .NET. Tipe kuat dengan ekosistem besar.',
    analogy:
      'C# itu naskah sutradara: setiap adegan, properti, dan gerakan aktor ditulis rinci.',
    structure: {
      title: 'Class MonoBehaviour',
      code: 'using UnityEngine;\n\npublic class Gerak : MonoBehaviour\n{\n    public float kecepatan = 3f;\n\n    void Update()\n    {\n        transform.Translate(Vector3.forward * kecepatan * Time.deltaTime);\n    }\n}'
    },
    variables: {
      title: 'Field dengan tipe',
      code: 'string nama = "Zun";\nint hitungan = 0;\nhitungan++;\nDebug.Log(nama + " " + hitungan);'
    },
    functions: {
      title: 'Method',
      code: 'int Luas(int p, int l)\n{\n    return p * l;\n}\n\nDebug.Log(Luas(4, 5));'
    },
    loops: {
      title: 'For',
      code: 'for (int i = 1; i <= 3; i++)\n{\n    Debug.Log("Putaran " + i);\n}'
    },
    example: {
      title: 'Property dengan validasi',
      code: 'public class Pemain\n{\n    private int _hp = 100;\n\n    public int Hp\n    {\n        get => _hp;\n        set => _hp = Mathf.Clamp(value, 0, 100);\n    }\n}'
    }
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'game',
    tagline: 'Performa tinggi untuk engine',
    description:
      'C++ dipakai Unreal Engine dan sistem yang menuntut performa. Kontrol memori penuh, kompleksitas tinggi.',
    analogy:
      'C++ itu mesin balap. Sangat cepat dan bertenaga, tapi kamu harus paham cara merawatnya.',
    structure: {
      title: 'Header dan main',
      code: '#include <iostream>\n\nint main() {\n    std::cout << "Halo, Dunia" << std::endl;\n    return 0;\n}'
    },
    variables: {
      title: 'Tipe eksplisit',
      code: '#include <string>\n\nstd::string nama = "Zun";\nint hitungan = 0;\nhitungan += 1;\nstd::cout << nama << " " << hitungan;'
    },
    functions: {
      title: 'Fungsi bertipe',
      code: 'int luas(int p, int l) {\n    return p * l;\n}\n\nstd::cout << luas(4, 5);'
    },
    loops: {
      title: 'For klasik',
      code: 'for (int i = 1; i <= 3; i++) {\n    std::cout << "Putaran " << i << "\\n";\n}'
    },
    example: {
      title: 'Struct dan vector',
      code: '#include <vector>\n#include <string>\n\nstruct Pengguna { std::string nama; int umur; };\n\nstd::vector<Pengguna> daftar;\ndaftar.push_back({ "Zun", 20 });\nstd::cout << daftar[0].nama;'
    }
  },
  {
    id: 'c',
    name: 'C',
    category: 'systems',
    tagline: 'Fondasi sistem operasi',
    description:
      'C dekat ke mesin: pointer, memori manual, tanpa runtime besar. Dipakai kernel, driver, dan firmware.',
    analogy:
      'C itu pondasi beton. Tidak terlihat, tapi menopang seluruh bangunan di atasnya.',
    structure: {
      title: 'Include dan main',
      code: '#include <stdio.h>\n\nint main(void) {\n    printf("Halo, Dunia\\n");\n    return 0;\n}'
    },
    variables: {
      title: 'Tipe dan printf',
      code: '#include <stdio.h>\n\nchar nama[] = "Zun";\nint hitungan = 0;\nhitungan += 1;\nprintf("%s %d\\n", nama, hitungan);'
    },
    functions: {
      title: 'Fungsi dengan prototipe',
      code: 'int luas(int p, int l) {\n    return p * l;\n}\n\nprintf("%d\\n", luas(4, 5));'
    },
    loops: {
      title: 'For klasik',
      code: 'for (int i = 1; i <= 3; i++) {\n    printf("Putaran %d\\n", i);\n}'
    },
    example: {
      title: 'Alokasi memori',
      code: '#include <stdlib.h>\n#include <stdio.h>\n\nint *data = malloc(3 * sizeof(int));\nif (data != NULL) {\n    data[0] = 10;\n    printf("%d\\n", data[0]);\n    free(data);\n}'
    }
  },
  {
    id: 'rust',
    name: 'Rust',
    category: 'systems',
    tagline: 'Aman tanpa garbage collector',
    description:
      'Rust menjamin keamanan memori lewat borrow checker. Cocok untuk sistem, CLI, dan WebAssembly.',
    analogy:
      'Rust itu brankas memori. Setiap slot punya pemilik jelas, jadi tidak ada data yang bentrok.',
    structure: {
      title: 'Fungsi utama',
      code: 'fn main() {\n    println!("Halo, Dunia");\n}'
    },
    variables: {
      title: 'Immutability default',
      code: 'let nama = "Zun";\nlet mut hitungan = 0;\nhitungan += 1;\nprintln!("{} {}", nama, hitungan);'
    },
    functions: {
      title: 'Fungsi bertipe',
      code: 'fn luas(p: u32, l: u32) -> u32 {\n    p * l\n}\n\nprintln!("{}", luas(4, 5));'
    },
    loops: {
      title: 'Rentang',
      code: 'for i in 1..=3 {\n    println!("Putaran {}", i);\n}'
    },
    example: {
      title: 'Result dan error handling',
      code: 'fn bagi(a: f64, b: f64) -> Result<f64, String> {\n    if b == 0.0 {\n        return Err(String::from("pembagi nol"));\n    }\n    Ok(a / b)\n}\n\nmatch bagi(10.0, 2.0) {\n    Ok(v) => println!("{}", v),\n    Err(e) => println!("{}", e),\n}'
    }
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'systems',
    tagline: 'Bahasa query database relasional',
    description:
      'SQL mengambil dan mengubah data di database relasional. Hampir semua aplikasi serius menyimpan data dengan cara ini.',
    analogy:
      'SQL itu lemari arsip dengan katalog rapi. Kamu menyebut label, arsip yang tepat keluar.',
    structure: {
      title: 'SELECT dasar',
      code: 'SELECT nama, umur\nFROM pengguna\nWHERE aktif = true\nORDER BY nama ASC;'
    },
    variables: {
      title: 'Parameter terikat',
      note: 'Gunakan placeholder agar aman dari SQL injection.',
      code: 'SELECT * FROM pengguna WHERE id = ?;\n-- di driver: stmt.run(7)'
    },
    functions: {
      title: 'Fungsi agregat',
      code: 'SELECT COUNT(*) AS total, AVG(umur) AS rata_umur\nFROM pengguna\nWHERE aktif = true;'
    },
    loops: {
      title: 'Set-based, bukan loop',
      note: 'SQL memproses semua baris sekaligus.',
      code: 'UPDATE pengguna\nSET status = "lama"\nWHERE dibuat_pada < "2024-01-01";'
    },
    example: {
      title: 'Tabel dan insert',
      code: 'CREATE TABLE pengguna (\n  id INTEGER PRIMARY KEY,\n  nama TEXT NOT NULL,\n  umur INTEGER CHECK (umur > 0)\n);\n\nINSERT INTO pengguna (nama, umur) VALUES ("Zun", 20);\n\nSELECT * FROM pengguna;'
    }
  },
  {
    id: 'bash',
    name: 'Bash / Shell',
    category: 'systems',
    tagline: 'Otomasi lewat terminal',
    description:
      'Bash mengotomasi tugas sistem: backup, deploy, pemantauan, dan perawatan server.',
    analogy:
      'Bash itu remote kontrol terminal. Satu baris perintah bisa menggerakkan banyak hal sekaligus.',
    structure: {
      title: 'Skrip dengan shebang',
      code: '#!/usr/bin/env bash\nset -euo pipefail\n\necho "Halo, Dunia"'
    },
    variables: {
      title: 'Variabel dan ekspansi',
      code: 'nama="Zun"\nhitungan=0\nhitungan=$((hitungan + 1))\necho "$nama $hitungan"'
    },
    functions: {
      title: 'Fungsi shell',
      code: 'luas() {\n  echo $(( $1 * $2 ))\n}\n\nluas 4 5'
    },
    loops: {
      title: 'Perulangan for',
      code: 'for i in 1 2 3; do\n  echo "Putaran $i"\ndone'
    },
    example: {
      title: 'Backup folder',
      code: '#!/usr/bin/env bash\nset -euo pipefail\n\nsumber="./data"\ntujuan="./backup-$(date +%F).tar.gz"\n\ntar -czf "$tujuan" "$sumber"\necho "Backup selesai: $tujuan"'
    }
  }
]

export const deployFree = [
  {
    id: 'git-github',
    title: 'Git & GitHub: Simpan Kode dengan Aman',
    summary: 'Sebelum deploy, kode harus punya riwayat. Git mencatat setiap perubahan, GitHub menyimpannya di cloud.',
    analogy:
      'Git itu mesin waktu untuk folder proyekmu. Setiap commit adalah titik simpan yang bisa kamu kembali.',
    steps: [
      'Install Git, lalu set identitas: git config --global user.name dan user.email.',
      'Di folder proyek jalankan git init untuk membuat repositori lokal.',
      'Tambahkan file ke staging dengan git add, lalu commit dengan pesan jelas.',
      'Buat repo kosong di GitHub, hubungkan remote, lalu push.'
    ],
    code: 'git init\ngit add .\ngit commit -m "feat: halaman awal DevLab"\ngit branch -M main\ngit remote add origin https://github.com/kyedeveloper/devlab.git\ngit push -u origin main',
    note: 'Jangan pernah commit file .env. Selalu masukkan ke .gitignore.'
  },
  {
    id: 'vercel',
    title: 'Deploy ke Vercel (Gratis)',
    summary: 'Vercel mendeteksi Vite otomatis. Cukup import repo, atur build, deploy.',
    analogy:
      'Vercel itu kurir otomatis. Setiap kamu push, paket terbaru langsung diantar ke alamat publik.',
    steps: [
      'Login Vercel dengan akun GitHub.',
      'Klik Add New lalu Project, pilih repo kamu.',
      'Framework Preset: Vite. Build Command: npm run build. Output Directory: dist.',
      'Klik Deploy dan tunggu selesai.',
      'Setiap push ke branch main akan memicu deploy baru.'
    ],
    code: 'npm run build\n# Vercel menjalankan perintah ini otomatis di server mereka',
    warning:
      'PENTING: Vercel Hobby hanya mengizinkan maksimal 12 Serverless Functions. Satu file di folder api = satu function. Solusinya: gabungkan semua endpoint ke satu file router api/tools.js dan bedakan aksi lewat ?action=. Contoh nyata ada di tab Public API.',
    note: 'Folder api/ pada proyek ini hanya berisi 1 file, jadi sangat aman.'
  },
  {
    id: 'netlify',
    title: 'Deploy ke Netlify (Gratis)',
    summary: 'Netlify juga mendukung build Vite dengan konfigurasi yang sama.',
    analogy:
      'Netlify itu loker penyimpanan otomatis: kamu taruh paket, lokernya langsung terbuka untuk publik.',
    steps: [
      'Login Netlify, klik Add new site lalu Import an existing project.',
      'Hubungkan GitHub dan pilih repo.',
      'Build command: npm run build. Publish directory: dist.',
      'Deploy. Untuk fungsi serverless gunakan folder netlify/functions.'
    ],
    code: 'npm run build\n# Publish directory: dist',
    note: 'Netlify Functions punya kuota sendiri. Baca dokumentasi sebelum memakai banyak endpoint.'
  },
  {
    id: 'cloudflare-pages',
    title: 'Deploy ke Cloudflare Pages (Gratis)',
    summary: 'Cloudflare Pages cepat karena jaringan edge global.',
    analogy:
      'Cloudflare itu jaringan pos dengan gudang di banyak kota. Paket diambil dari gudang terdekat.',
    steps: [
      'Login dashboard Cloudflare, buka Workers & Pages.',
      'Create application lalu Pages, hubungkan repo GitHub.',
      'Build command: npm run build. Output: dist.',
      'Simpan dan deploy.'
    ],
    code: 'npm run build\n# Build output directory: dist',
    note: 'Fitur serverless di Cloudflare bernama Workers, dipisah dari Pages.'
  },
  {
    id: 'render',
    title: 'Deploy ke Render (Gratis)',
    summary: 'Render cocok untuk backend Node.js dan layanan yang butuh proses berjalan.',
    analogy:
      'Render itu kafe 24 jam: layananmu tetap hidup dan siap menerima permintaan.',
    steps: [
      'Login Render, klik New lalu Web Service.',
      'Hubungkan repo, pilih runtime Node.',
      'Build Command: npm install. Start Command: node server.js.',
      'Pilih paket Free lalu Create Web Service.'
    ],
    code: 'npm install\nnode server.js',
    note: 'Paket gratis Render tidur setelah tidak ada trafik. Permintaan pertama setelah tidur akan lambat.'
  }
]

export const deployPaid = [
  {
    id: 'custom-domain',
    title: 'Custom Domain & DNS',
    summary: 'Domain sendiri membuat proyek terlihat profesional dan mudah diingat.',
    analogy:
      'DNS itu buku telepon internet. Kamu mendaftarkan nama, buku itu mengarahkan ke nomor rumahmu.',
    steps: [
      'Beli domain di registrar seperti Namecheap atau Cloudflare Registrar.',
      'Buka panel DNS, tambahkan A Record ke IP server untuk root domain.',
      'Tambahkan CNAME www ke domain utama.',
      'Tunggu propagasi DNS, bisa beberapa menit sampai 24 jam.'
    ],
    code: 'Tipe   Nama   Nilai              TTL\nA      @      203.0.113.10        Auto\nCNAME  www    example.com         Auto',
    note: 'Gunakan TTL rendah saat pertama kali setup agar mudah dikoreksi.'
  },
  {
    id: 'vps',
    title: 'Sewa VPS Ubuntu & Akses SSH',
    summary: 'VPS memberi kendali penuh atas server. Pilih provider terpercaya dan amankan aksesnya.',
    analogy:
      'VPS itu kamar kosong dengan kunci sendiri. Kamu bebas menata, tapi juga bertanggung jawab merawatnya.',
    steps: [
      'Sewa VPS Ubuntu 22.04 LTS minimal 1 GB RAM.',
      'Buat SSH key di komputer: ssh-keygen -t ed25519.',
      'Tambahkan public key ke panel provider.',
      'Login: ssh root@IP_SERVER.',
      'Buat user baru dan matikan login root.'
    ],
    code: 'ssh-keygen -t ed25519 -C "zun@devlab"\nssh root@203.0.113.10\nadduser zun\nusermod -aG sudo zun',
    note: 'Aktifkan firewall UFW: ufw allow OpenSSH, ufw allow 80, ufw allow 443, lalu ufw enable.'
  },
  {
    id: 'nginx',
    title: 'Nginx Reverse Proxy',
    summary: 'Nginx menerima permintaan publik lalu meneruskannya ke aplikasi internal.',
    analogy:
      'Nginx itu resepsionis gedung. Tamu datang ke meja depan, resepsionis mengantar ke ruangan yang benar.',
    steps: [
      'Install nginx: sudo apt install nginx.',
      'Buat file konfigurasi di /etc/nginx/sites-available/devlab.',
      'Arahkan proxy_pass ke port aplikasi, misalnya 127.0.0.1:3000.',
      'Aktifkan dengan symlink ke sites-enabled lalu uji config.'
    ],
    code: 'server {\n    listen 80;\n    server_name example.com www.example.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}',
    note: 'Selalu jalankan sudo nginx -t sebelum reload untuk memastikan konfigurasi valid.'
  },
  {
    id: 'pm2',
    title: 'PM2: Aplikasi Hidup 24 Jam',
    summary: 'PM2 menjaga proses tetap berjalan, restart otomatis, dan menyimpan log.',
    analogy:
      'PM2 itu penjaga shift malam. Kalau aplikasi tumbang, ia langsung membangunkannya lagi.',
    steps: [
      'Install global: sudo npm install -g pm2.',
      'Jalankan aplikasi: pm2 start server.js --name devlab.',
      'Simpan daftar proses: pm2 save.',
      'Aktifkan autostart: pm2 startup lalu jalankan perintah yang muncul.'
    ],
    code: 'sudo npm install -g pm2\npm2 start server.js --name devlab\npm2 save\npm2 startup\npm2 logs devlab',
    note: 'Pakai pm2 monit untuk memantau CPU dan RAM secara langsung.'
  },
  {
    id: 'certbot',
    title: 'SSL HTTPS Gratis dengan Certbot',
    summary: 'HTTPS wajib. Certbot dari Let\'s Encrypt memasang sertifikat dan memperbaruinya otomatis.',
    analogy:
      'Sertifikat SSL itu segel resmi di amplop. Penerima tahu surat tidak dibuka di jalan.',
    steps: [
      'Pastikan domain sudah mengarah ke server dan port 80 terbuka.',
      'Install certbot dan plugin nginx.',
      'Jalankan certbot --nginx -d example.com -d www.example.com.',
      'Uji perpanjangan otomatis: certbot renew --dry-run.'
    ],
    code: 'sudo apt install certbot python3-certbot-nginx\nsudo certbot --nginx -d example.com -d www.example.com\nsudo certbot renew --dry-run',
    note: 'Sertifikat berlaku 90 hari dan diperbarui otomatis oleh timer systemd.'
  }
]

export const apiDocs = [
  {
    id: 'cara-kerja-rest',
    title: 'Cara Kerja REST API',
    summary: 'REST memakai method HTTP untuk menyatakan aksi. GET mengambil data, POST mengirim data baru.',
    analogy:
      'REST itu meja layanan: kamu memilih formulir yang benar (GET/POST), menyerahkannya, lalu menerima jawaban.',
    code: 'GET    /api/tools?action=info          -> 200 OK\nPOST   /api/tools                       -> 201 Created\nGET    /api/tools?action=salah          -> 404 Not Found\nGET    /api/tools?action=slugify        -> 400 Bad Request (text kosong)',
    note: 'Status 200 sukses, 400 parameter salah, 404 tidak ditemukan, 500 error server.'
  },
  {
    id: 'format-json',
    title: 'Format JSON yang Rapi',
    summary: 'Selalu kembalikan struktur konsisten: status, creator, message, dan result.',
    analogy:
      'Format JSON itu formulir seragam. Setiap balasan punya kolom sama sehingga mudah dibaca program lain.',
    code: '{\n  "status": true,\n  "creator": "ZunSensei",\n  "message": "Slug dibuat.",\n  "result": { "slug": "belajar-coding" }\n}',
    note: 'Jangan pernah mengembalikan HTML error. Selalu JSON, bahkan saat gagal.'
  },
  {
    id: 'publish-vercel',
    title: 'Publikasi Gratis via Vercel',
    summary: 'Satu file di folder api menjadi satu endpoint. Karena limit 12, pakai router.',
    analogy:
      'Satu file router itu satu loket serbaguna. Semua urusan dilayani di loket yang sama dengan nomor antrean berbeda.',
    code: '// api/tools.js\nexport default function handler(req, res) {\n  const action = req.query.action\n  if (!action) {\n    return res.status(400).json({ status: false, message: "action wajib" })\n  }\n  // ...routing berdasarkan action\n}',
    note: 'Akses menjadi: /api/tools?action=slugify&text=Halo Dunia'
  },
  {
    id: 'cors',
    title: 'Mengaktifkan CORS',
    summary: 'CORS membuat API bisa dipanggil dari domain lain. Tanpa ini, browser memblokir.',
    analogy:
      'CORS itu daftar tamu. Tanpa nama di daftar, penjaga pintu menolak masuk.',
    code: 'res.setHeader("Access-Control-Allow-Origin", "*")\nres.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")\nres.setHeader("Access-Control-Allow-Headers", "Content-Type")\n\nif (req.method === "OPTIONS") {\n  return res.status(204).end()\n}',
    note: 'Untuk API publik boleh "*". Untuk API privat, ganti dengan domain spesifik.'
  },
  {
    id: 'validasi',
    title: 'Validasi Parameter Query',
    summary: 'Validasi mencegah error aneh dan penyalahgunaan. Tolak lebih awal dengan 400.',
    analogy:
      'Validasi itu pemeriksa tiket di pintu masuk. Tiket salah bentuk langsung dikembalikan.',
    code: 'const text = String(req.query.text || "")\n\nif (text.trim() === "") {\n  return res.status(400).json({\n    status: false,\n    creator: "ZunSensei",\n    message: "Parameter text wajib diisi"\n  })\n}',
    note: 'Batasi juga panjang input agar tidak membebani server.'
  },
  {
    id: 'satu-file-banyak-fitur',
    title: 'Banyak Fitur, Satu File',
    summary: 'Gunakan map aksi, bukan if bertumpuk tanpa batas. Ini pola yang dipakai proyek ini.',
    analogy:
      'Ini seperti papan tombol lift: satu panel, banyak tujuan, masing-masing tombol punya tugas jelas.',
    code: 'const ACTIONS = {\n  slugify: (text) => ({ slug: text.toLowerCase().replace(/\\s+/g, "-") }),\n  reverse: (text) => ({ reversed: text.split("").reverse().join("") })\n}\n\nconst fn = ACTIONS[action]\nif (!fn) return res.status(404).json({ status: false, message: "aksi tidak dikenal" })\n\nres.status(200).json({ status: true, creator: "ZunSensei", result: fn(text) })',
    note: 'Pola ini menjaga jumlah file tetap 1 sehingga aman dari limit Vercel.'
  }
]

export const databaseDocs = {
  manual: [
    {
      id: 'json-fs',
      title: 'CRUD dengan File JSON + fs',
      summary: 'Cara paling sederhana: simpan array ke file .json. Cocok untuk prototipe dan data kecil.',
      analogy:
        'File JSON itu buku catatan. Kamu menulis, membaca, dan menghapus baris dengan tangan sendiri.',
      code: 'import fs from "node:fs/promises"\n\nconst FILE = "./data/pengguna.json"\n\nasync function baca() {\n  const isi = await fs.readFile(FILE, "utf8")\n  return JSON.parse(isi)\n}\n\nasync function tulis(data) {\n  await fs.writeFile(FILE, JSON.stringify(data, null, 2))\n}\n\nasync function buat(nama) {\n  const data = await baca()\n  data.push({ id: Date.now(), nama })\n  await tulis(data)\n}\n\nasync function hapus(id) {\n  const data = await baca()\n  await tulis(data.filter((d) => d.id !== id))\n}',
      note: 'Risiko: dua proses menulis bersamaan bisa saling menimpa. Jangan pakai untuk data kritis.'
    },
    {
      id: 'sqlite',
      title: 'SQLite Lokal',
      summary: 'SQLite adalah database penuh dalam satu file. Lebih aman dan cepat daripada JSON manual.',
      analogy:
        'SQLite itu lemari arsip pribadi di ruanganmu. Kecil, rapi, dan tidak butuh gedung terpisah.',
      code: 'import Database from "better-sqlite3"\n\nconst db = new Database("./data/app.db")\n\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS pengguna (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    nama TEXT NOT NULL\n  )\n`)\n\ndb.prepare("INSERT INTO pengguna (nama) VALUES (?)").run("Zun")\n\nconst semua = db.prepare("SELECT * FROM pengguna").all()\nconsole.log(semua)',
      note: 'SQLite tidak cocok untuk banyak penulis bersamaan. Untuk itu pakai PostgreSQL.'
    }
  ],
  cloudFree: [
    {
      id: 'mongodb-atlas',
      title: 'MongoDB Atlas (Free Tier)',
      summary: 'Atlas memberi cluster gratis 512 MB. Ambil connection string lalu simpan di .env.',
      analogy:
        'Atlas itu gudang sewaan gratis. Kamu hanya dapat satu rak kecil, cukup untuk latihan.',
      code: 'import { MongoClient } from "mongodb"\n\nconst client = new MongoClient(process.env.MONGODB_URI)\n\nawait client.connect()\nconst db = client.db("devlab")\n\nawait db.collection("pengguna").insertOne({ nama: "Zun" })\nconst data = await db.collection("pengguna").find().toArray()',
      note: 'Whitelist IP 0.0.0.0/0 saat development, lalu persempit saat produksi.'
    },
    {
      id: 'supabase',
      title: 'Supabase (PostgreSQL)',
      summary: 'Supabase memberi PostgreSQL gratis dengan dashboard dan auth bawaan.',
      analogy:
        'Supabase itu apartemen lengkap: kamar, keamanan, dan resepsionis sudah disiapkan.',
      code: 'import { createClient } from "@supabase/supabase-js"\n\nconst supabase = createClient(\n  process.env.SUPABASE_URL,\n  process.env.SUPABASE_ANON_KEY\n)\n\nconst { data, error } = await supabase\n  .from("pengguna")\n  .select("*")\n\nif (error) console.error(error)',
      note: 'Aktifkan Row Level Security sebelum membuka akses publik.'
    },
    {
      id: 'firebase',
      title: 'Firebase (Firestore)',
      summary: 'Firebase menyediakan Firestore realtime dan auth siap pakai.',
      analogy:
        'Firebase itu jaringan papan pengumuman realtime: perubahan langsung terlihat di semua papan.',
      code: 'import { initializeApp } from "firebase/app"\nimport { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"\n\nconst app = initializeApp({\n  projectId: process.env.FIREBASE_PROJECT_ID\n})\n\nconst db = getFirestore(app)\n\nawait addDoc(collection(db, "pengguna"), { nama: "Zun" })\nconst snap = await getDocs(collection(db, "pengguna"))',
      note: 'Tulis aturan keamanan Firestore dengan benar. Default terbuka terlalu lebar.'
    }
  ],
  paid: [
    {
      id: 'kapan-upgrade',
      title: 'Kapan Harus Upgrade',
      summary: 'Naik paket ketika free tier mulai menahan: koneksi penuh, storage habis, atau butuh backup.',
      analogy:
        'Free tier itu kamar contoh. Begitu barangmu menumpuk, kamu butuh kamar sebenarnya.',
      code: 'Tanda wajib upgrade:\n- Koneksi database sering ditolak\n- Storage > 80% kuota gratis\n- Butuh point-in-time recovery\n- Butuh SLA dan support berbayar\n- Butuh replika baca untuk trafik tinggi',
      note: 'Hitung biaya sebelum upgrade. Sering lebih murah menaruh DB di VPS sendiri untuk skala kecil.'
    },
    {
      id: 'opsi-berbayar',
      title: 'Opsi Layanan Berbayar',
      summary: 'Pilih managed database resmi provider bila tim butuh keandalan dan backup otomatis.',
      analogy:
        'Managed database itu sewa apartemen dengan teknisi. Kamu bayar lebih, tapi tidak memperbaiki pipa sendiri.',
      code: 'Pilihan umum:\n- Supabase Pro\n- MongoDB Atlas M10 ke atas\n- Amazon RDS for PostgreSQL\n- DigitalOcean Managed Databases\n- Railway / Neon (serverless Postgres)',
      note: 'Managed berarti backup, patch, dan failover ditangani provider.'
    },
    {
      id: 'self-host',
      title: 'PostgreSQL / MySQL di VPS Sendiri',
      summary: 'Kendali penuh, biaya tetap. Tapi backup dan keamanan jadi tanggung jawabmu.',
      analogy:
        'Self-host itu membangun gudang sendiri. Bebas menata, tapi kalau bocor kamu yang menambal.',
      code: 'sudo apt install postgresql\nsudo -u postgres psql\n\nCREATE DATABASE devlab;\nCREATE USER zun WITH ENCRYPTED PASSWORD \'ganti-ini\';\nGRANT ALL PRIVILEGES ON DATABASE devlab TO zun;\n\n# izinkan hanya localhost di pg_hba.conf\n# listen_addresses = \'localhost\' di postgresql.conf\nsudo systemctl restart postgresql',
      note: 'Jadwalkan pg_dump harian ke storage terpisah. Backup di server yang sama bukan backup.'
    }
  ]
}

export const challenges = [
  {
    id: 'neon-card',
    title: 'Kartu Profil Neon',
    level: 'Mudah',
    goal: 'Buat kartu profil dengan border bercahaya, foto inisial, dan tombol hover.'
  },
  {
    id: 'counter',
    title: 'Counter Interaktif',
    level: 'Sedang',
    goal: 'Buat tombol tambah/kurang dengan JavaScript dan tampilkan angka terbaru.'
  },
  {
    id: 'debug',
    title: 'Debug Kode Rusak',
    level: 'Menantang',
    goal: 'Perbaiki tag yang tidak tertutup dan variabel yang belum dideklarasikan sampai hijau.'
  }
]

export const profile = {
  name: 'ZunSensei',
  role: 'Pembuat DevLab',
  hobby: 'Bermain game dan terkadang membuat website kalau mempunyai ide.',
  bio: 'Menulis materi yang simpel, jujur, dan bisa langsung dicoba. Tidak suka tutorial berbelit.',
  games: [
    { id: 'roblox', label: 'Roblox', accent: 'rose' },
    { id: 'blue-archive', label: 'Blue Archive', accent: 'cyan' }
  ],
  socials: [
    { id: 'github', label: 'GitHub', handle: 'kyedeveloper', url: 'https://github.com/kyedeveloper', accent: 'violet' },
    { id: 'tiktok', label: 'TikTok', handle: '@feyzzie1', url: 'https://www.tiktok.com/@feyzzie1', accent: 'cyan' },
    { id: 'telegram', label: 'Telegram', handle: '@fiyaaw', url: 'https://t.me/fiyaaw', accent: 'emerald' },
    { id: 'whatsapp', label: 'WhatsApp', handle: '+6281936573304', url: 'https://wa.me/6281936573304', accent: 'rose' }
  ]
}