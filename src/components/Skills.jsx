export default function Skills({ skills, compact = false }) {
  return (
    <div className={`skill-container ${compact ? 'compact' : ''}`}>
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag">{skill}</span>
      ))}
    </div>
  );
}