import StartupRow from "./StartupRow";

function SelectedStartupsSection({ startups }) {
  return (
    <section>
      <h5 className="font-bold text-lg text-white mb-3">
        선택한 기업 ({startups.length})
      </h5>

      <ul className="space-y-3">
        {startups.map((startup) => (
          <li key={startup.id}>
            <StartupRow startup={startup} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SelectedStartupsSection;
