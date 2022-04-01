import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((notecard) => (
        <Note
          key={notecard.key}
          title={notecard.title}
          content={notecard.content}
        />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default App;
