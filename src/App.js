import { useState } from 'react'
import { marked } from 'marked'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # H1

  ## H2

  [title](https://www.example.com)

  \`code\`

  \`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);


  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <div className="container-fluid">

        <div className="row justify-content-center">
          <div className="row justify-content-center" id="input">

            <div className="text-container align-self-center">

              <div className="row">
                <nav id='navbar-editor' className='pt-2'>
                  <div className='h6 text-start'>Editor</div>
                </nav>
                <textarea className="scroll-bar align-self-center" id="editor" onChange={(event) => {
                  setText(event.target.value);
                }}
                value={text}
                ></textarea>                
              </div>

                
            </div>
          </div>
          
          <div id='preview-container' className='row justify-content-center'>
            <div id='preview-case'>
              <nav id='navbar-preview' className='row'>
                    <div className='h6 text-start'>Previewer</div>   
              </nav>
              
              <div className="row" id="previewer">
               <div 
                id="preview"
                 dangerouslySetInnerHTML={{
                 __html: marked(text),
                 }}
               ></div>
            </div>

          </div>

        </div>
        
        </div>
      </div>
    </div>
  );
};

export default App;
