export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat">
          <div className="stat-number" data-target="500" data-suffix="+">
            0+
          </div>
          <p>Projetos Instalados</p>
        </div>

        <div className="stat">
          <div className="stat-number" data-target="15" data-suffix="MW">
            0MW
          </div>
          <p>Potência Instalada</p>
        </div>

        <div className="stat">
          <div className="stat-number" data-target="98" data-suffix="%">
            0%
          </div>
          <p>Satisfação</p>
        </div>

        <div className="stat">
          <div className="stat-number" data-target="20" data-suffix="M">
            0M
          </div>
          <p>Em Economia</p>
        </div>
      </div>
    </section>
  );
}
