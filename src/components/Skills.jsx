import "./Skills.css"

export default function Skills() {

    let skills = ['react', 'nodejs', 'express', 'js-format', 'ruby', 'python', 'jest', 'postgresql', 'mysql', 'git', 'html', 'CSS']

    return (
        <div className="container">
            <h2>Skills</h2>
            <div className="skills">
                {skills.map(skill => {
                return (
                    <div className="skill" key={skill}>
                        <img  src={`/images/${skill}.png`} alt={skill}  />
                    </div>
                )
                })}
            </div>
        </div>

    )
}