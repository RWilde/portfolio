import React from "react";
import { HeaderWave } from "../..";
import { WaveBackground, AboutContainer } from "../about/styles";
import Message from "./Message";
import { Container, ChatContainer } from "./styles";

const Chat = () => {
  return (
    <Container>
      <ChatContainer>
        <Message message="Hey!" emoji="👋" waitBeforeShow={1000} />
        <Message
          message="I'm Rebecca Wilde, a Full Stack Developer."
          waitBeforeShow={2000}
        />
        <Message
          message="Nice to meet you!"
          waitBeforeShow={3500}
          right={true}
        />
        <Message message="Want to check out my stuff?" waitBeforeShow={5000} />
        <Message message="Sure!" waitBeforeShow={5500} right={true} />
        <Message emoji="👇" waitBeforeShow={6000} />
        <Message
          message="Thanks for dropping by. Feel free to use the contact me button!"
          last={true}
          waitBeforeShow={7500}
        />
      </ChatContainer>
      <WaveBackground>
        <HeaderWave />
      </WaveBackground>
    </Container>
  );
};
export default Chat;
