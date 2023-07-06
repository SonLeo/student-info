import StudentList from './components/StudentInfoComponent'

const students = [
  {
    id: 1,
    name: 'hoc sinh 1',
    age: 18,
    address: 'Ha Noi'
  },
  {
    id: 2,
    name: 'hoc sinh 2',
    age: 20,
    address: 'Ha Noi'
  },
  {
    id: 3,
    name: 'hoc sinh 3',
    age: 16,
    address: 'Ha Noi'
  },
  {
    id: 4,
    name: 'hoc sinh 4',
    age: 18,
    address: 'Ha Noi'
  },
  {
    id: 5,
    name: 'hoc sinh 5',
    age: 24,
    address: 'Ha Noi'
  },
  {
    id: 6,
    name: 'hoc sinh 6',
    age: 21,
    address: 'Ha Noi'
  }
];

function App() {
  return (
    <StudentList students = {students} />
  )
}

export default App;
