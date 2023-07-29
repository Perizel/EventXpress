import React from 'react';

const EventPage = () => {
  return (
    <div className="frameContainer">
      <div className="navbarContainer">
        <div className="logoContainer">
          <img className="eventExpressLogo" src="https://via.placeholder.com/38x48" alt="EventXpress Logo" />
          <div className="eventXpress">EventXpress</div>
        </div>
        <div className="menuContainer">
          <div className="menuItem">Home</div>
          <div className="menuItem">About</div>
          <div className="activeMenuItem">Events</div>
          <div className="menuItem">Account</div>
          <div className="menuItem">Calendar</div>
          <div className="contactMenuItem">Contact Us</div>
        </div>
      </div>
      <div className="userContainer">
        <div className="userIcon"></div>
        <div className="userName">Light XE</div>
      </div>
      {/* Sidebar */}
      <div className="sidebarContainer">
        <div className="sidebarBackground"></div>
        <div className="sidebarContent">
          <div className="userDetails">
            <div className="userGreeting">Hello!</div>
            <div className="userName">Light XE</div>
          </div>
          <div className="sidebarSections">
            <div className="trendingCategorySection">
              <div className="sectionHeader">
                <div className="sectionTitle">Trending Category</div>
                <div className="sectionIcon">chevron-left</div>
              </div>
              <div className="categoryList">
                {/* List of trending categories */}
              </div>
            </div>
            <div className="mostPopularLocationSection">
              <div className="sectionHeader">
                <div className="sectionTitle">Most Popular Location</div>
                <div className="sectionIcon">chevron-left</div>
              </div>
              <div className="locationList">
                {/* List of most popular locations */}
              </div>
            </div>
            <div className="bookedEventsSection">
              <div className="sectionHeader">
                <div className="sectionTitle">Booked Events</div>
                <div className="sectionIcon">chevron-left</div>
              </div>
            </div>
            <div className="eventsHistorySection">
              <div className="sectionHeader">
                <div className="sectionTitle">Events History</div>
                <div className="sectionIcon">chevron-left</div>
              </div>
            </div>
            <div className="accountSettingsSection">
              <div className="sectionHeader">
                <div className="sectionTitle">Account Settings</div>
                <div className="sectionIcon">chevron-left</div>
              </div>
            </div>
          </div>
          <div className="favoriteEventsSection">
            <div className="sectionTitle">Favorite Events</div>
            <div className="favoriteEventList">
              {/* List of favorite events */}
            </div>
          </div>
        </div>
        <div className="addEventButton">
          <div className="addEventIcon"></div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
