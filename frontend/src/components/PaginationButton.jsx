function PaginationButton({ children, isActive, onClick: handleClick }) {
  return (
    <button
      data-is-active={isActive}
      className="hover:brightness-90 active:brightness-75 transition cursor-pointer bg-black-100 h-12 w-12 rounded-[10px] flex items-center justify-center data-[is-active=true]:bg-brand-orange data-[is-active=true]:text-white"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
