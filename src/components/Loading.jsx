import React from 'react'
import {ClipLoader} from 'react-spinners'

function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ClipLoader color="#ff0000" size={100} />
    </div>
  );
}

export default Loading