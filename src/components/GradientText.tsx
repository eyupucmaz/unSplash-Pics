import React from 'react';

interface GradientTextProps {
  text: string;
  colors?: string[];
}

const GradientText = (props: GradientTextProps) => {
  return (
    <>
      <h1
        className={`text-transparent m-3 max-w-[40ch] leading-relaxed
      text-3xl sm:text-4xl font-bold bg-gradient-to-r ${
        props.colors
          ? props.colors.join(' ')
          : 'from-green-500 via-blue-500 to-purple-500'
      } bg-clip-text`}
      >
        {props.text}
      </h1>
    </>
  );
};

export default GradientText;
