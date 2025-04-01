import MinusIcon from "../../../assets/icon/ic_minus.png";

function StartupCard({ startup, onClickDelete }) {
  return (
    <div
      data-removable={!!onClickDelete}
      className="pt-8 pb-6 flex flex-col items-center w-[126px] data-[removable=true]:bg-gray-400 rounded-lg relative"
    >
      {!!onClickDelete && (
        <button className="absolute right-2 top-2" onClick={onClickDelete}>
          <img src={MinusIcon} className="size-6" />
        </button>
      )}

      <div className="mb-2.5">
        {startup.logoImgUrl ? (
          <img src={startup.logoImgUrl} className="size-20 rounded-full" />
        ) : (
          <div className="size-20 rounded-full bg-yellow-100" />
        )}
      </div>

      <div className="font-medium text-white leading-none">{startup.name}</div>
      <div className="text-sm text-gray-200 mt-1 leading-none">
        {startup.category}
      </div>
    </div>
  );
}

export default StartupCard;
