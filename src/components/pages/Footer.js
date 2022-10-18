import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTiktok
} from 'react-icons/fa';
import '../style/Footer.css';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              GMCO LIVE
            </Link>
          </div>
          <small className='website-rights'>GMCO © 2021</small>
          <div className='social-icons'>
            <a href='https://web.facebook.com/profile.php?id=100067509763569'
              className='social-icon-link'   
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a href='https://www.instagram.com/gmco_ugm/'
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a href ='https://www.youtube.com/channel/UC0VSyJsls-u84buKVgWsBUA'
              className='social-icon-link'           
              aria-label='Youtube'
            >
              <FaYoutube />
            </a>
            <a href = 'https://twitter.com/GMCO_UGM'
              className='social-icon-link'            
              aria-label='Twitter'
            >
              <FaTwitter />
            </a>
            <a href='https://www.tiktok.com/@gmco_ugm?_d=secCgYIASAHKAESPgo8sIjC9zeCD3utrAITUYTQQD1Z9WTXp8x75cuQiE%2F3cuE1mlSSlyesnwt0ZaVZFhe0Okuy23RvewL8B%2FsIGgA%3D&_r=1&language=id&sec_uid=MS4wLjABAAAATk2x-fE0dRNtPd2iuDBPo0G9_fvyTRA1flQkqCaNQAnkF2EjJqZgeAgIdQ1vYi08&sec_user_id=MS4wLjABAAAATk2x-fE0dRNtPd2iuDBPo0G9_fvyTRA1flQkqCaNQAnkF2EjJqZgeAgIdQ1vYi08&share_app_id=1180&share_author_id=7060488239874704410&share_link_id=f19f4924-7342-4e18-b7db-515e8e2bf446&source=h5_t&timestamp=1650707387&u_code=e04415a66hhkcm&ugbiz_name=Account&user_id=7060488239874704410&utm_campaign=client_share&utm_medium=android&utm_source=copy'
              className='social-icon-link'            
              aria-label='LinkedIn'
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
