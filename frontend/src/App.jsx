import BButton from './components/BButton';
import ImageGallery from './components/ImageGallery';

const App = () => {
  // Handle button clicks
  const nextFunc = () => {
    alert('Next button clicked');
  };

  const prevFunc = () => {
    alert('Prev button clicked');
  };

  const readMoreFunc = () => {
    alert('Read More button clicked');
  };

  return (
    <>
      <div>
        <h1>Car Listing Bay</h1>
        <ImageGallery>
          {/* Add content or images here */}
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Car listing example"
            />
          </div>
        </ImageGallery>

        <div style={{ marginTop: '20px' }}>
          <BButton bgcolor="pink" txtcolor="black" btnFunc={prevFunc}>
            <i className="fa-sharp fa-solid fa-chevron-left" /> Prev
          </BButton>
          <BButton bradius="10%" btnFunc={readMoreFunc}>
            Read More
          </BButton>
          <BButton bgcolor="pink" txtcolor="black" btnFunc={nextFunc}>
            Next <i className="fa-sharp fa-solid fa-chevron-right" />
          </BButton>
        </div>
      </div>
    </>
  );
};

export default App;
