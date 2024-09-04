import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotificationsSection: React.FC = () => {
  return (
    <section id="notifications" className="mt-5">
      <h2 className="mb-4">お知らせ</h2>
      <ul>
        <li>2024-09-03: R316をリリース。</li>
        <li>2024-09-02: 先輩がバイト入れすぎてれみちゃんに怒られる。</li>
        <li>2024-09-01: ルミエールデート。</li>
      </ul>
      <div className="text-end mt-3">
        <Link to="/notifications">
          <Button variant="outline-primary">一覧を見る</Button>
        </Link>
      </div>
    </section>
  );
};

export default NotificationsSection;