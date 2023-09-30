import Carousel from "../../components/carousel";

const HomeView = ({ carouselData }) => {
  return (
    <div className="home_view">
      {Object.keys(carouselData).map((genreName) => (
        <Carousel
          key={genreName}
          heading={genreName}
          genreTheme={genreName.toLocaleLowerCase()}
          itemsArray={carouselData[genreName]}
        />
      ))}
    </div>
  );
};

export default HomeView;
