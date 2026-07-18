"use client";

import { useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [isRunningAway, setIsRunningAway] = useState(false);
  const [noPosition, setNoPosition] = useState({
    left: 0,
    top: 0,
  });

  const moveNoButton = () => {
    const buttonWidth = 90;
    const buttonHeight = 45;
    const padding = 20;

    const maxLeft = window.innerWidth - buttonWidth - padding;
    const maxTop = window.innerHeight - buttonHeight - padding;

    const randomLeft =
      Math.floor(Math.random() * (maxLeft - padding)) + padding;

    const randomTop =
      Math.floor(Math.random() * (maxTop - padding)) + padding;

    setIsRunningAway(true);
    setNoPosition({
      left: randomLeft,
      top: randomTop,
    });
  };

  if (accepted) {
    return (
      <main className="video-page">
      <div className="video-container">
        <video
          className="result-video"
          src="/success.mp4"
          autoPlay
          controls
          playsInline
        />

        <div className="video-text">
          히히 나도 양희 좋아! ❤️
        </div>
      </div>
    </main>
    );
  }

  return (
    <main className="page">
      <div className="modal">
        <h1>양희 나 좋아? </h1>
        <p>설마 아니 고르겠어? ㅎㅎ</p>

        <div className="button-group">
          <button
            className="yes-button"
            onClick={() => setAccepted(true)}
          >
            웅!
          </button>

          {!isRunningAway && (
            <button
              className="no-button initial-no-button"
              onMouseEnter={moveNoButton}
              onMouseDown={moveNoButton}
              onTouchStart={moveNoButton}
            >
              아니?
            </button>
          )}
        </div>
      </div>

      {isRunningAway && (
        <button
          className="no-button runaway-no-button"
          style={{
            left: `${noPosition.left}px`,
            top: `${noPosition.top}px`,
          }}
          onMouseEnter={moveNoButton}
          onMouseDown={moveNoButton}
          onTouchStart={moveNoButton}
        >
          아니?
        </button>
      )}
    </main>
  );
}