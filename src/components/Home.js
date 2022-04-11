import React, {Component} from 'react';
import Experience from '../components/Experience'
import Skills from '../components/skills'
import mobile from '../img/mobile.gif'
import banner from '../img/banner.png'
class Home  extends Component{

    state={
        experience: [
            {id:0, 
            role:'Software Developer Intern',
            link: `https://www.a2apharma.com`,
            company:'A2A Pharmaceuticals',
            date: 'Jun 2021 - Sep 2021',
            roledis: ['Collaborate, discuss, and design a Web Application with the scientist team',
                    'Connect backend machine learning applications to interface',
                    'Packaged a Web app into a desktop app with Electron.',
                    'Debugged Flask App(Backend) for better interaction with React.js(Frontend).',
                    'Built and maintains AWS tools, EC2 and Workspace.']
            },
            {id:1, 
                role:'Software Engineer Contractor',
                link: `https://www.a2apharma.com`,
                company:'A2A Pharmaceuticals',
                date: 'Nov 2021 - Dec 2021',
                roledis: ['Collaborate, discuss, and design a Web Application with the scientist team',
                        'Connect backend machine learning applications to interface',
                        'Successfully resolved Open Source project API errors.',
                        'Debug a python application and improve functionality.']
                },
        ]
    }    

    render(){
        const experiences = this.state.experience
    return(
        <div className="home">
            <div className="info-group">
                <img src={banner} alt="banner"  className='bannert-img'/>
            </div>
            <div className='recent-project'>
                <h4 className="title">Recent Project</h4>
                <img src={mobile} alt="recent Project"  className='recent-project-img'/>
            </div>
           <div className="info-experience">
               <h4 className="title">Work History</h4>
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
