import React from 'react';


function Input(props) {
  return (
   <div>
      <textarea 
        placeholder={props.textThatIShow}
      />

   </div>
  );
}

export default Input;
