import CloseIcon from "../assets/icon/ic_close.png";

function Modal({ close, children }) {
  return (
    <div
      className="bg-black-300 relative rounded-2xl p-6 w-[496px]"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={close} className="absolute right-6 top-6 text-white">
        <img src={CloseIcon} alt="close" className="size-8" />
      </button>
      {children}
    </div>
  );
}

export default Modal;
