export default function Button(props: {
  text?: string;
  link: string;
  icon?: JSX.Element;
}) {
  return (
    <a
      className="flex h-fit w-fit items-center gap-2 rounded-md bg-zinc-800 px-4
        py-2 font-bold
        text-zinc-50 outline 
        outline-1 outline-zinc-50/30 transition-all 
        duration-150
        hover:bg-zinc-600 
        active:scale-95"
      href={props.link}
    >
      {props.text && props.text}
      {/* checks if prop icon exist  */}
      {props.icon && <span>{props.icon}</span>}
    </a>
  );
}
