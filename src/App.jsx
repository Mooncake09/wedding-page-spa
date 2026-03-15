import Hero      from './components/Hero'
import Timer     from './components/Timer'
import InfoGrid  from './components/Infogrid'
import Story     from './components/Story'
import Timeline  from './components/Timeline'
import DressCode from './components/DressСode'
import Location  from './components/Location'
import Rsvp      from './components/Rsvp'
import Footer    from './components/Footer'
import PhotoPair from './components/PhotoPair'
import { config } from './config'

export default function App() {
  return (
    <div className="inv">
      <Hero      config={config} />
      <Timer     date={config.event.date} />
      <InfoGrid  config={config} />
      <Story     text={config.story.text} />
      <PhotoPair photos={config.photoPair} />
      <Timeline  events={config.timeline} />
      <DressCode config={config.dresscode} />
      <Location  config={config.location} />
      <Rsvp      config={config.rsvp} />
      <Footer    config={config} />
    </div>
  )
}