

import DownloadSec from "./components/Download-sec";
import Section from "./components/Section";
import AppVideo from "./components/Vedio";
import LogoInverse from "./components/Logo-inverse";
import { makeStyles } from "@mui/styles";
import Updated from "./components/updated-for";
const useStyles = makeStyles ({
  dark: {
    bagroundColor: "black",
  }
});
function App() {
  const classes = useStyles();
  return (
    <div >
      <Section />
      <DownloadSec />
      <AppVideo />
      <div className={classes.dark}>
      <LogoInverse />
      </div>
      <Updated />
    </div>
  );
}

export default App;
