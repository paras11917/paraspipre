import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'paraspipre',
  //   href: 'https://paraspipre.me',
  // },
  {
    social: 'email',
    link: 'paras11917@gmail.com',
    href: 'mailto:paras11917@gmail.com',
  },
  {
    social: 'github',
    link: 'paras11917',
    href: 'https://github.com/paras11917',
  },
  {
    social: 'linkedin',
    link: 'paras-pipre',
    href: 'https://www.linkedin.com/in/paras-pipre/',
  },
  {
    social: 'twitter',
    link: 'ParasPipre',
    href: 'https://twitter.com/ParasPipre',
  },
  {
    social: 'instagram',
    link: 'paras_pipre',
    href: 'https://www.instagram.com/paras_pipre',
  },
  // {
  //   social: 'polywork',
  //   link: 'nitinranganath',
  //   href: 'https://www.polywork.com/nitinranganath',
  // },
  {
    social: 'telegram',
    link: 'paraspipre',
    href: 'https://t.me/paraspipre',
  },
  // {
  //   social: 'codepen',
  //   link: 'nitinranganath',
  //   href: 'https://codepen.io/itsnitinr',
  // },
  // {
  //   social: 'codesandbox',
  //   link: 'itsnitinr',
  //   href: 'https://codesandbox.io/u/itsnitinr',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
