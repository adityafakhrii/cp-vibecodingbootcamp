import {
    Code2,
    Wallet,
    Bot,
    Lightbulb,
    Globe,
    Store,
    Sparkles,
    Video,
    Library,
    Users,
    MessageCircle,
    BookOpen,
    Code,
    GraduationCap,
    Award,
    Monitor,
    AppWindow,
    Sliders,
    Rocket,
    Trophy,
    Calendar,
    Layers,
    Clock,
    CalendarClock,
    Instagram,
    Linkedin,
    Github,
    ExternalLink,
    type LucideIcon,
} from "lucide-react";

// ── Hero ─────────────────────────────────────────────
export const hero = {
    badge: "Batch 1 dimulai 04 Mei — kuota terbatas",
    subtitle: "Punya Ide?",
    titleLine1: "Bangun Aplikasi Sendiri",
    titleHighlight: "Tanpa Harus Jadi Programmer.",
    description:
        "Dalam 8 sesi, kamu akan mengubah ide menjadi aplikasi nyata yang bisa digunakan atau dijual — tanpa harus menjadi programmer.",
    ctaText: "Gabung Batch 1 Sekarang",
    ctaHref: "https://codepolitan.com",
    secondaryText: "Lihat Roadmap",
    secondaryHref: "#roadmap",
};

// ── Problem ──────────────────────────────────────────
export interface ProblemItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export const problemSection = {
    label: "MASALAHNYA",
    title: "Masalahnya bukan di ide kamu.",
    subtitle: "Tapi kamu belum tahu cara mengeksekusinya. Dan akhirnya… semuanya berhenti di kepala.",
    items: [
        {
            icon: Lightbulb,
            title: "Ide Tidak Pernah Jadi Produk",
            desc: "Sudah terpikirkan sejak lama, tapi sampai sekarang masih sebatas rencana dan impian.",
        },
        {
            icon: Wallet,
            title: "Hire Developer Mahal & Lama",
            desc: "Mengerjakan MVP saja bisa menghabiskan puluhan juta, dan belum tentu hasilnya langsung bisa digunakan.",
        },
        {
            icon: Bot,
            title: "Belum Tahu Cara Pakai AI",
            desc: "AI memang banyak, tapi kamu butuh workflow nyata untuk eksekusi dari nol sampai deploy.",
        },
        {
            icon: Code2,
            title: "Belajar Coding Terlalu Lama",
            desc: "Syntax bikin pusing. Waktu kamu habis berputar-putar belajar teori yang tidak menyelesaikan produk.",
        },
    ] as ProblemItem[],
};

// ── Solution ─────────────────────────────────────────
export const solutionSection = {
    label: "SOLUSINYA",
    title: "Di sini kamu tidak belajar coding.",
    titleHighlight: "Kamu belajar bikin produk.",
    titleSuffix: "",
    description:
        "Setelah mengikuti program ini, kamu akan membawa pulang skill praktis untuk mengubah ide apa pun menjadi aplikasi nyata yang siap dirilis ke market.",
    points: [
        "Dari ide → jadi aplikasi live",
        "Dari nol → bisa digunakan orang",
        "Dari bingung → punya sistem rilis yang jelas",
        "Mentoring langsung dari real builder",
    ],
    steps: [
        { tag: "01 · IDE", text: "Aplikasi tracking ibadah harian" },
        { tag: "02 · AI", text: "Generate UI + database schema" },
        { tag: "03 · BUILD", text: "Iterasi fitur bersama AI agent" },
        { tag: "04 · SHIP", text: "Deploy cepat & share ke user" },
    ],
};

// ── Projects ─────────────────────────────────────────
export interface ProjectLevel {
    level: string;
    icon: LucideIcon;
    title: string;
    desc: string;
    tags: string[];
}

export const projectsSection = {
    label: "PROJECT OUTPUT",
    title: "Selesai program, kamu bawa hasil.",
    subtitle: "Bukan cuma paham teori — tapi punya 3 project nyata yang bisa dipakai, dipamerkan, atau dijual.",
    levels: [
        {
            level: "Level 1",
            icon: Globe,
            title: "Personal Portfolio Website",
            desc: "Bangun website portofolio personal yang profesional — tampilkan profil, skill, dan project kamu. Langsung live dengan domain sendiri dan bisa diakses siapa saja.",
            tags: ["Landing Page", "Responsive Design", "Custom Domain"],
        },
        {
            level: "Level 2",
            icon: Store,
            title: "Brand Website + Online Store",
            desc: "Buat website brand lengkap dengan fitur transaksi — katalog produk, keranjang belanja, dan sistem checkout. Cocok untuk bisnis online yang siap terima pesanan.",
            tags: ["E-Commerce", "Database", "Payment Gateway"],
        },
        {
            level: "Level 3",
            icon: Sparkles,
            title: "AI SaaS — Gemini API",
            desc: "Bangun aplikasi SaaS cerdas yang terintegrasi langsung dengan Google Gemini API — bisa generate teks, analisis data, atau jadi AI assistant custom sesuai kebutuhan.",
            tags: ["Gemini LLM", "AI Integration", "SaaS Model"],
        },
    ] as ProjectLevel[],
};

// ── Roadmap Sessions ─────────────────────────────────
export interface Session {
    n: number;
    icon: LucideIcon;
    title: string;
    desc: string;
    output: string;
}

export const roadmapSection = {
    label: "ROADMAP",
    title: "Sudah kami susun. ",
    titleHighlight: "Tinggal kamu jalankan.",
    subtitle:
        "Dalam 8 sesi, kamu akan dibimbing dari nol sampai punya aplikasi berbasis AI.",
    bonusTitle: "Best Project Award",
    bonusDesc:
        "Peserta dengan eksekusi project terbaik akan mendapatkan reward langsung dari kami.",
    sessions: [
        {
            n: 1,
            icon: Lightbulb,
            title: "Mindset & Idea Validation",
            desc: "Ubah cara kamu melihat coding dan breakdown ide menjadi struktur aplikasi.",
            output: "Ide project + struktur jelas",
        },
        {
            n: 2,
            icon: Sparkles,
            title: "Prompting Skill",
            desc: "Belajar cara 'berkomunikasi' dengan AI agar bisa menghasilkan aplikasi sesuai keinginan.",
            output: "Prompt siap pakai",
        },
        {
            n: 3,
            icon: Monitor,
            title: "Build Landing Page",
            desc: "Buat landing page profesional untuk produk kamu.",
            output: "Landing page live",
        },
        {
            n: 4,
            icon: AppWindow,
            title: "Build Web App",
            desc: "Mulai membangun aplikasi utama dari nol menggunakan AI.",
            output: "Web app basic",
        },
        {
            n: 5,
            icon: Bot,
            title: "AI Integration",
            desc: "Tambahkan fitur AI agar aplikasi kamu lebih pintar.",
            output: "AI-powered feature",
        },
        {
            n: 6,
            icon: Sliders,
            title: "Improvement & Feature Expansion",
            desc: "Upgrade aplikasi menjadi lebih usable dan siap pakai.",
            output: "App lebih kompleks",
        },
        {
            n: 7,
            icon: Rocket,
            title: "Deploy & Publish",
            desc: "Luncurkan aplikasi kamu ke internet.",
            output: "App live + domain",
        },
        {
            n: 8,
            icon: Trophy,
            title: "Monetization & Showcase",
            desc: "Pelajari cara menjual / memanfaatkan aplikasi kamu.",
            output: "Project siap dipakai / dijual",
        },
    ] as Session[],
};

// ── Schedule & Timeline ──────────────────────────────
export const scheduleSection = {
    label: "JADWAL & TIMELINE",
    title: "Jadwal Program",
    subtitle: "Format jelas, waktu fleksibel, dan bisa diikuti siapa saja.",
    batches: [
        {
            number: 1,
            status: "open",
            statusLabel: "Daftar Sekarang",
            startDate: "04 Mei 2026",
            schedule: "Senin dan Kamis, 19.00 WIB",
            note: "Kelas dibuka per batch. Pastikan kamu tidak ketinggalan batch ini!",
        },
        {
            number: 2,
            status: "coming_soon",
            statusLabel: "Coming Soon",
            startDate: "Juli 2026",
            schedule: "TBA",
            note: "",
        },
        {
            number: 3,
            status: "coming_soon",
            statusLabel: "Coming Soon",
            startDate: "September 2026",
            schedule: "TBA",
            note: "",
        },
        {
            number: 4,
            status: "coming_soon",
            statusLabel: "Coming Soon",
            startDate: "November 2026",
            schedule: "TBA",
            note: "",
        },
        {
            number: 5,
            status: "coming_soon",
            statusLabel: "Coming Soon",
            startDate: "Januari 2027",
            schedule: "TBA",
            note: "",
        },
    ],
    mainInfo: [
        { icon: Calendar, label: "Tanggal Mulai", value: "04 Mei 2026" },
        { icon: Layers, label: "Durasi", value: "8 Sesi" },
        { icon: CalendarClock, label: "Frekuensi", value: "2x per minggu" },
        { icon: Clock, label: "Durasi per sesi", value: "Maks. 2 jam" },
        { icon: Video, label: "Format", value: "Live Online (Zoom + Rekaman)" },
    ],
    timeline: [
        { week: "Sesi 1 & 2", title: "04 & 07 Mei 2026" },
        { week: "Sesi 3 & 4", title: "11 & 14 Mei 2026" },
        { week: "Sesi 5 & 6", title: "18 & 21 Mei 2026" },
        { week: "Sesi 7 & 8", title: "25 & 28 Mei 2026" },
    ]
};

// ── Features ─────────────────────────────────────────
export interface Feature {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export const featuresSection = {
    label: "YANG KAMU DAPATKAN",
    title: "Semua yang kamu butuhkan untuk mulai.",
    features: [
        { icon: Video, title: "Praktik Langsung", desc: "Belajar langsung lewat praktik, bukan teori." },
        { icon: MessageCircle, title: "Real-Time Mentoring", desc: "Mentoring real-time saat kamu stuck." },
        { icon: Users, title: "Akses Komunitas", desc: "Komunitas untuk diskusi & sharing." },
        { icon: Library, title: "Rekaman Lifetime", desc: "Akses rekaman tanpa batas waktu." },
    ] as Feature[],
};

// ── Mentor ───────────────────────────────────────────
export const mentorSection = {
    label: "MENTOR",
    title: "Belajar Langsung dari Praktisi Web Development & AI",
    name: "Aditya Fakhri Riansyah",
    role: "Web Developer & Mentor",
    photo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778144134318-frxql8.webp",
    bio: "Web & Mobile Developer, Mentor Pemrograman, dan Pembicara Teknologi. Lulusan Terbaik Universitas Widyatama & Program Bangkit 2023. Aktif di Google Developer Groups Bandung dan telah membimbing ratusan peserta dari nol hingga siap berkarya di dunia digital.",
    yangPalingPenting: "Cara ngajarnya ringan, jelas, dan gampang dicerna — bahkan buat kamu yang baru mulai atau gak punya background IT.",
    highlightsIntro: "Mentor kamu bukan sekadar pengajar — tapi seorang Web Developer dan AI Builder profesional yang udah punya:",
    highlights: [
        "5+ tahun pengalaman nyata di industri Web Development",
        "Hands-on sebagai Full-Stack Developer di berbagai proyek nyata",
        "Spesialisasi kuat di AI-powered app development dengan fondasi teknis yang solid",
        "Lulusan Terbaik di Universitas Widyatama & Google Bangkit Academy 2023",
        "Aktif mengajar di CODEPOLITAN dan komunitas Google Developer Groups Bandung",
    ],
    chips: [
        { icon: Code, label: "Web & Mobile Developer" },
        { icon: GraduationCap, label: "Mentor di CODEPOLITAN" },
        { icon: Award, label: "Lulusan Terbaik Bangkit 2023" },
    ] as { icon: LucideIcon; label: string }[],
    socials: [
        { icon: Instagram, label: "Instagram", href: "https://instagram.com/adityafakhrii" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/adityafakhrii/" },
        { icon: Github, label: "GitHub", href: "https://github.com/adityafakhrii" },
        { icon: ExternalLink, label: "Website", href: "https://adityafakhri.com" },
    ] as { icon: LucideIcon; label: string; href: string }[],
    organizations: [
        {
            name: "CODEPOLITAN",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778142629573-eetalh.webp",
        },
        {
            name: "RuangAI",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778144021253-sf0vwo.webp",
        },
        {
            name: "GDG Bandung",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778378613559-kfjaoi.webp",
        },
        {
            name: "Bangkit",
            logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Bangkit-logo.png",
        },
    ],
};

export interface Tool {
    name: string;
    logo: string;
    href: string;
}

export const toolsSection = {
    label: "TOOLS",
    title: "Tools yang dipakai builder hari ini.",
    subtitle: "Bukan tools lama — tapi stack modern untuk build cepat.",
    tools: [
        {
            name: "Lovable",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778389479197-fdu8fo.webp",
            href: "https://lovable.dev/",
        },
        {
            name: "Bolt.new",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778389478680-fz9xj5.webp",
            href: "https://bolt.new/",
        },
        {
            name: "Base44",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778389478021-mief81.webp",
            href: "https://base44.com/",
        },
        {
            name: "v0",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778389477190-r7ch0w.webp",
            href: "https://v0.app/",
        },
        {
            name: "Google Antigravity",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778389476254-fypjcx.webp",
            href: "https://antigravity.google/",
        },
        {
            name: "Git",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778389475550-dd9s4k.webp",
            href: "https://git-scm.com/",
        },
        {
            name: "GitHub",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778389474622-86brxc.webp",
            href: "https://github.com/",
        },
        {
            name: "Node.js",
            logo: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778389732077-7fhxao.webp",
            href: "https://nodejs.org/en",
        },
    ] as Tool[],
};

// ── Testimonials ─────────────────────────────────────
export interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

export const testimonialsSection = {
    label: "TESTIMONI",
    title: "Hasil nyata, bukan janji.",
    items: [
        {
            quote:
                "Dulu saya bayar developer 15 juta hanya untuk MVP. Sekarang saya bisa membuatnya sendiri dalam 3 hari menggunakan workflow yang diajarkan di sini.",
            name: "Rara Wijaya",
            role: "Founder, Skincare Brand",
        },
        {
            quote:
                "Saya dari background marketing, tidak mengerti coding sama sekali. Selesai bootcamp, saya sudah deploy dashboard internal untuk tim sendiri.",
            name: "Bagas Pratama",
            role: "Marketing Lead",
        },
        {
            quote:
                "Materinya straight to the point. Tidak ada teori bertele-tele — langsung praktek dan hasilnya terlihat setiap sesi.",
            name: "Nadia Salsabila",
            role: "Product Designer",
        },
        {
            quote:
                "Awalnya skeptis karena tidak punya basic IT, tapi cara mengajarnya asyik sekali. Sekarang sedang build MVP aplikasi kasir untuk toko ibu!",
            name: "Budi Santoso",
            role: "Mahasiswa",
        },
        {
            quote:
                "Tidak terasa 8 sesi sudah bisa bikin AI app sendiri. Prompting skill saya meningkat drastis. Sangat direkomendasikan untuk teman-teman non-tech.",
            name: "Amanda Larasati",
            role: "Content Creator",
        },
        {
            quote:
                "Investasi ilmu yang sangat worth it. Daripada menghabiskan waktu menonton tutorial berjam-jam tanpa hasil, di sini langsung dipaksa praktek.",
            name: "Kevin Aditya",
            role: "Freelancer",
        },
        {
            quote:
                "Luar biasa, tools AI zaman sekarang memang game changer. Mentornya sabar sekali mengajarkan dari nol sampai kita benar-benar paham alurnya.",
            name: "Siti Aisyah",
            role: "UMKM Owner",
        },
    ] as Testimonial[],
};

// ── Pricing ──────────────────────────────────────────
export interface PricingPlan {
    name: string;
    badge?: string;
    recommended?: boolean;
    price: string;
    originalPrice: string;
    discount: string;
    subtitle: string;
    includes: string[];
    ctaText: string;
    ctaHref: string;
}

export const pricingSection = {
    label: "HARGA",
    title: "Berapa harga untuk bisa build aplikasi sendiri?",
    subtitle: "Promo khusus batch pertama — jangan sampai tertinggal.",
    urgencyNote: "Kuota terbatas",
    urgencyDetail: "— harga akan naik setelah batch ini terisi penuh.",
    footnote: "Pembayaran sekali. Akses selamanya.",
    plans: [
        {
            name: "Basic",
            price: "Rp649.000",
            originalPrice: "Rp2.000.000",
            discount: "HEMAT 67%",
            subtitle: "Paket standar bootcamp — semua yang kamu butuhkan untuk mulai build.",
            includes: [
                "8x sesi live intensif",
                "Lifetime akses recording",
                "Akses komunitas builder",
                "Mentoring support langsung",
                "Modul terstruktur dari nol",
                "Sertifikat kelulusan",
            ],
            ctaText: "Pilih Paket Basic",
            ctaHref: "https://codepolitan.com",
        },
        {
            name: "Pro",
            badge: "Best Value",
            recommended: true,
            price: "Rp720.000",
            originalPrice: "Rp2.500.000",
            discount: "HEMAT 71%",
            subtitle: "Semua di Basic + bonus eksklusif untuk percepat skill kamu.",
            includes: [
                "8x sesi live intensif",
                "Lifetime akses recording",
                "Akses komunitas builder",
                "Mentoring support langsung",
                "Modul terstruktur dari nol",
                "Sertifikat kelulusan",
                "Bonus: Berbagai materi studi kasus nyata",
                "Bonus: Rekaman webinar premium Vibe Coding (Video CODEPOLITAN)",
            ],
            ctaText: "Pilih Paket Pro",
            ctaHref: "https://codepolitan.com",
        },
    ] as PricingPlan[],
};

// ── FAQ ──────────────────────────────────────────────
export interface FAQItem {
    q: string;
    a: string;
}

export const faqSection = {
    label: "FAQ",
    title: "Masih ada pertanyaan?",
    faqs: [
        {
            q: "Saya benar-benar pemula, bisa ikut?",
            a: "Tentu saja. Bootcamp ini memang dirancang khusus untuk non-tech people. Kamu tidak butuh background coding sama sekali — kami mulai dari nol.",
        },
        {
            q: "Apa harus bisa coding dulu?",
            a: "Tidak. Justru ini bootcamp pertama yang fokus mengajarkan kamu build menggunakan AI tanpa harus memahami syntax. AI yang menulis code-nya, kamu yang mengarahkan.",
        },
        {
            q: "Apakah saya benar-benar bisa bikin aplikasi setelah lulus?",
            a: "Iya. Setiap level kamu akan deploy aplikasi nyata — dari portfolio, POS, sampai AI app. Bukan cuma teori, kamu punya 3 produk live setelah lulus.",
        },
        {
            q: "Kalau saya ketinggalan sesi live, bagaimana?",
            a: "Tenang, semua sesi direkam dan bisa diakses selamanya. Kamu juga bisa bertanya di komunitas atau langsung ke mentor.",
        },
        {
            q: "Tools-nya berbayar tidak?",
            a: "Sebagian besar tools yang kami gunakan memiliki free tier yang cukup untuk belajar. Kalau kamu ingin scale up nantinya, tinggal upgrade sesuai kebutuhan project.",
        },
        {
            q: "Bagaimana cara bayarnya?",
            a: "Setelah klik 'Pilih Paket', kamu akan diarahkan ke halaman pembayaran. Pembayaran sekali, akses selamanya.",
        },
    ] as FAQItem[],
};

// ── Final CTA ────────────────────────────────────────
export const finalCTA = {
    title: "Yang mulai duluan, ",
    titleHighlight: "menang duluan.",
    subtitle: "Batch 1 dimulai 04 Mei. Kalau kamu masih menunggu, orang lain sudah launch duluan.",
    ctaText: "Amankan Slot Sekarang",
    ctaHref: "https://codepolitan.com",
};

// ── Navbar ───────────────────────────────────────────
export const navLinks = [
    { href: "#materi", label: "Materi" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#jadwal", label: "Jadwal" },
    { href: "#mentor", label: "Mentor" },
    { href: "#harga", label: "Harga" },
    { href: "#faq", label: "FAQ" },
];

export const navCTA = {
    text: "Gabung Sekarang",
    href: "https://codepolitan.com",
};

// ── Footer ───────────────────────────────────────────
export const footerSocials = [
    { label: "Instagram", href: "https://instagram.com/codepolitan" },
    { label: "Twitter", href: "https://x.com/codepolitan" },
    { label: "YouTube", href: "https://youtube.com/@codepolitan" },
];
