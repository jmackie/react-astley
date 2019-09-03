import React from "react";

/* Full screen Rick. */
export const Rickscreen = props => {
  return (
    <marquee
      direction="down"
      width="100%"
      height="100%"
      behavior="alternate"
      style={{ ...fullCommitment }}
    >
      <marquee behavior="alternate">
        <Rickframe {...props} />
      </marquee>
    </marquee>
  );
};

/* The simplest Rick component */
export const Rickframe = props => {
  return (
    <TooShy>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </TooShy>
  );
};

const TooShy = props => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ backgroundColor: "transparent", ...fullCommitment }} />
      {props.children}
    </div>
  );
};

const fullCommitment = {
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  zIndex: "1000000",
};

/* TODO: make this into a sweet lorem ipsum generator */
const lyrics = `
We're no strangers to love
You know the rules and so do I
A full commitment's what I'm thinking of
You wouldn't get this from any other guy

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching, but
You're too shy to say it
Inside, we both know what's been going on
We know the game and we're gonna play it

And if you ask me how I'm feeling
Don't tell me you're too blind to see

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching, but
You're too shy to say it
Inside, we both know what's been going on
We know the game and we're gonna play it

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you 
`;
