import styled, { css, keyframes } from "styled-components";

const dotFlashing = keyframes`
0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
`;

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.about};
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const ChatContainer = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  box-shadow: 0 26px 42px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  @media (min-width: 775px) {
    width: 50%;
  }
`;

export const ChatBubble = styled.div`
  border-radius: 20px;
  padding: 8px 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  background-color: ${({ theme }) => theme.chatFrom};
  position: relative;
`;

export const Bounce = styled.div<{ index: number }>`
display: none;
  width: 11px;
  height: 11px;
  background-color: ${({ theme }) => theme.text};
  padding: 0.5em;
  border-radius: 100%;
  display: inline-block;
  animation: ${dotFlashing} 1.4s infinite ease-in-out both;
  animation-delay: ${({ index }) => {
    switch (index) {
      case 0:
        return css`-0.32s;`;
      case 1:
        return css`-0.16s;`;
    }
  }}
  }
  
`;

export const MessageContainer = styled.div<{ isRight: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isRight }) => (isRight ? "flex-start" : "flex-end")};
`;

export const MessageBubble = styled(ChatBubble)<{
  last?: boolean;
  isShown: boolean;
  showTyping: boolean;
  isRight?: boolean;
}>`
  text-align: ${({ isRight }) => (isRight ? " start" : "end")};
  ${({ isRight }) => (isRight ? "margin-right" : "margin-left")}: 25%;
  background: ${({ isRight, theme }) =>
    isRight ? theme.chatFrom : theme.chatTo};
  width: fit-content;
  ${({ isRight }) => (!isRight ? "right" : "left")}: 0;
  max-width: 75%;
  background-attachment: fixed;
  ${({ last }) =>
    last &&
    css`
      &:before {
        content: "";
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: -7px;
        height: 20px;
        width: 20px;
        background: ${({ theme }) => theme.chatFrom};
        border-bottom-right-radius: 15px;
      }
      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: -10px;
        width: 10px;
        height: 20px;
        background: ${({ theme }) => theme.about};
        opacity: 0.8;
        border-bottom-right-radius: 10px;
      }
    `}

  display: ${({ isShown }) => (isShown ? "inline-block" : "none")};
  ${({ isShown }) =>
    !isShown &&
    css`
      ${Bounce} {
        display: flex;
      }
    `}
`;

export const TypingMessageBubble = styled(MessageBubble)<{ last: true }>`
  margin: 100px auto 0;
  width: 90px;
  text-align: center;
`;

export const WaveBackground = styled.div`
  > svg {
    bottom: 0;
    position: absolute;
    left: 0;
  }
`;

export const AboutContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.about};
`;
