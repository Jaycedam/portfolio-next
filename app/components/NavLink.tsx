export default function NavLink(props: {
  href: string;
  text: string;
  icon?: JSX.Element;
}) {
  return (
    // use inside ul
    <li>
      <a
        href={props.href}
        className="close-nav relative isolate rounded-lg p-3 text-xl
            transition-all duration-300 after:absolute
            after:inset-0 after:-z-10 after:h-full 
            after:w-full after:scale-75 after:rounded-xl after:bg-zinc-950
            after:opacity-0 after:transition-all after:duration-300 hover:text-zinc-100 
            after:hover:scale-100 after:hover:opacity-100 dark:after:bg-zinc-100
            dark:hover:text-zinc-900 md:text-sm 
            "
      >
        {props.text}
        <span>{props.icon && props.icon}</span>
      </a>
    </li>
  );
}
