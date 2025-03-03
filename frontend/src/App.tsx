import './App.css';
import BasketballInfo from './CollegeBasketballTeams.json';

// Header component
function Header() {
  return (
    <>
      <h1>Welcome to March Madness</h1>
      <h4>This lists out information about colleges in NCAA Basketball</h4>
    </>
  );
}

// Team card with school name, mascot, and location
function Team({
  SchoolName,
  MascotName,
  City,
  State,
}: {
  SchoolName: string;
  MascotName: string;
  City: string;
  State: string;
}) {
  return (
    <>
      <h2>School Name: {SchoolName}</h2>
      <h4>Mascot Name: {MascotName}</h4>
      <h4>
        Location: {City}, {State}
      </h4>
    </>
  );
}

// List of Teams
function TeamList() {
  return (
    <>
      {BasketballInfo['teams'].map(
        (
          singleTeam // Access team element individually
        ) => (
          <Team
            key={singleTeam.school}
            SchoolName={singleTeam.school}
            MascotName={singleTeam.name}
            City={singleTeam.city}
            State={singleTeam.state}
          ></Team>
        )
      )}
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <br />
      <TeamList />
    </>
  );
}

export default App;
