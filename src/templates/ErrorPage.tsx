import React from 'react';

interface LoadingPageProps {
  message?: string;
}

const ErrorPage: React.FC<LoadingPageProps> = ({ message }) => {
  return (
    <section className="error-container">
      <div className="error-message">Error:</div>
      {message && <div className="error-message">{message}</div>}
    </section>
  );
};

export default ErrorPage;
