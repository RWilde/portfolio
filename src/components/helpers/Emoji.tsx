import React from "react";

type EmojiProps = {
  label: string;
  symbol: string;
};

const Emoji = React.memo(({ label, symbol }: EmojiProps) => (
  <span role="img" aria-label={label}>
    {symbol}
  </span>
));

export default Emoji;
