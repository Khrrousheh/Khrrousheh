import { useEffect, useState } from "react";
import { roles } from '../data/portfolio'

export default function HeroRole() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let timeout;

    const currentRole = roles[roleIndex];

    const typeDuration = 1000; // 1s
    const eraseDuration = 1000; // 1s
    const holdDuration = 3000; // 3s

    const typeSpeed = typeDuration / currentRole.length;
    const eraseSpeed = eraseDuration / currentRole.length;

    const typeText = (i = 0) => {
      if (i <= currentRole.length) {
        setText(currentRole.slice(0, i));
        timeout = setTimeout(() => typeText(i + 1), typeSpeed);
      } else {
        timeout = setTimeout(() => eraseText(currentRole.length), holdDuration);
      }
    };

    const eraseText = (i) => {
      if (i >= 0) {
        setText(currentRole.slice(0, i));
        timeout = setTimeout(() => eraseText(i - 1), eraseSpeed);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, [roleIndex]);

  return (
    <div className="hero-eyebrow font-mono">
      <span className="key text-zinc-400">role:</span>{" "}
      <span className="val text-cyan-400">
        "{text}"
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
}