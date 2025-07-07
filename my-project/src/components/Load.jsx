import React from 'react';

const Load = ({ loading }) => {
  if (!loading) return null;

  return (
            <div className="flex justify-center items-center h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>

  )


     
};

export default Load;
