import React, { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Editor() {
  const onChange = useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="100vh"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      theme={"dark"}
      className='text-2xl'
      placeholder={"Please enter the code"}
    
    />
  );
}
export default Editor;
