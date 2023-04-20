export default function Button(props) {
  return (
    <a
      className="flex-center w-fit gap-2 rounded-lg bg-zinc-950
      px-6 py-2.5 font-bold text-zinc-100 shadow-lg
      transition-all duration-200
  
      ease-in-out hover:scale-110 hover:bg-primary hover:text-zinc-100
      active:scale-95 dark:bg-zinc-100 dark:text-zinc-900"
      href={props.link}
    >
      {props.text}
      {/* checks if prop icon exist  */}
      {props.icon && <span>{props.icon}</span>}
    </a>
  );
}
