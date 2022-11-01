import React from "react";
import "./App.css";
import { marked } from "marked";

const initialState = `# Wubba lubba dub dub

**I programmed you to say this**

>Block Quotes!

## Focus on Science Dude

* learn more
+ learn more
- learn more

[Visit my github](https://github.com/)

This is a inline \`<div></div>\`

This is a block of code:

\`\`\`

let x = '8'
let y = '8'
      
let z = x + y;


\`\`\`

![Rick](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F116%2F116397.png&f=1&nofb=1&ipt=c458e393de5d37efca17ddfbb90f902d0591b10a6fa37eb81a78940a51cf84c9&ipo=images)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialState,
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value,
    });
  };

  render() {
    const markdown = marked(this.state.text, { breaks: true });

    return (
      <div className="App">
        <h1>React Markdown Previewer!</h1>
        <div className="App-container">
          <div className="text-wrapper">
            <h2 className="text-title">Editor</h2>
            <textarea
              id="editor"
              onChange={this.handleChange}
              value={this.state.text}
            ></textarea>
          </div>

          <div className="preview-container">
            <h2 className="preview-title">Preview</h2>
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: markdown }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
