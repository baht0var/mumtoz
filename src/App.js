import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Courses, Event, EventInfo, Home, InfoPageCourse, Loyout, MainForm } from "./routes/Routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route index element={<Home />} />
        <Route path="event" element={<Event/>}/>
        <Route path="event/:id" element={<EventInfo/>}/>
        <Route path="form" element={<MainForm/>}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="InfoPageCourse" element={<InfoPageCourse/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;