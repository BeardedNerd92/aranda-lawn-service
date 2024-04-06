import React from "react";

export default function Table({ th, td }) {
  const noData = "No data to show yet";
  return (
    <table className='table-auto border-collapse border border-slate-600'>
      <caption className='caption-top tx-sm'>
        Table showing recent invoices
      </caption>
      <thead className='bg-gray-200 border border-slate-600'>
        <tr>
          <th>{th ? th : noData}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{td ? td : noData}</td>
        </tr>
      </tbody>
    </table>
  );
}
