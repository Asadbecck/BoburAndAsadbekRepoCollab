// import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'
import SectionTwo from './Components/SectionTwo/SectionTwo'


export default function App() {
  const { t } = useTranslation()

  // const handleClick = (value) => {
  // i18next.changeLanguage(value)
  // }

  return (
    <>
    <Header/>
    <Section/>
    <SectionTwo/>
      {/* <h1>{t("text.text-paraghrap")}</h1>


      <button onClick={()=>handleClick("Ru")}>Ru</button>
      <button onClick={()=>handleClick("Uzb")}>Uzb</button>
      <button onClick={()=>handleClick("Eng")}>Eng</button> */}
    </>
  )
}

