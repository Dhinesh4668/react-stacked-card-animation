import React from "react";
import StackedCards from "./components/card";

const App = () => {
  const cardData = [
    {
      sub: "Simplified",
      content: "Complex tasks are now simple",
      background: "rgb(64, 122, 255)",
    },
    {
      sub: "Boost Productivity",
      content: "Perform tasks in less time",
      background: "rgb(221, 62, 88)",
    },
    {
      sub: "Facilitated Learning",
      content: "Train anyone from anywhere",
      background: "rgb(186, 113, 245)",
    },
    {
      sub: "Support",
      content: "Now it's 24/7 support",
      background: "rgb(247, 92, 208)",
    },
  ];

  return (
    <div>
      <StackedCards cardData={cardData} />
    </div>
  );
};

export default App;
