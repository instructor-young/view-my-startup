function IndexBox({ label, value }) {
  return (
    <div className="bg-black-200 flex items-center justify-between h-[92px] px-6 rounded-[10px]">
      <span className="text-gray-100">{label}</span>
      <strong className="font-semibold text-white">{value}</strong>
    </div>
  );
}

export default IndexBox;
