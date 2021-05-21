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
          waitBeforeShow={2500}
        />
        <Message
          message="Nice to meet you!"
          waitBeforeShow={4000}
          right={true}
        />
        <Message message="Want to check out my stuff?" waitBeforeShow={5500} />
        <Message message="Sure!" waitBeforeShow={7000} right={true} />
        <Message emoji="👇" waitBeforeShow={8500} />
        <Message
          message="Thanks for dropping by. Feel free to use the contact me button!"
          last={true}
          waitBeforeShow={10000}
        />
      </ChatContainer>
      <WaveBackground>
        <HeaderWave />
      </WaveBackground>
    </Container>
  );
};
export default Chat;
