# react-stacked

`react-stacked` is a lightweight and customizable React component that displays multiple cards in a visually engaging stacked layout. As users scroll, the cards rotate and animate, providing a smooth and dynamic user experience. Perfect for showcasing feature highlights, services, or important content with a unique scrolling effect.

## Features

- **Dynamic Scrolling**: Cards rotate and animate as users scroll.
- **Customizable**: Change content, background colors, and layout easily.
- **Lightweight**: Minimal dependencies and highly optimized for performance.
- **Responsive**: Works well on both desktop and mobile views.
- **Easy Integration**: Plug-and-play design for quick integration into any React project.

## Installation

You can install the package via npm:

```bash
npm install react-stacked
```

## Usage

Here's how you can integrate `react-stacked` into your React project:

```jsx
import React from 'react';
import StackedCards from 'react-stacked';

const App = () => {
  return (
    <div>
      <StackedCards />
    </div>
  );
};

export default App;
```

### Example Configuration

The `StackedCards` component takes a predefined set of card data with a background, title, and description for each card. Here is an example of the configuration:

```jsx
import React from 'react';
import StackedCards from 'react-stacked';

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

const App = () => {
  return (
    <div>
      <StackedCards cardData={cardData} />
    </div>
  );
};

export default App;
```

## Props

- **`cardData`**: An array of objects representing each card. Each object should have the following fields:
  - `sub`: The subtitle or heading of the card.
  - `content`: The main content or description of the card.
  - `background`: The background color of the card (in RGB or HEX format).

### Example Prop

```jsx
const cardData = [
  {
    sub: "Feature 1",
    content: "This is feature 1 description",
    background: "#407AFF"
  },
  {
    sub: "Feature 2",
    content: "This is feature 2 description",
    background: "#DD3E58"
  }
];
```

## Custom Styling

You can modify the styles of the stacked cards by applying custom CSS to the component, or overriding the default styles via inline `style` attributes.

## Contributing

Contributions and issues are welcome. If you have suggestions or find bugs, feel free to open an issue or a pull request.

## License

This project is licensed under the ISC License.
