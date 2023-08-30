import "./style.css";
import reactSVG from '../../assets/images/react.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="bottom">
        Clicky Game! <img alt="react" src={reactSVG} />
      </div>
    </footer>
  );
}

export default Footer;
