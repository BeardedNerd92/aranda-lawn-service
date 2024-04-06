import Button from "../components/button/Button";
import Card from "../components/card/Card";
import SearchBar from "../components/searchbar/SearchBar";
import Table from "../components/table/Table";

export default function Home() {
  return (
    <section className='container mx-auto mx-auto py-2 '>
      <div className='flex justify-end'>
        <Button name='Create +' to='create-invoices' />
      </div>

      <div className='flex flex-row justify-evenly'>
        <Card name='Total Invoices' data='' />
        <Card name='Pending Invoices' data='' />
        <Card name='Overdue Invoices' data='' />
        <Card name='Paid Invoices' data='' />
      </div>

      <div className='flex justify-center py-5'>
        <Table />
      </div>
    </section>
  );
}
