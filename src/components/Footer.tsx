import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-5 py-3 text-center">
      © {new Date().getFullYear()} R316. All rights reserved.
    </footer>
  );
};

export default Footer;