import "@/components/roadmap-page/roadmap-main/planned/planned.css"
export default function Progress() {
  return (
    <div className="planned">
        <div className="planned-headers">
          <h3 className="planned-h3">Planned 2</h3>
          <p className="planned-title">Ideas prioritized for research</p>
        </div>
        <div className="planned-card">
          <div className="durum">
            <div className="nokta"></div>
            <p className="nokta-p">Planned</p>
          </div>
          <div className="planned-main">
            <h5 className="planned-h5">More comprehensive reports</h5>
            <p className="planned-p">It would be great to see a more detailed breakdown of solutions.</p>
          </div>
          <div className="ozellik">
            <p className="o-fea">Feature</p>
          </div>
          <div className="reaction">
            <div className="like">
              <img src="/ok.png" width={8} height={4} alt="" />
              <p>123</p>
            </div>
            <div className="yorum">
              <img src="/yorum.png" width={18} height={16} alt="" />
              <p className="yorum-p">2</p>
            </div>
          </div>
        </div>
    </div>
  )
}