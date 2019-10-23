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
      <Part partName={props.part1} exerciseNumber={props.exercises1}></Part>
      <Part partName={props.part2} exerciseNumber={props.exercises2}></Part>
      <Part partName={props.part3} exerciseNumber={props.exercises3}></Part>
    </div>
  );
};
const Total = props => <p>Total number of exercises {props.sum}</p>;

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header courseParameter={course} />
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
