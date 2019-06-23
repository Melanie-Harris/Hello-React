import React from 'react';


function Input(props) {
  return (
   <div>
      <input 
        placeholder={props.textThatIShow}
      />

   </div>
  );
}

export default Input;
