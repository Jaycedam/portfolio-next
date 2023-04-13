// use inside nav>ul
export default function NavLink(props) {
  return (
    <li>
      <a href={props.href} className="nav-link group">
        {props.name}
        <div className="nav-hover-bar"></div>
      </a>
    </li>
  );
}
