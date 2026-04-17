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
    type LucideIcon,
} from "lucide-react";

// ── Hero ─────────────────────────────────────────────
export const hero = {
    badge: "Batch baru dibuka",
    subtitle: "Punya Ide Aplikasi Tapi Gak Bisa Coding?",
    titleLine1: "Bangun Sendiri",
    titleLine2: "Pakai AI",
    description:
        "Bootcamp intensif 8 sesi untuk bantu lo ubah ide jadi aplikasi nyata — tanpa harus jadi programmer.",
    ctaText: "Gabung Bootcamp Sekarang",
    ctaHref: "https://ruangai.id",
    secondaryText: "Lihat Materi",
    secondaryHref: "#materi",
};

// ── Problem ──────────────────────────────────────────
export interface ProblemItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export const problemSection = {
    label: "MASALAHNYA",
    title: "Lo bukan satu-satunya yang stuck.",
    subtitle: "Ribuan founder pemula ngalamin hal yang sama persis kayak lo sekarang.",
    items: [
        {
            icon: Code2,
            title: "Gak Bisa Coding",
            desc: "Mau belajar dari nol kelamaan, syntax bikin pusing, gak tau mulai dari mana.",
        },
        {
            icon: Wallet,
            title: "Hire Developer Mahal",
            desc: "Ngerjain MVP aja bisa tembus puluhan juta. Belum tentu hasilnya sesuai ekspektasi.",
        },
        {
            icon: Bot,
            title: "Bingung Pakai AI",
            desc: "Tools AI banyak banget, tapi gak tau workflow yang bener buat bikin produk jadi.",
        },
        {
            icon: Lightbulb,
            title: "Ide Cuma di Kepala",
            desc: "Udah validasi ke temen, semua bilang keren. Tapi sampai sekarang masih nol baris kode.",
        },
    ] as ProblemItem[],
};

// ── Solution ─────────────────────────────────────────
export const solutionSection = {
    label: "SOLUSINYA",
    title: "Bootcamp yang ngajarin lo",
    titleHighlight: "build aplikasi",
    titleSuffix: ", bukan cuma teori.",
    description:
        "Lo bakal punya skill praktikal buat ngubah ide jadi produk yang bisa dipake user — pakai stack AI modern yang lagi dipake startup di luar sana.",
    points: [
        "Workflow nyata dari ide → prototype → aplikasi live",
        "Belajar pakai AI tools yang dipakai builder beneran",
        "Bukan teori — tiap sesi lo build sesuatu yang bisa dipake",
        "Mentoring langsung kalau lo stuck di project lo",
    ],
    steps: [
        { tag: "01 · IDE", text: "Aplikasi tracking ibadah harian" },
        { tag: "02 · AI", text: "Generate UI + database schema" },
        { tag: "03 · BUILD", text: "Iterate fitur sambil ngobrol sama AI" },
        { tag: "04 · SHIP", text: "Deploy & share link ke user" },
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
    title: "Lulus dengan 3 aplikasi nyata.",
    subtitle: "Bukan tutorial hell — tiap level lo deploy produk yang bisa lo pamerin.",
    levels: [
        {
            level: "Level 1",
            icon: Globe,
            title: "Portfolio Website",
            desc: "Bangun website portfolio personal yang clean & modern. Foundation buat ngerti gimana web bekerja.",
            tags: ["HTML/CSS dasar", "Deploy ke domain", "Responsive"],
        },
        {
            level: "Level 2",
            icon: Store,
            title: "Aplikasi Produk (POS)",
            desc: "Bikin Point-of-Sale system lengkap dengan database, login, dan dashboard penjualan.",
            tags: ["Database", "Auth", "CRUD"],
        },
        {
            level: "Level 3",
            icon: Sparkles,
            title: "AI-Powered Apps",
            desc: "Build produk AI nyata: Falaah (Ibadah Tracker) & SahurYuk (AI food recommendation).",
            tags: ["LLM Integration", "Recommendation", "Real product"],
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
    label: "Roadmap Bootcamp",
    title: "Lo Gak Akan Bingung Mulai dari Mana —",
    titleHighlight: "Kita Udah Susun Step-by-Step",
    subtitle:
        "Dalam 8 sesi, lo akan dibimbing dari nol sampai punya aplikasi berbasis AI yang bisa dipakai atau dijual.",
    bonusTitle: "Best Project Award",
    bonusDesc:
        "Peserta dengan project terbaik akan mendapatkan reward dan kesempatan dipromosikan.",
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

// ── Features ─────────────────────────────────────────
export interface Feature {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export const featuresSection = {
    label: "YANG LO DAPETIN",
    title: "Semua yang lo butuhin buat sukses.",
    features: [
        { icon: Video, title: "8x Live Sessions", desc: "Belajar bareng langsung dengan mentor, real-time Q&A." },
        { icon: Library, title: "Lifetime Recording", desc: "Akses semua rekaman selamanya, bisa diulang kapan aja." },
        { icon: Users, title: "Community Access", desc: "Komunitas builder aktif tempat lo nanya & sharing project." },
        { icon: MessageCircle, title: "Mentoring Support", desc: "Stuck di project? Mentor siap bantu via channel khusus." },
        { icon: BookOpen, title: "Structured Modules", desc: "Materi tersusun rapi dari nol sampai siap deploy produk." },
    ] as Feature[],
};

// ── Mentor ───────────────────────────────────────────
export const mentorSection = {
    label: "MENTOR",
    title: "Belajar langsung dari builder.",
    name: "Aditya Fakhri Riansyah",
    role: "Web Developer & Mentor — CODEPOLITAN",
    photo: "https://www.adityafakhri.com/foto-adit.webp",
    bio: "Berpengalaman ngajarin ribuan student dan ngebangun aplikasi real-world. Fokus banget di gimana caranya non-tech people bisa shipping produk pakai AI tools modern.",
    chips: [
        { icon: Code, label: "Web Developer" },
        { icon: GraduationCap, label: "Mentor di CODEPOLITAN" },
        { icon: Award, label: "Builder real-world apps" },
    ] as { icon: LucideIcon; label: string }[],
};

// ── Tools ────────────────────────────────────────────
export const toolsSection = {
    label: "TOOLS",
    title: "Stack modern yang lo akan kuasai.",
    subtitle: "Tools yang dipake builder & startup beneran buat shipping produk.",
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
    title: "Hasil nyata dari alumni.",
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
    ] as Testimonial[],
};

// ── Pricing ──────────────────────────────────────────
export const pricingSection = {
    label: "HARGA",
    title: "Investasi sekali, skill seumur hidup.",
    badgeText: "Promo Early Bird — Slot Terbatas",
    planTitle: "Vibe Coding Bootcamp",
    planSubtitle: "Akses penuh ke semua materi & support.",
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
    title: "Kalau di 2026 lo masih bangun manual,",
    titleHighlight: "lo udah ketinggalan.",
    subtitle: "Era baru udah dimulai. Pertanyaannya: lo mau jadi pemain atau penonton?",
    ctaText: "Gabung Sekarang",
    ctaHref: "https://ruangai.id",
};

// ── Navbar ───────────────────────────────────────────
export const navLinks = [
    { href: "#materi", label: "Materi" },
    { href: "#roadmap", label: "Roadmap" },
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
