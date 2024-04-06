import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className='bg-sky-600 fixed bottom-0 left-0 right-0 text-green-200 p-4'>
      <div className='flex justify-evenly'>
        <div className='text-lg'>
          &#169; {date} Aranda Lawn Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
