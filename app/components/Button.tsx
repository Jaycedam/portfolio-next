export default function Button(props: {
  text: string;
  link: string;
  icon?: JSX.Element;
}) {
  return (
    <a
      className="flex-center w-fit gap-2 rounded-xl
      border-[1px] border-zinc-50/30 
      bg-zinc-500/20 px-6 
      py-2.5 font-bold shadow-xl
      backdrop-blur-lg
  
      transition-all duration-300 ease-in-out 
      hover:scale-105 hover:bg-zinc-300/20
      active:scale-95"
      href={props.link}
    >
      {props.text}
      {/* checks if prop icon exist  */}
      {props.icon && <span>{props.icon}</span>}
    </a>
  );
}
