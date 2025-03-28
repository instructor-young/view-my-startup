import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

function InvestmentSuccessModal({ close }) {
  return (
    <Modal close={close}>
      <p className="mt-10 text-center text-white font-[15px]">
        투자가 완료되었어요!
      </p>

      <div className="flex justify-center mt-8">
        <Button
          size={"lg"}
          type="button"
          onClick={close}
          className={"w-[194px]"}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
}

export default InvestmentSuccessModal;
