const Header = ({course}) => {
  return (
    <h1>{course}</h1>
 )
}

const Content = ({parts}) => {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.part} {part.exercise}
    </p>
  )
}

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts[0].exercise + parts[1].exercise + parts[2].exercise}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const exerciseParts = [
    { part: 'Fundamentals of React', exercise: 10 },
    { part: 'Using props to pass data', exercise: 7 },
    { part: 'State of a component', exercise: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={exerciseParts} />
      <Total parts={exerciseParts} />
    </div>
  )
}

export default App