const React = require('react')
const Editor = require('./Editor.jsx')
const Preview = require('./Preview.jsx')

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      editor: ""
    }
  }

  EditorInputHandler(e){
    this.setState({editor: e.target.value});
  }
  
  render() {
    return (
      <div className={this.props.className}>
        <Editor 
            value={this.state.editor}
            onInputChange={(e)=> this.EditorInputHandler(e)}
        />
        <Preview 

            inputValue={this.state.editor} 
        />
      </div>  
    )
  }
}

module.exports = App
