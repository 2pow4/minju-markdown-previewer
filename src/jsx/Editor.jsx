const React = require('react')

const Editor = ({value, onInputChange}) =>{
    return(
        <textarea 
        className="editor"
        name="input" autoFocus ={false} 
        value={value} 
        onChange={(e) => onInputChange(e)}
        placeholder ="Please write markdown text!">
        </textarea>
    )
 }

module.exports = Editor