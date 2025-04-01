function PaginationButton({ children, isActive, onClick: handleClick, size }) {
  return (
    <button
      data-is-active={isActive}
      data-size={size}
      className="hover:brightness-90 active:brightness-75 transition cursor-pointer bg-black-100 size-12 rounded-[10px] flex items-center justify-center data-[is-active=true]:bg-brand-orange data-[is-active=true]:text-white data-[size=sm]:size-8 text-lg data-[size=sm]:text-base"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
