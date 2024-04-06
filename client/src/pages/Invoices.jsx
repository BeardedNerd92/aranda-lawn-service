import React from "react";
import SearchBar from "../components/searchbar/SearchBar";
import Table from "../components/table/Table";

export default function Invoices() {
  return (
    <section className='container mx-auto mx-auto py-2'>
      <div className='py-5 flex justify-center'>
        <SearchBar />
      </div>
    </section>
  );
}
