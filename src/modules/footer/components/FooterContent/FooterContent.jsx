import FooterSubscribe from '../FooterSubscribe/FooterSubscribe';
import style from './FooterContent.module.scss';

const FooterContent = () => {
  return (
    <div className={style.footerInformThumb}>
      <h2
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className={style.footerTitle}
      >
        <span className={style.accentMainTitle}>Chocolate</span> a delicious
        cure for a bad day
      </h2>

      <address
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className={style.footerAddress}
      >
        <p className={style.footerText}>Contact us</p>
        <ul className={style.footerContactsList}>
          <li>
            <a className={style.footerLink} href="tel:+380990740841">
              +380 (99) 777-77-77
            </a>
          </li>
          <li>
            <a className={style.footerLink} href="mailto:support@gmail.com">
              supportExample@gmail.com
            </a>
          </li>
        </ul>
      </address>

      <FooterSubscribe />
    </div>
  );
};

export default FooterContent;
