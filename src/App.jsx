import { useRef } from "react";
import Envelope from "./components/Envelope.jsx";
import Announcement from "./components/Announcement.jsx";
import Locket from "./components/Locket.jsx";
import Details from "./components/Details.jsx";
import Closing from "./components/Closing.jsx";
import Countdown from "./components/Countdown.jsx";

export default function App() {
  const announcementRef = useRef(null);

  return (
    <main className="invite">
      <Envelope
        onOpened={() => announcementRef.current?.scrollIntoView({ behavior: "smooth" })}
      />
      <Announcement ref={announcementRef} />
      <Locket />
      <Details />
      <Closing />
      <Countdown />
    </main>
  );
}
