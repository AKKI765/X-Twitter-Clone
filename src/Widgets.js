import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="searchInput">
        <SearchIcon className="searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgetContent">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"759043035355312128"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ufc"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://https://twitter.com/"}
          options={{ text: "UFC", via: "ufc" }}
        />
      </div>
    </div>
  )
}

export default Widgets;