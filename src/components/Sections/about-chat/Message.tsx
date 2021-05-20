import React, { useEffect, useState } from "react";
import { Bounce, MessageBubble, TypingMessageBubble } from "./styles";

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
      }, 500);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  // const TypingBubble = () => {
  //   return (
  //     <TypingMessageBubble last={true}>
  //       <Bounce index={0} />
  //       <Bounce index={1} />
  //       <Bounce index={2} />
  //     </TypingMessageBubble>
  //   );
  // };

  return (
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
  );
};

export default Message;
