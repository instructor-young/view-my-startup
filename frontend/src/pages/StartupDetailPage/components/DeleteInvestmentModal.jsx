import { useState } from "react";
import API from "../../../api/index.api";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import PasswordInput from "../../../components/PasswordInput";

function DeleteInvestmentModal({ close, investmentId, refetchStartup }) {
  const [password, setPassword] = useState("");

  const handleClickDelete = async () => {
    await API.investments.deleteInvestment(investmentId, password);
    await refetchStartup();

    close();
  };

  return (
    <Modal close={close}>
      <h2 className="h-8 flex items-center font-bold text-xl leading-none text-white mb-6">
        삭제 권한 인증
      </h2>

      <PasswordInput
        label={"비밀번호"}
        placeholder={"비밀번호를 입력해 주세요"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
      />

      <div className="flex justify-center mt-8">
        <Button
          size={"lg"}
          type="button"
          onClick={handleClickDelete}
          className={"w-[194px]"}
        >
          삭제하기
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteInvestmentModal;
