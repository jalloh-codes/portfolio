import React, {Component} from 'react';
import Experience from '../components/Experience'
import Skills from '../components/skills'
class Home  extends Component{


state={
    experience: [
        {id:0, 
        role:'Software Developer Intern',
        link: `https://www.a2apharma.com`,
        company:'A2A Pharmaceuticals',
        date: 'June 2020 - Present',
        roledis: ['Used React.js to build a Web app for a prebuilt Flask backend.',
                'Packaged a Web app into a desktop app with Electron.',
                'Debugged Flask App(Backend) for better interaction with React.js(Frontend).',
                'Built and maintains AWS tools, EC2 and Workspace.']
        },
    ]
}    

    render(){
        const experiences = this.state.experience
    return(
        <div className="home">
            <div className="info-group">
                <div className="info">
                    <div className="note">
                        <p className="text"> <span>Hi!</span>I am Jalloh <i>☺</i></p>
                        <p className="text">WEB DEVELOPER...</p>
                    </div>
                    {/* <div className="note-icon">
                        <i className="fas fa-mobile-alt"></i>
                        <i className="fas fa-laptop-code"></i>
                    </div> */}
                </div>
                <div className="group-image">
                    {/* <img src={Me} alt="profile" /> */}
                    <div className="note-icon">
                        <i className="fas fa-mobile-alt"></i>
                        <i className="fas fa-laptop-code"></i>
                    </div>
                </div>
            </div>

           <div className="info-experience">
               <h4 className="title">Experience</h4>
               <div className="group-experience">
                {experiences.map((experience) => <Experience experience={experience} key={experience.id}/>)}
               </div>
              
           </div>
           <Skills />
        </div>
    );
    }
}

export default Home;
