function PaginationButton({ children, isActive }) {
  return (
    <button
      data-is-active={isActive}
      className="hover:brightness-90 active:brightness-75 transition cursor-pointer bg-black-100 h-12 w-12 rounded-[10px] flex items-center justify-center data-[is-active]:bg-brand-orange data-[is-active]:text-white"
    >
      {children}
    </button>
  );
}

export default PaginationButton;
