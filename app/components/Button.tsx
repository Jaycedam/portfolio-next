export default function Button(props: {
  text: string;
  link: string;
  icon?: JSX.Element;
}) {
  return (
    <a
      className="flex-center h-fit w-fit
        gap-2
        rounded-xl
        bg-zinc-950 px-6 py-2.5
        font-bold 
        text-zinc-100 backdrop-blur-lg transition-all duration-300
        hover:scale-105
        hover:bg-primary hover:shadow-lg
        active:scale-95 dark:bg-zinc-100
        dark:text-zinc-900 dark:hover:text-zinc-100
  
     "
      href={props.link}
    >
      {props.text}
      {/* checks if prop icon exist  */}
      {props.icon && <span>{props.icon}</span>}
    </a>
  );
}
