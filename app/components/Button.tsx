export default function Button(props: {
  text: string;
  link: string;
  icon?: JSX.Element;
}) {
  return (
    <a
      className="flex-center  w-fit 
        gap-2
        rounded-xl
        bg-zinc-100 px-6
        py-2.5 
        font-bold text-zinc-900 backdrop-blur-lg
        transition-all
        duration-500 hover:scale-105
        hover:bg-primary hover:text-zinc-100
        hover:shadow-lg active:scale-95
  
     "
      href={props.link}
    >
      {props.text}
      {/* checks if prop icon exist  */}
      {props.icon && <span>{props.icon}</span>}
    </a>
  );
}
