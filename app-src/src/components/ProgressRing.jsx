export function ProgressRing({ value, label }) {
  return (
    <div className="progress-ring" style={{ "--progress": `${value}%` }} aria-label={`${label}: ${value}%`}>
      <div>
        <strong>{value}%</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}
