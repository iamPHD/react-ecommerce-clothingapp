import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory-component';
/**
 * 
 * See HomePage class is so abstract.
 * It doesn't contain any data. It is a simple functional Component
 */
const HomePage = () => (
    <div className='homepage'>
      <Directory/>
    </div>
  );

export default HomePage;