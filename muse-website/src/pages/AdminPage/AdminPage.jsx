import React from 'react';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <main>
      <header className="hero-container">
        <h2 className="title">Admin Dashboard</h2>
      </header>

      <section className="section section-explore">
        <div className="solid-color-background"></div>
        <h2 className="title">Admin Features</h2>
        <div className="grid">
          <article className="item">
            <h3 className="item-title">Reports</h3>
            <p className="item-description">Different reports that users have submitted.</p>
          </article>
          <article className="item">
            <h3 className="item-title">Post Management</h3>
            <p className="item-description">View posts and delete them if needed.</p>
          </article>
          <article className="item">
            <h3 className="item-title">Warnings</h3>
            <p className="item-description">Issue a warning to a user.</p>
          </article>
        </div>
      </section>

    </main>
  );
};

export default AdminPage;
