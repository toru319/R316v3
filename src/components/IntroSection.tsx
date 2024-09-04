import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

const IntroSection: React.FC = () => {
  const [daysCount, setDaysCount] = useState(0);

  useEffect(() => {
    const startDate = new Date('2022-09-26');
    const today = new Date();
    const daysPassed = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1);
    setDaysCount(daysPassed);
  }, []);

  return (
    <section className="intro row">
    <Row>
      <Col md={4} className="text-center mb-4 mb-md-0">
        <h1 className="display-4">Welcome to R316!</h1>
        <p>2人が出会ってから <span id="days-count">{daysCount}</span> 日目</p>
      </Col>
      <Col md={8}>
        <Carousel id="slideshow">
          <Carousel.Item>
            <img className="d-block w-100" src="/IMG_8945.JPG" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/IMG_9496.JPG" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/IMG_9680.JPG" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    </section>
  );
};

export default IntroSection;