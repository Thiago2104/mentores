import React from "react";
import { useNavigate } from "react-router-dom";
import MentorsCard from "../../components/MentorCard/MentorsCard";
import Hero from "../../components/Hero/Hero";
import "./Home.scss";

const Home = () => {
    const navigate = useNavigate();
    return(
    <div className="Home">
        <Hero />
        <div className="home__mentors-cards-container">
            <MentorsCard
                name="Christian Gómez"
                details= "Ingeniero Industrial"
            />
            <MentorsCard
                name="María Paula Méndez"
                details="Ingeniera Informática"
            />
            <MentorsCard
                name="Juan Esteban Morales"
                details="Ingeniero Industrial"
            />
            <MentorsCard
                name="Santiago Rivera"
                details="Emprendedor"
            />
        </div>
        <div className="home__description">
            <p>
                Los mentores son expertos comprometidos en guiar y apoyar a los participantes en los retos.
                Brindan retroalimentación constructiva y comparten su experiencia para fomentar el éxito y 
                el crecimiento personal y profesional.
            </p>
            <button onClick={() => navigate("/mentores")}>
                Ver mentores
            </button>
        </div>
    </div>
    );
    
};

export default  Home;