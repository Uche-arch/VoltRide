import { cn } from "@/lib/utils";

export interface StatItem {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats?: StatItem[];
  className?: string;
}

const defaultStats: StatItem[] = [
  { value: "120 km/h", label: "Top Speed" },
  { value: "100 km", label: "Battery Range" },
  { value: "2 - 3 hrs", label: "Charge Time" },
];

export function StatsBar({ stats = defaultStats, className }: StatsBarProps) {
  return (
    <div
      className={cn(
        "w-full max-w-lg rounded-2xl border border-white/40 bg-white/30 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/20",
        className,
      )}
    >
      <div className="grid grid-cols-3 gap-2 text-center sm:gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center justify-center px-2",
              index === 1 &&
                "border-x border-slate-900/10 dark:border-white/10",
            )}
          >
            <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
              {stat.value}
            </span>
            <span className="text-xs capitalize text-slate-600 sm:text-sm dark:text-slate-300">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
