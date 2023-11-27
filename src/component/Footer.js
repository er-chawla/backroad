import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  const socialLinkInfo = socialLinks.map(({ href, name, id }) => {
    const socialClassName = `fab fa-${name}`;
    return (
      <li key={id}>
        <a href={href} className="footer-icon">
          <i className={socialClassName}></i>
        </a>
      </li>
    );
  });

  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((links) => {
          const { id, href, text } = links;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">{socialLinkInfo}</ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
