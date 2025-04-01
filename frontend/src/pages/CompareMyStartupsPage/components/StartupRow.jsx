function StartupRow({ startup, button }) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-x-4 flex items-center">
        {startup.logoImgUrl ? (
          <img
            src={startup.logoImgUrl}
            className="size-12 rounded-full object-cover"
          />
        ) : (
          <div className="size-12 rounded-full bg-amber-100" />
        )}

        <div className="flex items-center space-x-2">
          <h6 className="text-white font-medium">{startup.name}</h6>
          <span className="text-sm text-gray-200">{startup.category}</span>
        </div>
      </div>
      {button}
    </div>
  );
}

export default StartupRow;
