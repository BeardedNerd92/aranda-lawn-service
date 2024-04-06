import Button from "../button/Button";

export default function SearchBar() {
  return (
    <form>
      <input
        placeholder='Search for an invoice...'
        type='text'
        name=''
        id=''
        className='border border-slate-400  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
      />
      <Button name='Search' />
    </form>
  );
}
