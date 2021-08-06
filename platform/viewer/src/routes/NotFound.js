import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function NotFound({
  message = 'Sorry, this page does not exist.',
  showGoBackButton = true,
}) {
  const context = useAppContext();

  const redirectUrl = () => {
    const host = window.parent.location.hostname;
    if (host == 'dicom.store') {
      return 'https://dicom.store/custom_studies';
    } else if (host == 'web.amplifypacs.com') {
      return 'https://web.amplifypacs.com';
    } else {
      return window.parent.location;
    }
  };

  return (
    <div className={'not-found'}>
      <div>
        <h4>{message}</h4>
        {showGoBackButton && context.appConfig.showStudyList && (
          <h5>
            <a href={redirectUrl()}>Go back to the Study List</a>
          </h5>
        )}
      </div>
    </div>
  );
}
