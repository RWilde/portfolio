import React, { useEffect, useState } from "react";
import { Bounce, MessageBubble, MessageContainer, TypingMessageBubble } from "./styles";

type MessageProps = {
  message?: string;
  emoji?: string;
  last?: boolean;
  waitBeforeShow: number;
  right?: boolean;
};

const Message = ({
  message,
  emoji,
  last,
  waitBeforeShow,
  right,
}: MessageProps) => {
  const [isShown, setIsShown] = useState(false);
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
      setTimeout(() => {
        setShowTyping(false);
      }, 1500);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return (
    <MessageContainer isRight={!right}>
      <MessageBubble
        last={last}
        showTyping={showTyping}
        isShown={isShown}
        isRight={!right}
      >
        {!showTyping && (
          <>
            {message} {emoji}
          </>
        )}
        {showTyping && (
          <>
            <Bounce index={0} />
            <Bounce index={1} />
            <Bounce index={2} />
          </>
        )}
      </MessageBubble>
    </MessageContainer>
  );
};

export default Message;
