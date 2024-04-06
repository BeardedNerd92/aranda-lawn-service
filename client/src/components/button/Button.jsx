import { Link } from "react-router-dom";

export default function Button({ name, to, type }) {
  return (
    <Link className='bg-green-500 text-white px-3 py-2 rounded-lg' to={to}>
      <button type={type}>{name}</button>
    </Link>
  );
}
