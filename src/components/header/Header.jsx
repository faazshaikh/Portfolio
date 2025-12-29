import React, { useState, useEffect } from 'react';
import './header.css';
import ThemeToggle from '../theme/ThemeToggle';

const Header = () => {
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  /*=============== Change Background Header & Active Nav ===============*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) header.classList.add('scroll-header');
      else header.classList.remove('scroll-header');

      // Update active nav based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav('#' + sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='/' className='nav__logo'>
          Faaz
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a
                href='#home'
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#about'
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#skills'
                onClick={() => setActiveNav('#skills')}
                className={
                  activeNav === '#skills'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#services'
                onClick={() => setActiveNav('#services')}
                className={
                  activeNav === '#services'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-briefcase-alt nav__icon'></i> Services
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#qualification'
                onClick={() => setActiveNav('#qualification')}
                className={
                  activeNav === '#qualification'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-graduation-cap nav__icon'></i> Qualification
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#portfolio'
                onClick={() => setActiveNav('#portfolio')}
                className={
                  activeNav === '#portfolio'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-scenery nav__icon'></i> Projects
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#contact'
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>

          <i
            className='uil uil-times nav__close'
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto', marginRight: '-15rem' }}>
          <ThemeToggle />
          <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
            <i className='uil uil-apps'></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
