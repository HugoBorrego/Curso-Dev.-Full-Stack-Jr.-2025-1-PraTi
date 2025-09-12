export const SkeletonCard = () => (
  <div
    aria-hidden="true"
    className="flex flex-col justify-between min-h-[380px] bg-neutral-800 rounded-lg shadow-md p-4 animate-pulse"
  >
    <div className="flex-1 flex items-center justify-center mb-3">
      <div className="w-full h-[220px] bg-gray-700 rounded-md" />
    </div>
    <div className="h-4 w-4/5 bg-gray-700 rounded mb-2" />
    <div className="h-4 w-3/5 bg-gray-700 rounded" />
  </div>
)
