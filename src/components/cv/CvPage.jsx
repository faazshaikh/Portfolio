import React, { useEffect } from 'react';
import '../../App.css';
import '../theme/theme.css';
import './cv.css';
import ThemeToggle from '../theme/ThemeToggle';
import CV from '../../assets/Faaz_WShaikh_Resume.pdf';

const CvPage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Faaz Shaikh - Resume';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className='cv'>
      <header className='cv__header'>
        <a href='/' className='cv__back'>
          <i className='uil uil-arrow-left'></i> Back to portfolio
        </a>

        <h1 className='cv__title'>Resume</h1>

        <div className='cv__actions'>
          <ThemeToggle />
          <a
            href={CV}
            download='Faaz_Shaikh_Resume.pdf'
            className='button button--flex cv__download'
          >
            Download PDF
            <i className='uil uil-download-alt'></i>
          </a>
        </div>
      </header>

      <main className='cv__viewer'>
        <object
          data={`${CV}#navpanes=0&view=Fit`}
          type='application/pdf'
          className='cv__frame'
          aria-label='Faaz Shaikh resume'
        >
          <div className='cv__fallback'>
            <p>Your browser can't display the PDF here.</p>
            <a href={CV} download='Faaz_Shaikh_Resume.pdf' className='button'>
              Download PDF
            </a>
          </div>
        </object>
      </main>
    </div>
  );
};

export default CvPage;
