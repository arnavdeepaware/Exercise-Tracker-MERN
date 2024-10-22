import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercises-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-exercise.component"


function App() {
  return (
    <Router>
        <Navbar />
        <br/>
        <Routes>
        <Route path="/" element={<ExerciseList />} />
        <Route path="/edit/:id" element={<EditExercise />} /> {/* Fixed the path */}
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
        </Routes>
    </Router>
  );
}

export default App;
