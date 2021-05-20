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
  width: 100%;
  align-items: center;
`;
export const ChatContainer = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
`;

export const ChatBubble = styled.div`
  border-radius: 20px;
  padding: 8px 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  background-color: ${({ theme }) => theme.chat};
  position: relative;
`;

export const Bounce = styled.div<{ index: number }>`
display: none;
  width: 11px;
  height: 11px;
  background-color: #333;
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

export const MessageBubble = styled(ChatBubble)<{
  last?: boolean;
  isShown: boolean;
  showTyping: boolean;
  isRight?: boolean;
}>`
  align-items: ${({ isRight }) => (isRight ? " end" : "start")};
  ${({ isRight }) => (isRight ? "margin-right" : "margin-left")}: 25%;
  background: ${({ isRight, theme }) =>
    isRight ? theme.chat : theme.hoverBorder};
  max-width: 75%;
  width: fit-content;
  text-align: left;

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
        background: ${({ theme }) => theme.chat};
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
        border-bottom-right-radius: 10px;
      }
    `}

  display: ${({ isShown }) => (isShown ? "flex" : "none")};
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
