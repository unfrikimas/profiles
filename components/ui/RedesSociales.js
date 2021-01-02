import React from 'react';
import IconFacebook from "../../components/icons/socials/facebook";
import IconInstagram from '../../components/icons/socials/instagram';
import IconLinkedin from '../../components/icons/socials/linkedin';
import IconTwitter from '../../components/icons/socials/twitter';
import IconYoutube from '../../components/icons/socials/youtube';
import IconTikTok from '../../components/icons/socials/tiktok';
import IconPinterest from '../../components/icons/socials/pinterest';
import IconDribbble from '../../components/icons/socials/dribbble';
import IconBehance from '../../components/icons/socials/behance';

const RedesSociales = ({red}) => {

  return (  

    red.redsocial === "facebook" ?
    <a
      className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
      href={`https://www.facebook.com/${red.usuario}`}
      target="_blank"
    >
      <IconFacebook />
    </a>
  : red.redsocial === "instagram" ? 
    <a
      className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
      href={`https://www.instagram.com/${red.usuario}`}
      target="_blank"
    >
      <IconInstagram />
    </a>
    : red.redsocial === "linkedin" ? 
      <a
        className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
        href={`https://www.linkedin.com/in/${red.usuario}`}
        target="_blank"
      >
        <IconLinkedin />
      </a>
      : red.redsocial === "twitter" ? 
        <a
          className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
          href={`https://twitter.com/${red.usuario}`}
          target="_blank"
        >
          <IconTwitter />
        </a>
        : red.redsocial === "youtube" ? 
          <a
            className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
            href={`https://www.youtube.com/c/${red.usuario}`}
            target="_blank"
          >
            <IconYoutube />
          </a>
          : red.redsocial === "tiktok" ? 
            <a
              className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
              href={`https://www.tiktok.com/@${red.usuario}`}
              target="_blank"
            >
              <IconTikTok />
            </a>
            : red.redsocial === "pinterest" ? 
              <a
                className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                href={`https://www.pinterest.es/${red.usuario}`}
                target="_blank"
              >
                <IconPinterest />
              </a>
              : red.redsocial === "dribbble" ? 
                <a
                  className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                  href={`https://dribbble.com/${red.usuario}`}
                  target="_blank"
                >
                  <IconDribbble />
                </a>
                : red.redsocial === "behance" ? 
                  <a
                    className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                    href={`https://www.behance.net/${red.usuario}`}
                    target="_blank"
                  >
                    <IconBehance />
                  </a>

                  : null    
  );
}
 
export default RedesSociales;