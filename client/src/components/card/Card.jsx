import React from "react";

export default function Card({ data, name }) {
  return (
    <div className='py-5 px-1'>
      <div className='block p-6 bg-gray-200 mx-w-sm text-lg'>
        {name}: {data ? data : 0}
      </div>
    </div>
  );
}
