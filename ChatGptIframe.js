import React from 'react';
import { css } from 'emotion';

const baseStyle = css`
  height: 100%;
  width: 100%;
  display: block;
`;

const styles = [baseStyle];

class ChatGptIframe extends React.Component {
  static styles = styles;
  
  static defaultProps = {
    src: 'https://chat.openai.com/',
    height: 500
  };

  constructor(props) {
    super(props);
    this.state = {
      conversation: [],
    };
  }

  static getMetaConfig() {
    return {
      controlName: 'ChatGptIframe',
      fallbackDisableSubmit: false,
      description: 'ChatGPT IFrame component for interactive conversations',
      iconUrl: 'chat-icon',
      groupName: 'Visual',
      version: '1.0',
      properties: {
        src: {
          type: 'string',
          title: 'Source URL',
          description: 'URL of the ChatGPT interface',
          defaultValue: 'https://chat.openai.com/'
        },
        height: {
          type: 'string',
          title: 'Height',
          description: 'Height of the component',
          defaultValue: 500
        },
        frameTitle: {
          type: 'string',
          title: 'Frame Title',
          description: 'IFrame Title'
        }
      },
      standardProperties: {
        readOnly: true,
        required: true,
        description: true
      }
    };
  }

  handleUserInput = (input) => {
    // Add user input to the conversation history
    const { conversation } = this.state;
    conversation.push({ role: 'user', content: input });
    this.setState({ conversation });

    // Send user input to ChatGPT and receive the model's response
    // Perform necessary logic to communicate with the ChatGPT model
    // Update the conversation history with the model's response
    const modelResponse = 'This is the model response'; // Replace with actual model response
    conversation.push({ role: 'model', content: modelResponse });
    this.setState({ conversation });
  };

  renderConversation() {
    const { conversation } = this.state;
    return conversation.map((message, index) => (
      <div key={index} className={`message ${message.role}`}>
        {message.content}
      </div>
    ));
  }

  render() {
    const { name, description, src, height } = this.props;
    console.log('Props', { name, description, src, height });

    const styles = {
      height: `${height}px`
    };

    return (
      <div>
        <div className="conversation">{this.renderConversation()}</div>
        <iframe
          className="frame"
          style={styles}
          name={name}
          title={description}
          src={src}
        ></iframe>
        <input type="text" onChange={(e) => this.handleUserInput(e.target.value)} />
        <button onClick={() => this.handleUserInput('Button clicked')}>Send</button>
      </div>
    );
  }
}

export default ChatGptIframe;
