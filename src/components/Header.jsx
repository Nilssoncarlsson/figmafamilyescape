function Header() {
    return (
      <div className="header">
        <img src="/path-to-logo.png" alt="FamilyEscapes Logo" />
        <div className="search-bar">
          <input type="text" placeholder="destination" />
          <input type="text" placeholder="gäster?" />
          <input type="date" placeholder="datum?" />
          <button>sök</button>
        </div>
        <div className="profile-icon">...</div>
      </div>
    );
  }
  