import { Link } from "react-router-dom";

export default function Button({ name, to, type, className }) {
  return (
    <Link className='bg-green-400 text-white px-3 py-2 rounded-lg' to={to}>
      <button className={className} type={type}>
        {name}
      </button>
    </Link>
  );
}
