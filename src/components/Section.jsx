export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={className}>
      <div className="wrap">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  )
}
