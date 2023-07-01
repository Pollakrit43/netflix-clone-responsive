import "./App.css";
import { DownloadCom } from "./components/Download/DownloadCom";
import { FeaturesCom } from "./components/Features/FeaturesCom";
import { HeaderCom } from "./components/Header/HeaderCom";
import { KidsCom } from "./components/Kids/KidsCom";
import { WatchCom } from "./components/Watch/WatchCom";
import { Question2Com } from "./components/Question2/Question2Com";
import { FooterCom } from "./components/Footer/FooterCom";



function App() {

  return (
    <>
      <HeaderCom />
      <FeaturesCom />
      <DownloadCom />
      <WatchCom />
      <KidsCom />
      <Question2Com/>
      <FooterCom/>
    </>
  );
}

export default App;
