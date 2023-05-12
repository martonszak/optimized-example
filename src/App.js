import "./App.css";
import cat1 from "./images/pexels-photo-691583-400h.webp";
import cat2 from "./images/pexels-photo-1754909-400h.webp";
import cat3 from "./images/pexels-photo-1770918-400h.webp";
import cat4 from "./images/pexels-photo-3974516-400h.webp";
import cat5 from "./images/pexels-photo-3472158-400h.webp";
import cat6 from "./images/pexels-photo-1265616-400h.webp";
import cat7 from "./images/pexels-photo-3226848-400h.webp";
import cat8 from "./images/pexels-photo-2688982-400h.webp";

function App() {
  return (
    <div>
      <div id="headercontainer">
        <h1 id="headertext">Optimitzed cat page</h1>
        <h2 id="headertextsubtitle">Optimitzed cat page subtitle</h2>
        <h3 id="headertextsubsubtitle">Optimitzed cat page subsubtitle</h3>
      </div>
      <div className="cicacontainer">
        <div className="catbox">
          <h4 className="catname">Bubi</h4>
          <img className="catimage" src={cat1} alt="Light brown cat with black stripes and blue eyes"/>
        </div>
        <div className="catbox">
          <h4 className="catname">Bobó</h4>
          <img className="catimage" src={cat2} alt="Regular color cat meowing"/>
        </div>
        <div className="catbox">
          <h4 className="catname">Babu</h4>
          <img className="catimage" src={cat3} alt="Grey cat laying on floor"/>
        </div>
        <div className="catbox">
          <h4 className="catname">Lüke</h4>
          <img className="catimage" src={cat4} alt="Black cat with yellow eyes looking from below"/>
        </div>
      </div>
      <div className="cicacontainer">
        <div className="catbox">
          <h4 className="catname">Töki</h4>
          <img className="catimage" src={cat5} alt="Sfinx cat sitting next to a window"/>
        </div>
        <div className="catbox">
          <h4 className="catname">Pipi</h4>
          <img className="catimage" src={cat6} alt="Regular cat looking into the camera"/>
        </div>
        <div className="catbox">
          <h4 className="catname">Cucu</h4>
          <img className="catimage" src={cat7} alt="A grey cat looking up"/>
        </div>
        <div className="catbox">
          <h4 className="catname">Koki</h4>
          <img className="catimage" src={cat8} alt="Ginger cat after eating licks her mouth"/>
        </div>
      </div>
    </div>
  );
}

export default App;
