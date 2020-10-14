import React from "react";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <article className="sidebar-1">
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3">+</div>
      </article>

      <article className="sidebar-2">
        <section className="sidebar-user">
          <div className="sidebar-user-info">
            <h4>John Idogun</h4>
            <i className="fas fa-chevron-down"></i>
          </div>
          <p className="sidebar-user-info-additional">
            <i className="fas fa-circle"></i>Sharon Robinson
          </p>
          <span className="user-edit-icon">
            <i className="fas fa-edit"></i>
          </span>
        </section>
        <section className="unread">
          <h4 className="unread-header">
            <span className="unread-icons">
              <i className="fas fa-minus"></i>
              <i className="fas fa-minus fa-sm"></i>
              <i className="fas fa-minus fa-xs"></i>
            </span>
            All unread
          </h4>
          <ul>
            <li>
              <a href="/">
                <i className="far fa-comment-dots"></i>Threads
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-at"></i>Mentions & reactions
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-arrow-down"></i>Show more
              </a>
            </li>
          </ul>
        </section>
        <section className="channels">
          <h4 className="channels-header">
            <i className="fas fa-sort-down"></i> Channels
          </h4>
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-hashtag"></i>design-crit
              </a>
            </li>
            <li>
              <a href="/">
                <span className="make-white">
                  <i className="fas fa-hashtag"></i>design-team
                </span>
                <span className="counter">1</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="make-white">
                  <i className="fas fa-circle online"></i>Hubspot
                </span>
              </a>
            </li>
            <li className="active">
              <a href="/">
                <i className="fas fa-hashtag"></i>social-media
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-lock"></i>team-chat
              </a>
            </li>
          </ul>
        </section>
        <section className="direct-messages">
          <h4 className="direct-messages-header">
            <i className="fas fa-sort-down"></i> Direct Messages
          </h4>
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-heart online"></i>slackbot
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-circle online"></i>John Idogun(You)
              </a>
            </li>
            <li>
              <a href="/">
                <span className="make-white">
                  <i className="fas fa-circle offline"></i>
                </span>
                Isabel
              </a>
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
}
