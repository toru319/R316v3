import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ContentSection: React.FC = () => {
  return (
    <section id="content" className="mt-5">
      <h2 className="mb-4">コンテンツ</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title as="h5">R-Quest</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title as="h5">R-Anniversary</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title as="h5">コンテンツ3</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-end mt-3">
        <Link to="/content">
          <Button variant="outline-primary">もっと見る</Button>
        </Link>
      </div>
    </section>
  );
};

export default ContentSection;