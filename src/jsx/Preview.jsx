const React = require('react')
const Commonmark = require('commonmark')

const Preview = ({inputValue}) => {
    const reader = new Commonmark.Parser();
    const writer = new Commonmark.HtmlRenderer();
    const html = writer.render(reader.parse(inputValue));

    return(
        <div class="preview" 
             dangerouslySetInnerHTML={{__html: html}}>
        </div>
    );
}

module.exports = Preview