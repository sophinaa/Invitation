import Envelope from "./components/Envelope.jsx";
import Scroll from "./components/Scroll.jsx";
import Announcement from "./components/Announcement.jsx";
import Locket from "./components/Locket.jsx";
import Details from "./components/Details.jsx";
import Closing from "./components/Closing.jsx";
import Countdown from "./components/Countdown.jsx";

export default function App() {
  return (
    <main className="invite">
      <Envelope />
      <Scroll>
        <Announcement />
        <Locket />
        <Details />
        <Countdown />
        <Closing />
      </Scroll>
    </main>
  );
}
