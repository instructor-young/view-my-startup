import { useState } from "react";
import API from "../../../api/index.api";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import PasswordInput from "../../../components/PasswordInput";
import { useModal } from "../../../contexts/modal.context";
import EditInvestmentModal from "./EditInvestmentModal";

function CheckEditPrivilegeModal({ close, investment, refetchStartup }) {
  const [password, setPassword] = useState("");
  const modal = useModal();

  const handleClickCheckPassword = async () => {
    const isPasswordCorrect = await API.investments.checkInvetmentPassword(
      investment.id,
      password
    );

    if (isPasswordCorrect) {
      const startup = await API.companies.getCompany(investment.companyId);

      await modal.open((close) => (
        <EditInvestmentModal
          close={close}
          password={password}
          startup={startup}
          investment={investment}
          onEditSuccess={async () => {
            await refetchStartup();
          }}
        />
      ));
    } else {
      alert("비밀번호가 틀렸습니다");
    }
  };

  return (
    <Modal close={close}>
      <h2 className="h-8 flex items-center font-bold text-xl leading-none text-white mb-6">
        수정 권한 인증
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
          onClick={handleClickCheckPassword}
          className={"w-[194px]"}
        >
          수정하러 가기
        </Button>
      </div>
    </Modal>
  );
}

export default CheckEditPrivilegeModal;
