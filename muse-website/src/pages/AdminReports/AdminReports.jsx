import React, { useState, useEffect } from 'react';

const AdminReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Check if admin is authenticated
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("Unauthorized user access ");
      return;
    }
    
    // Fetch reports only if admin is authenticated
    fetchReports(userId);
  }, []);

  const fetchReports = async (userId) => {
    try {
      // Include admin ID in the request headers
      const response = await fetch('http://localhost:8080/report', {
        headers: {
          'userId': userId
        }
      });
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  return (
    <main>
      <header className="hero-container">
        <h2 className="title">Report Page</h2>
      </header>

      <section className="section section-explore">
        <div className="solid-color-background"></div>
        <h2 className="title">Reports page</h2>
        <div className="grid">
          {reports.map(report => (
            <article key={report._id} className="item">
              <h3 className="item-title">Report ID: {report._id}</h3>
              <p className="item-description">Reported by: {report.reporter.username}</p>
              <p className="item-description">Reported user: {report.reported.username}</p>
              <p className="item-description">Reason: {report.reason}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdminReports;
