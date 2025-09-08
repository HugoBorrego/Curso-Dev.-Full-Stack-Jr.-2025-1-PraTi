import './SkeletonCard.css'

export const SkeletonCard = () => (
  <div className="card skeleton" aria-hidden="true">
    <div className="image-wrapper skeleton-box" />
    <div className="text skeleton-box" style={{ height: "1rem", width: "80%" }} />
    <div className="text skeleton-box" style={{ height: "1rem", width: "60%" }} />
  </div>
)