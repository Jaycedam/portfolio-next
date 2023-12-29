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
        className="close-nav relative isolate rounded-md p-3 text-xl text-zinc-800 transition-all
            duration-300 after:absolute after:inset-0
            after:-z-10 after:h-full hover:text-primary 
           
            dark:text-zinc-400 dark:hover:text-zinc-50 md:text-sm"
      >
        {props.text}
        <span>{props.icon && props.icon}</span>
      </a>
    </li>
  );
}
