import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
const NavBar = () => {
  const pageLinkInfo = pageLinks.map(({ href, text, id }) => {
    return (
      <li key={id}>
        <a href={href} className="nav-link">
          {text}
        </a>
      </li>
    );
  });

  const socialLinkInfo = socialLinks.map(({ href, name, id }) => {
    const socialClassName = `fab fa-${name}`;
    return (
      <li key={id}>
        <a href={href} className="nav-icon">
          <i className={socialClassName}></i>
        </a>
      </li>
    );
  });

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinkInfo}
        </ul>

        <ul className="nav-icons">{socialLinkInfo}</ul>
      </div>
    </nav>
  );
};
export default NavBar;
