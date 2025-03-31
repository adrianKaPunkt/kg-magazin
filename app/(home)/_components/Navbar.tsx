const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50">
      <div className="text-xl uppercase">
        KLAUS<span className="font-bold">GERTH</span>
      </div>

      <button className="text-xl font-light">
        &#9776; {/* Hamburger-Symbol */}
      </button>
    </header>
  );
};

export default Navbar;
