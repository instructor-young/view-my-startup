import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import Backdrop from "../components/Backdrop";

const ModalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const closeRef = useRef();
  const [modalElement, setModalElement] = useState(null);
  const closeFactory = (resolve, afterCloseCallback) => () => {
    setModalElement(null);
    resolve();

    if (afterCloseCallback) afterCloseCallback();
  };

  const open = useCallback(
    (callback, afterCloseCallback) =>
      new Promise((resolve) => {
        const close = closeFactory(resolve, afterCloseCallback);
        const modalElement = callback(close);
        setModalElement(modalElement);

        closeRef.current = close;
      }),
    []
  );

  const value = { open, close: closeRef.current };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement ? (
        <Backdrop onClick={closeRef.current}>{modalElement}</Backdrop>
      ) : null}
    </ModalContext.Provider>
  );
}
