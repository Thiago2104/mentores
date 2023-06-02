import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { getMentorsService } from "../../services/mentors";
import "./Mentors.scss"

const MENTORES =[{
    nombre:"Yone",
    profesion:"Guerrero",
    descripcion:"This is a description",
    correo:"Example@gmail.com",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.leagueoflegends.com%2Fes-es%2Fchampions%2Fyone%2F&psig=AOvVaw0MXjucHLlJaHxHP8uvEfb9&ust=1685813298624000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMibqqCWpf8CFQAAAAAdAAAAABAE"
}];
const Mentors = () =>{
    const [mentors, setMentors]= useState(MENTORES);
    const getMentors = async () => {
        try {
          const { data } = await getMentorsService();
          setMentors(data);
        } catch (error) {
          console.error("error");
        }
      };
    const navigate = useNavigate();
    useEffect(() => {
        getMentors();
        return () => {
          setMentors([]);
        };
      }, []);
    return(
        <div className="mentors">
            <div className="mentors__head">
                <button onClick={() => navigate(-1)}>
                    <BiChevronLeft/>
                </button>
                <h1>Mentores</h1>
            </div>
            <div className="mentors__body">
                    <div className="mentors__body">
                        {
                            mentors.map(mentor=>
                                <>
                                <div className="mentors__body__image">
                                    { 
                                        <img src={mentor.img} />     
                                    }
                                </div>
                                <div className="mentors__body__data">
                                    <h2>{mentor.nombre}</h2>
                                    <p>
                                        {mentor.profesion}
                                    </p>
                                    <h3>
                                        {mentor.descripcion}
                                    </h3>
                                    <p>
                                        {mentor.correo}
                                    </p>
                                </div>
                                </>)
                        }
                    </div>
            </div>
        </div>
    );
    
};
export default Mentors