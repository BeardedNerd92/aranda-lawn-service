import React from "react";

export default function Card({ data, name }) {
  return (
    <div className='py-3 px-3'>
      <div className='block p-6 mx-w-sm font-semibold text-lg'>
        {name}: {data ? data : 0}
      </div>
    </div>
  );
}
