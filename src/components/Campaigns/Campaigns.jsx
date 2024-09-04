import CampaignsItem from "./CampaignsItem"
import "./Campaigns.css"

const Campaigns = () => {
  return (
    <section className="campaigns">
    <div className="container">
      <div className="campaigns-wrapper">
        <CampaignsItem/>
        <CampaignsItem/>
      </div>
      <div className="campaigns-wrapper">
       <CampaignsItem/>
       <CampaignsItem/>
      </div>
    </div>
  </section>
  )
}

export default Campaigns