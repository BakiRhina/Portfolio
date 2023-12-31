import '../../styles/SkillsCss/About.css';
import '../../styles/Skills.css';


//import Button from '../Button';


function About({ cmdImg, title, displayText}) {
    return (
        <div className='aboutContainer'>
            <div className="cmd-window">
                <div className="cmd-title">
                    {cmdImg && <img src={cmdImg} alt="Command Img" />} {title}
                </div>
                <div className="cmdContent" >
                    <span>
                        {"G:\\Senabre\\Prades>"} <br />
                        {""} <br />
                        {""} <br />
                        {">>> Academics"} <br />
                        {""} <br />
                        {"Electronics Engineering (Barcelona UPC EEBE)"} <br />
                        {"(2018-2022)"} <br />
                        {""} <br />
                        {"Final Degree Project (Taiwan NCU)"} <br />
                        {"(2023-2024)"} <br />
                        {""} <br />
                        {">>> Languages"} <br />
                        {""} <br />
                        {"English C1"} <br />
                        {"Catalan Native"} <br />
                        {"Spanish Native"} <br />
                        {"French B2"} <br />
                        {"German A1"} <br />
                        {""} <br />
                        {">>> Technical Skills"} <br />
                        {""} <br />
                        {"Python"} <br />
                        {"React"} <br />
                        {"AI (NLP)"} <br />
                        {"CAD"} <br />
                        {"ROS 2"} <br />
                        {"Circuit Design"} <br />
                        {""} <br />
                        {">>> Personal Skills"} <br />
                        {""} <br />
                        {"Teamwork"} <br />
                        {"Problem Solving"} <br />
                        {"Critical Thinking"} <br />
                    </span>
                </div>
            </div>
        </div>
    );
}


export default About;