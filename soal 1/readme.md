# Sena's Profile - HTML Overview

Dokumen HTML ini merupakan template halaman profil sederhana yang menggunakan Bootstrap untuk styling dan tata letak. Berikut adalah penjelasan rinci tentang struktur dan elemen yang digunakan dalam dokumen ini.

## Struktur Dasar HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>sena's profile</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/style/app.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-is/18.3.1/cjs/react-is.production.min.js" integrity="sha512-7tmQCIngBCyNlDtDg31ZalbtoWQbMtqK+8Yo2Vgk6DFbC4YTFfqmLzuSwYWqMnmpmuwZBMlp/POm8ES1PHUwcg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  </head>
  <body>

Profile Section
<section>
  <div class="container">
    <div class="profile">
      <img class="rounded-circle sayanggg" src="assets/images/sayanggg.jpg" alt=""/>
      <h2>Sekar Qynasih Inggil Ardinsyah</h2>
      <h5>🐈‍⬛️ 𐂯 ₊ stay enchanted by the magic of sweetness! ⁺ ‌♡</h5>
    </div>
  </div>
</section>
Bagian profil ini menampilkan gambar profil, nama, dan deskripsi singkat.

Biodata Section
<section id="biodata" class="BIODATA">
  <div class="container text-center">
    <h1 class="biodata-tittle">BIODATA</h1>
    <div class="row">
      <div class="col-sm">
        hi semua, perkenalkan saya Sekar Qynasih Inggil Ardinsyah, saya sekarang berusia 19 tahun dan sedang menempuh pendidikan di POLITEKNIK HARAPAN BERSAMA yang berlokasi di KOTA TEGAL
      </div>
      <div class="col-sm">
        saya mengambil jurusan TEKNIK INFORMATIKA. semoga saya kuat sampai tamat, hehe.  saya membuat web profile ini dikarenakan tugas akhir dari study club PLUG-IN yang saya ikuti.
      </div>
      <div class="col-sm">
        hobi saya dari dulu menggambar, dari kecil memang passion dan bidang saya di seni. saya suka melihat animasi yang orang buat. mereka memiliki ciri khas masing masing.
      </div>
    </div>
  </div>
</section>
Bagian biodata ini menjelaskan tentang biodata saya (sena), pendidikannya, dan hobinya.

Education Section
<section id="education" class="education">
  <div class="container text-center">
    <h2 class="education-tittle">EDUCATION</h2>
    <div class="row justify-content-center">
      <div class="col-sm-3">
        <div class="card mx-auto" style="width: 17rem;">
          <div class="card-body text-center">
            <h5 class="card-title">MI</h5>
            <h9 class="card-subtitle mb-2 text-muted">Luqman Al Hakim</h9>
            <p class="card-text">Menjadi Madrasah Terbaik dan Menyiapkan Generasi Muslim Cendekia yang Berwawasan Lingkungan.</p>
            <a href="https://miluqmanalhakim.sch.id" class="card-link">see more info</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card mx-auto" style="width: 17rem;">
          <div class="card-body text-center">
            <h5 class="card-title">MTs</h5>
            <h6 class="card-subtitle mb-2 text-muted">Negri 2 Tegal</h6>
            <p class="card-text">Mewujudkan pelajar yang religius, unggul dalam teknologi dan keterampilan yang berwawasan lingkungan dan sosial.</p>
            <a href="https://mtsn2tegal.sch.id" class="card-link">see more info</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card mx-auto" style="width: 17rem;">
          <div class="card-body text-center">
            <h5 class="card-title">SMK</h5>
            <h6 class="card-subtitle mb-2 text-muted">Nu 1 Slawi</h6>
            <p class="card-text">Menjadi sekolah berbasis revolusi industri 4.0 yang di landasi pengetahuan agama Islam</p>
            <a href="https://smknu1slawi.sch.id/" class="card-link">see more info</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card mx-auto" style="width: 17rem;">
          <div class="card-body text-center">
            <h5 class="card-title">PTS</h5>
            <h6 class="card-subtitle mb-2 text-muted">Politeknik Harapan Bersama</h6>
            <p class="card-text">Menjadi Politeknik Unggul,  Berjiwa Kewirausahaan, Berbasis Kearifan Lokal yang Berdaya Saing Global Tahun 2035</p>
            <a href="https://poltekharber.ac.id/" class="card-link">see more info</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
Bagian pendidikan ini menampilkan informasi tentang riwayat pendidikan saya (sena) dalam bentuk kartu.

Contact Section
<section id="contact" class="footer">
  <h1 class="text-center">CONTACT</h1>
  <h6 class="text-center">email : sekarqynasih@gmail.com</h6>
  <h6 class="text-center">instagram : @s_hkrq1</h6>
  <div class="container text-center contact">
    <a href="#"><i class="fab fa-instagram"></i></a>
  </div>
  <p class="text-center watermark small-text">created by sena 2024</p>
</section>
Bagian kontak ini memberikan informasi kontak dan watermark yang telah di buat.
