import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return <h1>{props.courseParameter}</h1>;
};

const Part = props => {
  console.log(props);
  return (
    <p>
      {props.partName} {props.exerciseNumber}
    </p>
  );
};
const Content = props => {
  return (
    <div>
      <Part partName={props.parts[0].name} exerciseNumber={props.parts[0].exercises}></Part>
      <Part partName={props.parts[1].name} exerciseNumber={props.parts[1].exercises}></Part>
      <Part partName={props.parts[2].name} exerciseNumber={props.parts[2].exercises}></Part>
    </div>
  );
};

const Total = ({ partsParameter }) => {
  const sum =
    partsParameter[0].exercises + partsParameter[1].exercises + partsParameter[2].exercises;
  return (
    <div>
      <p>Total number of exercises {sum}</p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header courseParameter={course} />
      <Content parts={parts} />
      <Total partsParameter={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
