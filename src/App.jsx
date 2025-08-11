import './App.css'
import Banner from './Components/Landing-ui/Banner'
import ClientsSection from './Components/Landing-ui/ClientsSection'
import Community from './Components/Landing-ui/Community'
import ContentParagraph from './Components/Landing-ui/ContentParagraph'
import FooterDesignSection from './Components/Landing-ui/FooterDesignSection'
import HelpingLocalBusiness from './Components/Landing-ui/HelpingLocalBusiness'
import PixelgradeJourney from './Components/Landing-ui/PixelgradeJourney'
import Header from './Components/Shared/Header'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ClientsSection />
      <Community />
      <PixelgradeJourney />
      <HelpingLocalBusiness />
      <FooterDesignSection />
      <ContentParagraph />
    </>
  )
}

export default App
