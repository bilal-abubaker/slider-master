import originalImage from './img/img-original.jpg';
import modifiedImage from './img/img-modified.jpg';

import original1 from './img/cat.jpg';
import modified1 from './img/dog.jpg';

import osxDay from './img/osx-day.jpg';
import osxNight from './img/osx-night.jpg';

import Slider from './components/Slider/Slider';

const slider1 = {
    delay: 2000,
    original: {
        url: originalImage,
        title: 'Original'
    },
    modified: {
        url: modifiedImage,
        title: 'Modified'
    }
};


const App = () => {
    
    return (
        <>
        <div>
            <h2>Slider #1</h2>
            <Slider {...slider1}/>

            <br/>

        </div>




        


      </>

    )
}

export default App;