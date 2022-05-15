import './App.css';
import data from './components/data';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {

  const cards = data.map((item)=> {
    return(
      <Card
        img = {item.imageUrl}
        title = {item.title}
        location = {item.location}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description = {item.description}
        link = {item.googleMapsUrl}
      />

    );
  });
  return (
    <div className="App">
      <Navbar/>
      <div className='cards-container'> {cards}</div>
    </div>
  );
}

export default App;
