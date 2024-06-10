import React, { useState } from "react";
import './TweetBox.css';
import { Avatar, Button } from "@mui/material";
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Mayank Puri",
      username: "MayankPuri67238",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://cdn.imgbin.com/23/20/1/imgbin-computer-icons-user-material-design-business-login-dizzy-ewrGzdFVeB0hkYUk3QKvfzuVP.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.imgbin.com/23/20/1/imgbin-computer-icons-user-material-design-business-login-dizzy-ewrGzdFVeB0hkYUk3QKvfzuVP.jpg" />
          <input
            className="tinside"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder=" Write Your Tweets!!!!!!! "
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL for your tweets!!!"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
