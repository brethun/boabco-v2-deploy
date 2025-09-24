import React from 'react';
import './ComingSoon.css';

interface ComingSoonProps {
  title: string;
  message?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, message }) => {
  return (
    <section className="coming-soon" aria-live="polite">
      <div className="coming-soon__surface">
        <h2 className="coming-soon__title">{title}</h2>
        <p className="coming-soon__message">
          {message ?? 'This area is under construction and will be available soon.'}
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
