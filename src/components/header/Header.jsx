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

  /*=============== Close Menu on Outside Click ===============*/
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.nav__menu');
      const toggle = document.querySelector('.nav__toggle');
      
      if (Toggle && menu && !menu.contains(event.target) && !toggle?.contains(event.target)) {
        showMenu(false);
      }
    };

    if (Toggle) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [Toggle]);

  return (
    <header className='header'>
      {Toggle && <div className='nav__overlay' onClick={() => showMenu(false)}></div>}
      <nav className='nav container'>
        <a href='/' className='nav__logo'>
          Faaz
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a
                href='#home'
                onClick={() => {
                  setActiveNav('#home');
                  showMenu(false);
                }}
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
                onClick={() => {
                  setActiveNav('#about');
                  showMenu(false);
                }}
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
                onClick={() => {
                  setActiveNav('#skills');
                  showMenu(false);
                }}
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
                onClick={() => {
                  setActiveNav('#services');
                  showMenu(false);
                }}
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
                onClick={() => {
                  setActiveNav('#qualification');
                  showMenu(false);
                }}
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
                onClick={() => {
                  setActiveNav('#portfolio');
                  showMenu(false);
                }}
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
                onClick={() => {
                  setActiveNav('#contact');
                  showMenu(false);
                }}
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
            onClick={() => showMenu(false)}
          ></i>
        </div>

        <div className='nav__right'>
          <ThemeToggle />
          <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
            <i className={Toggle ? 'uil uil-times' : 'uil uil-bars'}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
