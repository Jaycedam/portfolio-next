export default function Button(props: {
  text?: string;
  link: string;
  icon?: JSX.Element;
}) {
  return (
    <a
      className="flex h-10 w-fit cursor-pointer items-center gap-2 rounded-md
        bg-zinc-900 px-3
        font-bold
         text-zinc-50 transition-all
        duration-300 hover:bg-primary hover:text-zinc-50 focus:bg-primary focus:text-zinc-50  active:scale-95 
        
        dark:bg-zinc-100 dark:text-zinc-900
        dark:hover:bg-primary dark:hover:text-zinc-50 dark:focus:bg-primary dark:focus:text-zinc-50"
      href={props.link}
    >
      {props.text && props.text}
      {/* checks if prop icon exist  */}
      {props.icon && <span>{props.icon}</span>}
    </a>
  );
}
