function WorkflowArtwork() {
  return (
    <div className="workflow-artwork" aria-hidden="true">
      <span className="artwork-window-dot" />
      <span className="artwork-window-dot" />
      <span className="artwork-window-dot" />
      <div className="workflow-sidebar">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="workflow-canvas">
        <span className="workflow-line workflow-line--one" />
        <span className="workflow-line workflow-line--two" />
        <span className="workflow-line workflow-line--three" />
        <span className="workflow-node workflow-node--one">Input</span>
        <span className="workflow-node workflow-node--two">Model</span>
        <span className="workflow-node workflow-node--three">Review</span>
        <span className="workflow-node workflow-node--four">Output</span>
      </div>
      <div className="artwork-panel">
        <span>WORKFLOW STATUS</span>
        <strong>All systems go</strong>
        <i />
        <i />
        <i />
      </div>
      <span className="artwork-index">01 — FLOW</span>
    </div>
  )
}

function AnalyticsArtwork() {
  return (
    <div className="analytics-artwork" aria-hidden="true">
      <div className="analytics-topbar">
        <span>OVERVIEW</span><span>MARKET / 24H</span><span>•••</span>
      </div>
      <div className="analytics-value">
        <span>TOTAL VOLUME</span>
        <strong>$248,930</strong>
        <em>↗ 12.8%</em>
      </div>
      <div className="analytics-chart">
        <div className="chart-y-labels"><span>240k</span><span>180k</span><span>120k</span><span>60k</span></div>
        <svg viewBox="0 0 520 180" preserveAspectRatio="none">
          <path className="chart-grid-line" d="M0 25H520 M0 75H520 M0 125H520 M0 175H520" />
          <path className="chart-fill" d="M0 145 C36 130 43 142 76 119 S131 126 155 94 S198 111 228 83 S280 95 307 65 S351 88 378 48 S421 65 443 37 S482 58 520 12 V180 H0Z" />
          <path className="chart-line" d="M0 145 C36 130 43 142 76 119 S131 126 155 94 S198 111 228 83 S280 95 307 65 S351 88 378 48 S421 65 443 37 S482 58 520 12" />
        </svg>
        <div className="chart-x-labels"><span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span></div>
      </div>
      <div className="analytics-footer"><span>LIVE DATA</span><span>Updated just now</span></div>
      <span className="artwork-index">02 — SIGNAL</span>
    </div>
  )
}

function SpatialArtwork() {
  return (
    <div className="spatial-artwork" aria-hidden="true">
      <span className="spatial-orbit spatial-orbit--one" />
      <span className="spatial-orbit spatial-orbit--two" />
      <span className="spatial-orbit spatial-orbit--three" />
      <div className="spatial-core" />
      <div className="spatial-toolbar"><i /><i /><i /><i /><i /></div>
      <div className="spatial-readout"><span>OBJECT 001</span><b>X  042.8</b><b>Y  118.2</b><b>Z  006.4</b></div>
      <span className="artwork-index">03 — FORM</span>
    </div>
  )
}

export default function ProjectArtwork({ type, label }) {
  const artwork = {
    workflow: <WorkflowArtwork />,
    analytics: <AnalyticsArtwork />,
    spatial: <SpatialArtwork />,
  }[type]

  return (
    <div className={'project-artwork project-artwork--' + type} role="img" aria-label={label}>
      {artwork}
    </div>
  )
}
