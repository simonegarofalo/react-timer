import { useParams, Link } from "react-router";
import { ATHLETES } from "/data/athletes.js";

function AthletePage() {
  const { slug } = useParams();
  const athlete = ATHLETES.find((a) => a.slug === slug);
  const athleteStats = athlete.stats;

  const formatKey = (key) => key.charAt(0).toUpperCase() + key.slice(1);

  return (
    <>
      <div className="athlete-card">
        <div className="card-data">
          <img
            src={athlete.avatar}
            alt={athlete.name}
            className="athlete-avatar"
          />
          <h2>{athlete.name}</h2>
        </div>
        <h3>Stats:</h3>
        <ul className="stats-list">
          {Object.entries(athleteStats).map(([key, value]) => (
            <li key={key}>
              <strong>{formatKey(key)}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">Back to list</Link>
    </>
  );
}

export default AthletePage;
