import { letterSpacing, breakPoint } from '../../utility/styles';
const currentYear = (new Date()).getFullYear();

const Footer = () => (
  <footer>
    <style jsx>{`
      footer {
        font-size: 14px;
        font-weight: 300;
        letter-spacing: ${letterSpacing}px;
      }

      @media (min-width:${breakPoint}px) {
        footer {
          font-size: 20px;
        }
      }
    `}</style>
    © {currentYear} Helen Shiu. All rights reserved.
  </footer>
);

export default Footer;
