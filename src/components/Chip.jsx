export function Chip({ children }) {
  return <span className="chip">{children}</span>
}

export function ChipRow({ items, className = '' }) {
  return (
    <div className={`tagrow ${className}`.trim()}>
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </div>
  )
}
