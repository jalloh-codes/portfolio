import React from 'react'

const Experience =({experience})=> {

    const role_dis = experience.roledis

    return (
        <div className="experience">
            <a href={experience.link} className="role">{experience.role}</a> 
            <h5 className="company">{experience.company}</h5>
            <p className="date">{experience.date}</p>
            <div className="role-dis-group">
                <h6>Tasks</h6>
                <u className="role-dis">
                    {role_dis.map((dis, i)=><li key={i}><i>&#10148;</i>{dis}</li>)}
                </u>
            </div>
        </div>
    )
}

export default Experience
