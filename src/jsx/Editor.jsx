const React = require('react')

const Editor = ({value, onInputChange}) =>{
    return(
        <textarea 
        class="editor"
        name="input" autoFocus ={false} 
        value={value} 
        onChange={(e) => onInputChange(e)}
        placeholder ="Please write markdown text!">
        </textarea>
    )
 }

module.exports = Editor