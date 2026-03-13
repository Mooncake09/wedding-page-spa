import Hero      from './components/Hero'
import Timer     from './components/Timer'
import InfoGrid  from './components/InfoGrid'
import Story     from './components/Story'
import Timeline  from './components/Timeline'
import DressCode from './components/DressCode'
import Location  from './components/Location'
import Rsvp      from './components/Rsvp'
import Footer    from './components/Footer'
import { config } from './config'

export default function App() {
  return (
    <div className="inv">
      <Hero      config={config} />
      <Timer     date={config.event.date} />
      <InfoGrid  config={config} />
      <Story     text={config.story.text} />
      <Timeline  events={config.timeline} />
      <DressCode config={config.dresscode} />
      <Location  config={config.location} />
      <Rsvp      config={config.rsvp} />
      <Footer    config={config} />
    </div>
  )
}