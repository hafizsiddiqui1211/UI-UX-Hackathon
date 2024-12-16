export default function Navbar() {
  return (
    <div className="w-[1320px] h-[87px] top-[45px] left-[300px]">
      <nav className="w-[109px] h-[32px] left-[605px]">
        <span className="font-helvetica text-2xl font-bold leading-8 text-left underline decoration-skip-none">
          Food
        </span>
        <span className="font-helvetica text-2xl font-bold leading-8 text-left underline decoration-skip-none">
          tuck
        </span>

        <ul className="flex justify-between items-center">
          <li>Home</li>
          <li>Menu</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
