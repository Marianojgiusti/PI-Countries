import Card from "../Card/Card"
import "./Cardscontainer.style.css"

const CardsContainer = ({ allCountries }) => {
  return (
    <div className="cards-container">
      {allCountries?.map(country => (
        <Card  key={country.id} country={country} />
      ))}
    </div>
  );
};

export default CardsContainer;