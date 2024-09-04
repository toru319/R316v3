import React from 'react';
import { Container } from 'react-bootstrap';
import IntroSection from './IntroSection';
import NotificationsSection from './NotificationsSection';
import ContentSection from './ContentSection';

const MainContent: React.FC = () => {
  return (
    <Container id="main-content" className="mt-4" role="main">
      <IntroSection />
      <NotificationsSection />
      <ContentSection />
    </Container>
  );
};

export default MainContent;