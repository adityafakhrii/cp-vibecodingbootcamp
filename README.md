# CODEPOLITAN Vibe Coding Bootcamp

CODEPOLITAN Vibe Coding Bootcamp adalah repositori aplikasi web pendaftaran bootcamp interaktif. Proyek ini dibangun dengan fokus pada performa tinggi, pengalaman pengguna yang premium melalui antarmuka bergaya glassmorphism, dan optimasi SEO menyeluruh.

## Teknologi Utama

Proyek ini dibangun menggunakan susunan teknologi frontend modern untuk memastikan pengembangan yang cepat dan fleksibel:

- Frontend Framework: React.js
- Build Tool: Vite
- Bahasa Pemrograman: TypeScript
- Styling Utility: Tailwind CSS
- UI Primitives: Radix UI

## Fitur Utama

- Antarmuka Premium: Menggunakan desain Apple-style Glassmorphism dengan tekstur noise halus dan efek transparansi dinamis.
- Responsivitas Penuh: Tampilan yang beradaptasi secara presisi pada perangkat seluler, tablet, hingga desktop resolusi tinggi.
- Mode Gelap Terintegrasi: Dukungan native untuk tema terang dan gelap yang dapat bertransisi secara mulus tanpa lag.
- Teroptimasi SEO: Memuat metadata spesifik, optimasi pencarian, Open Graph, dan Twitter Cards komprehensif agar tautan aman dan terstruktur saat disebarkan lewat social media.

## Instalasi dan Setup

Pastikan antarmuka lokal Anda sudah terkoneksi dengan Node.js (direkomendasikan versi 18 atau di atasnya).

1. Buka terminal Anda pada direktori proyek.
2. Pasang semua dependensi perangkat lunak:

   ```bash
   npm install
   ```

## Eksekusi Program (Commands)

Berikut adalah daftar perintah utama yang dapat dijalankan melalui NPM:

- `npm run dev`: Menjalankan server pengembangan lokal (Vite) dengan *Hot Module Replacement* (HMR).
- `npm run build`: Melakukan proses kompilasi bundel kode tipe (*TypeScript compile*) lalu merangkai sumber dokumen produksi untuk persiapan jalur deploy.
- `npm run preview`: Membuka versi pratinjau hasil kompilasi produksi di *environment* lokal.
- `npm run lint`: Menjalankan ESLint untuk mengidentifikasi letak standar kesalahan kode.

## Panduan Perubahan Konten

Repository ini diatur untuk memisahkan urusan UI/logika desain dengan isi konten tekstual. Untuk mengubah kalimat, testimoni, penentuan harga, dan tautan Call To Action (CTA), teknisi tidak perlu menyentuh file komponen React.

Semua teks global diatur pada berkas:
`/src/data/content.ts`

Tinggal simpan dan aplikasi akan memuat data terbaru ke posisi antarmuka yang tepat.

## Panduan Perubahan UI / Style

Atribut utilitas CSS global seperti deklarasi mode malam, pola kaca (glass-panel), dan palet warna dipecah secara berpusat pada:
`/src/index.css`

Sementara palet tailwind.config akan bertumpu kepada konfigurasi CSS di atas. Jika Anda perlu menukarkan warna, cukup edit variabel desimal di bagian `layer base`.
