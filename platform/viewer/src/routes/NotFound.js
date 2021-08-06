import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function NotFound({
  message = 'Sorry, this page does not exist.',
  showGoBackButton = true,
}) {
  const context = useAppContext();

  return (
    <div className={'not-found'}>
      <div>
        <h4>{message}</h4>
        {showGoBackButton && context.appConfig.showStudyList && (
          <h5>
            <a href="https://web.amplifypacs.com">Go back to the Study List</a>
          </h5>
        )}
      </div>
    </div>
  );
}
