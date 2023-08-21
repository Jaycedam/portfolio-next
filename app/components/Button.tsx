export default function Button(props: {
  text: string;
  link: string;
  icon?: JSX.Element;
}) {
  return (
    <a
      className="flex h-fit w-fit items-center gap-2 rounded-xl
        bg-zinc-900
        px-4 py-2 
        font-bold text-zinc-50 
        transition-all duration-300
        hover:scale-105 hover:bg-primary hover:shadow-lg
        active:scale-95
        dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-primary dark:hover:text-zinc-50"
      href={props.link}
    >
      {props.text}
      {/* checks if prop icon exist  */}
      {props.icon && <span>{props.icon}</span>}
    </a>
  );
}
