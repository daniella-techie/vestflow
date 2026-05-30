export default function ScheduleCardSkeleton() {
  return (
    <div className="card p-5 flex flex-col gap-3 animate-pulse">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-24 rounded bg-white/5" />
          <div className="h-3 w-20 rounded bg-white/5" />
        </div>
        <div className="h-5 w-20 rounded-full bg-white/5" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="h-3 w-12 rounded bg-white/5" />
            <div className="h-3.5 w-28 rounded bg-white/5" />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 mt-1">
        <div className="flex justify-between">
          <div className="h-3 w-10 rounded bg-white/5" />
          <div className="h-3 w-8 rounded bg-white/5" />
        </div>
        <div className="h-1.5 rounded-full bg-white/5" />
      </div>

      <div className="h-3 w-24 rounded bg-white/5 mt-1" />

      <div className="flex gap-2 mt-2">
        <div className="h-7 w-28 rounded-lg bg-white/5" />
      </div>
    </div>
  );
}
