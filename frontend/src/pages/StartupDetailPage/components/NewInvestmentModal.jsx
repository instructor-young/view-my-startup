import { useState } from "react";
import API from "../../../api/index.api";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import PasswordInput from "../../../components/PasswordInput";
import TextInput from "../../../components/TextInput";

function NewInvestmentModal({ close, startup, onInvestSuccess }) {
  const [investorName, setInvestorName] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !investorName ||
      !amount ||
      !comment ||
      !password ||
      password !== passwordConfirm
    )
      return alert("잘못된 입력입니다");

    const data = {
      companyId: startup.id,
      investorName,
      amount,
      comment,
      password,
    };

    await API.investments.invest(data);

    close();
    onInvestSuccess();
  };

  return (
    <Modal close={close}>
      <h4 className="text-white text-xl font-bold">기업에 투자하기</h4>

      <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
        <div>
          <h6 className="text-lg font-bold text-white mb-4">투자 기업 정보</h6>
          <div className="flex items-center">
            <div className="size-10 bg-amber-200 rounded-full" />
            <span className="text-lg font-medium text-white ml-3">
              {startup.name}
            </span>
            <span className="text-gray-200 ml-2">{startup.category}</span>
          </div>
        </div>

        <TextInput
          label={"투자자 이름"}
          placeholder={"투자자 이름을 입력해 주세요"}
          autoFocus
          value={investorName}
          onChange={(e) => setInvestorName(e.target.value)}
        />

        <TextInput
          label={"투자 금액"}
          placeholder={"투자 금액을 입력해 주세요"}
          value={String(amount)}
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
        />

        <TextInput
          label={"투자 코멘트"}
          placeholder={"투자에 대한 코멘트를 입력해 주세요"}
          multiline
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <PasswordInput
          label={"비밀번호"}
          placeholder={"비밀번호를 입력해 주세요"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PasswordInput
          label={"비밀번호 확인"}
          placeholder={"비밀번호를 다시 한 번 입력해 주세요"}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-x-4 px-6">
          <Button size={"lg"} outline type="button">
            취소
          </Button>
          <Button size={"lg"} type="submit">
            투자하기
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default NewInvestmentModal;
