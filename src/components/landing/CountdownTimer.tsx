import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const STORAGE_KEY = "vcb_promo_deadline";
const DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const getDeadline = () => {
  if (typeof window === "undefined") return Date.now() + DURATION_MS;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const t = parseInt(stored, 10);
    if (!Number.isNaN(t) && t > Date.now()) return t;
  }
  const t = Date.now() + DURATION_MS;
  localStorage.setItem(STORAGE_KEY, String(t));
  return t;
};

const calc = (deadline: number): TimeLeft => {
  const diff = Math.max(0, deadline - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n: number) => n.toString().padStart(2, "0");

export const CountdownTimer = () => {
  const [deadline] = useState(getDeadline);
  const [time, setTime] = useState<TimeLeft>(() => calc(deadline));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(deadline)), 1000);
    return () => clearInterval(id);
  }, [deadline]);

  const blocks = [
    { label: "Hari", value: pad(time.days) },
    { label: "Jam", value: pad(time.hours) },
    { label: "Menit", value: pad(time.minutes) },
    { label: "Detik", value: pad(time.seconds) },
  ];

  return (
    <div className="max-w-2xl mx-auto mb-10">
      <div className="glass rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
        <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1 text-center sm:text-left shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand/15 border border-border/60">
            <Timer className="h-5 w-5 text-foreground" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-blue">
              Promo Berakhir Dalam
            </p>
            <p className="text-xs text-muted-foreground hidden sm:block mt-0.5">
              Setelah ini, harga balik normal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 flex-1 w-full">
          {blocks.map((b) => (
            <div
              key={b.label}
              className="rounded-xl border border-border/60 bg-background/40 px-2 py-3 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums text-foreground">
                {b.value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {b.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
