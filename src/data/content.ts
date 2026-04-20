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
    type LucideIcon,
} from "lucide-react";

// ── Hero ─────────────────────────────────────────────
export const hero = {
    badge: "Batch 1 dimulai 04 Mei — slot terbatas",
    subtitle: "Punya Ide?",
    titleLine1: "Bangun aplikasi Sendiri",
    // titleLine2: "Pakai AI",
    titleHighlight: "Tanpa Harus Jadi Programmer.",
    description:
        "Dalam 8 sesi, lo bakal ubah ide jadi aplikasi nyata yang bisa dipakai atau dijual — tanpa harus jadi programmer.",
    ctaText: "Gabung Batch 1 Sekarang",
    ctaHref: "https://ruangai.id",
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
    title: "Masalahnya bukan ide lo.",
    subtitle: "Tapi lo gak bisa ngejalanin. Dan akhirnya… semuanya berhenti di kepala.",
    items: [
        {
            icon: Lightbulb,
            title: "Ide Gak Pernah Jadi Produk",
            desc: "Udah kepikiran dari lama, tapi sampai sekarang masih sebatas omongan dan impian.",
        },
        {
            icon: Wallet,
            title: "Hire Developer Mahal & Lama",
            desc: "Ngerjain MVP aja bisa tembus puluhan juta, dan belum tentu hasilnya langsung bisa dipakai.",
        },
        {
            icon: Bot,
            title: "Gak Tau Cara Pakai AI",
            desc: "AI banyak, tapi lo butuh workflow nyata buat eksekusi dari nol sampai deploy.",
        },
        {
            icon: Code2,
            title: "Belajar Coding Kelamaan",
            desc: "Syntax bikin pusing. Waktu lo habis muter-muter belajar teori yang gak nyelesaiin produk lo.",
        },
    ] as ProblemItem[],
};

// ── Solution ─────────────────────────────────────────
export const solutionSection = {
    label: "SOLUSINYA",
    title: "Di sini lo gak belajar coding.",
    titleHighlight: "Lo belajar bikin produk.",
    titleSuffix: "",
    description:
        "Keluar dari sini, lo bawa skill praktis untuk ngubah ide apa pun jadi aplikasi nyata yang siap dirilis ke market.",
    points: [
        "Dari ide → jadi aplikasi live",
        "Dari nol → bisa dipakai orang",
        "Dari bingung → punya sistem rilis jelas",
        "Mentoring langsung dari real builder",
    ],
    steps: [
        { tag: "01 · IDE", text: "Aplikasi tracking ibadah harian" },
        { tag: "02 · AI", text: "Generate UI + database schema" },
        { tag: "03 · BUILD", text: "Iterate fitur bareng AI agent" },
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
    title: "Keluar dari sini, lo bawa hasil.",
    subtitle: "Bukan cuma ngerti — tapi punya 3 project nyata yang bisa lo pakai, pamerin, atau jual.",
    levels: [
        {
            level: "Level 1",
            icon: Globe,
            title: "Portfolio Website",
            desc: "Punya website personal / company profile profesional yang udah live dan bisa diakses publik secara instan.",
            tags: ["Landing Page", "Deploy Cepat", "Responsive"],
        },
        {
            level: "Level 2",
            icon: Store,
            title: "Biz POS System",
            desc: "Aplikasi kasir & dashboard bisnis beroperasi penuh, dilengkapi sistem database dan analytics nyata.",
            tags: ["Database", "Auth", "Produk Internal"],
        },
        {
            level: "Level 3",
            icon: Sparkles,
            title: "Full AI SaaS",
            desc: "Sistem aplikasi cerdas yang langsung nyambung dengan engine AI — persis seperti ChatGPT custom.",
            tags: ["LLM Integration", "SaaS Model", "Market-Ready"],
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
    title: "Udah kita susun. ",
    titleHighlight: "Tinggal lo jalanin.",
    subtitle:
        "Dalam 8 sesi, lo akan dibimbing dari nol sampai punya aplikasi berbasis AI.",
    bonusTitle: "Best Project Award",
    bonusDesc:
        "Peserta dengan eksekusi project terbaik akan mendapatkan reward direct dari kita.",
    sessions: [
        {
            n: 1,
            icon: Lightbulb,
            title: "Mindset & Idea Validation",
            desc: "Ubah cara lo melihat coding dan breakdown ide jadi struktur aplikasi.",
            output: "Ide project + struktur jelas",
        },
        {
            n: 2,
            icon: Sparkles,
            title: "Prompting Skill",
            desc: "Belajar cara 'ngomong' ke AI biar bisa generate aplikasi sesuai keinginan.",
            output: "Prompt siap pakai",
        },
        {
            n: 3,
            icon: Monitor,
            title: "Build Landing Page",
            desc: "Bikin landing page profesional untuk produk lo.",
            output: "Landing page live",
        },
        {
            n: 4,
            icon: AppWindow,
            title: "Build Web App",
            desc: "Mulai bangun aplikasi utama dari nol pakai AI.",
            output: "Web app basic",
        },
        {
            n: 5,
            icon: Bot,
            title: "AI Integration",
            desc: "Tambahin fitur AI biar aplikasi lo lebih pintar.",
            output: "AI-powered feature",
        },
        {
            n: 6,
            icon: Sliders,
            title: "Improvement & Feature Expansion",
            desc: "Upgrade aplikasi jadi lebih usable dan real.",
            output: "App lebih kompleks",
        },
        {
            n: 7,
            icon: Rocket,
            title: "Deploy & Publish",
            desc: "Launch aplikasi lo ke internet.",
            output: "App live + domain",
        },
        {
            n: 8,
            icon: Trophy,
            title: "Monetization & Showcase",
            desc: "Belajar cara jual / manfaatin aplikasi lo.",
            output: "Project siap dipakai / dijual",
        },
    ] as Session[],
};

// ── Schedule & Timeline ──────────────────────────────
export const scheduleSection = {
    label: "JADWAL & TIMELINE",
    title: "Jadwal Program",
    subtitle: "Format jelas, waktu fleksibel, dan bisa diikuti siapa aja.",
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
    label: "YANG LO DAPETIN",
    title: "Semua yang lo butuhin buat mulai.",
    features: [
        { icon: Video, title: "Praktik Langsung", desc: "Belajar langsung lewat praktik, bukan teori." },
        { icon: MessageCircle, title: "Real-Time Mentoring", desc: "Mentoring real-time saat lo stuck." },
        { icon: Users, title: "Akses Komunitas", desc: "Komunitas buat diskusi & sharing." },
        { icon: Library, title: "Rekaman Lifetime", desc: "Akses rekaman tanpa batas." },
    ] as Feature[],
};

// ── Mentor ───────────────────────────────────────────
export const mentorSection = {
    label: "MENTOR",
    title: "Belajar langsung dari builder.",
    name: "Aditya Fakhri Riansyah",
    role: "Web Developer & Mentor — CODEPOLITAN",
    photo: "https://www.adityafakhri.com/foto-adit.webp",
    bio: "Fokusnya bukan ngajarin teori. Tapi bikin lo beneran bisa build.",
    chips: [
        { icon: Code, label: "Web Developer" },
        { icon: GraduationCap, label: "Mentor di CODEPOLITAN" },
        { icon: Award, label: "Builder real-world apps" },
    ] as { icon: LucideIcon; label: string }[],
};

// ── Tools ────────────────────────────────────────────
export const toolsSection = {
    label: "TOOLS",
    title: "Tools yang dipakai builder hari ini.",
    subtitle: "Bukan tools lama — tapi stack modern buat build cepat.",
    tools: ["Lovable", "Bolt.new", "Base44", "v0", "Google Antigravity", "Git", "GitHub", "NPM"],
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
                "Dulu gue bayar developer 15 juta cuma buat MVP. Sekarang gue bisa bikin sendiri dalam 3 hari pakai workflow yang diajarin di sini.",
            name: "Rara Wijaya",
            role: "Founder, Skincare Brand",
        },
        {
            quote:
                "Gue background marketing, gak ngerti coding sama sekali. Selesai bootcamp, gue udah deploy dashboard internal buat tim sendiri.",
            name: "Bagas Pratama",
            role: "Marketing Lead",
        },
        {
            quote:
                "Materinya straight to the point. Gak ada teori bertele-tele — langsung praktek dan hasilnya kelihatan tiap sesi.",
            name: "Nadia Salsabila",
            role: "Product Designer",
        },
        {
            quote:
                "Awalnya skeptis karena nggak punya basic IT, tapi cara ngajarnya asik banget. Sekarang lagi build MVP aplikasi kasir buat toko nyokap!",
            name: "Budi Santoso",
            role: "Mahasiswa",
        },
        {
            quote:
                "Gak kerasa 8 sesi udah bisa bikin AI app sendiri. Prompting skill gue naik drastis. Recommended banget buat temen-temen non-tech.",
            name: "Amanda Larasati",
            role: "Content Creator",
        },
        {
            quote:
                "Investasi ilmu yang worth it parah. Daripada ngabisin waktu nonton tutorial berjam-jam tapi ngga ada hasil, di sini dipaksa praktek.",
            name: "Kevin Aditya",
            role: "Freelancer",
        },
        {
            quote:
                "Gila sih, tools AI jaman sekarang emang game changer. Mentornya sabar banget ngajarin dari nol sampe kita beneran ngerti alurnya.",
            name: "Siti Aisyah",
            role: "UMKM Owner",
        },
    ] as Testimonial[],
};

// ── Pricing ──────────────────────────────────────────
export const pricingSection = {
    label: "HARGA",
    title: "Berapa harga buat bisa build aplikasi sendiri?",
    badgeText: "Promo Early Bird — Slot Terbatas",
    planTitle: "Vibe Coding Bootcamp",
    planSubtitle: "Lebih murah dari bayar developer sekali.",
    price: "Rp700.000",
    originalPrice: "Rp2.000.000",
    discount: "HEMAT 65%",
    urgencyNote: "Slot terbatas",
    urgencyDetail: "— harga akan naik setelah batch ini terisi penuh.",
    ctaText: "Amankan Slot Sekarang",
    ctaHref: "https://ruangai.id",
    footnote: "Pembayaran sekali. Akses selamanya.",
    includes: [
        "8x sesi live intensif",
        "Lifetime akses recording",
        "Akses komunitas builder",
        "Mentoring support langsung",
        "Modul terstruktur dari nol",
        "Sertifikat kelulusan",
    ],
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
            q: "Gue bener-bener pemula, bisa ikut?",
            a: "Bisa banget. Bootcamp ini emang dirancang khusus buat non-tech people. Lo gak butuh background coding sama sekali — kita mulai dari nol.",
        },
        {
            q: "Apa harus bisa coding dulu?",
            a: "Tidak. Justru ini bootcamp pertama yang fokus ngajarin lo build pakai AI tanpa harus ngerti syntax. AI yang nulis codenya, lo yang ngarahin.",
        },
        {
            q: "Apakah gue beneran bisa bikin aplikasi setelah lulus?",
            a: "Iya. Setiap level lo akan deploy aplikasi nyata — dari portfolio, POS, sampai AI app. Gak cuma teori, lo punya 3 produk live setelah lulus.",
        },
        {
            q: "Kalau gue ketinggalan sesi live gimana?",
            a: "Tenang, semua sesi direkam dan bisa diakses selamanya. Lo juga bisa nanya di komunitas atau langsung ke mentor.",
        },
        {
            q: "Tools-nya berbayar gak?",
            a: "Mostly tools yang kita pakai punya free tier yang cukup buat belajar. Kalau lo mau scale up nanti tinggal upgrade sesuai kebutuhan project.",
        },
        {
            q: "Gimana cara bayarnya?",
            a: "Setelah klik 'Amankan Slot Sekarang', lo akan diarahkan ke halaman pembayaran. Pembayaran sekali, akses selamanya.",
        },
    ] as FAQItem[],
};

// ── Final CTA ────────────────────────────────────────
export const finalCTA = {
    title: "Yang mulai duluan, ",
    titleHighlight: "menang duluan.",
    subtitle: "Batch 1 dimulai 04 Mei. Kalau lo masih nunggu, orang lain udah launch duluan.",
    ctaText: "Amankan Slot Sekarang",
    ctaHref: "https://ruangai.id",
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
    href: "https://ruangai.id",
};

// ── Footer ───────────────────────────────────────────
export const footerSocials = [
    { label: "Instagram", href: "https://instagram.com/codepolitan" },
    { label: "Twitter", href: "https://x.com/codepolitan" },
    { label: "YouTube", href: "https://youtube.com/@codepolitan" },
];
