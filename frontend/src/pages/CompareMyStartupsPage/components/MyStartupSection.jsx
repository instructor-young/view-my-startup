import PlusButtonIcon from "../../../assets/icon/ic_plus_btn.png";

function MyStartupSection() {
  return (
    <section className="mt-20">
      <h2 className="font-bold text-xl text-white">
        나의 기업을 선택해 주세요!
      </h2>

      <div className="p-4 mt-8 h-[300px] rounded-sm border border-dashed border-black-300">
        <div className="flex items-center justify-center bg-black-300 w-full h-full rounded-sm">
          <button className="flex flex-col items-center justify-center space-y-4 cursor-pointer hover:brightness-90 transition active:brightness-75">
            <img src={PlusButtonIcon} />
            <span className="text-white font-medium text-lg">기업 추가</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MyStartupSection;
