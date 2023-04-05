export default function TimelineCard(props) {
  // use with a ul wrapper
  return (
    <li className="theme-card">
      <div className="flex items-center gap-2">
        <h2 className="font-extrabold text-lg">{props.title}</h2>
        <h3 className="text-sm font-light">{props.date}</h3>
      </div>
      <p>{props.desc}</p>
    </li>
  );
}
