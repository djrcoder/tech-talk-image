import React, { useState, setState, useEffect } from 'react';
import Environment from './config/environment';
import './App.css';

function App() {

  let [results, setResults] = useState([]);


  const addState = (item) => {
    setResults(results => [...results, [item.webEntities[0].score.toFixed(3) + "       " + item.bestGuessLabels[0].label]]);
  }

  
  const imageArray = ["Link to your google bucket images --> remember to turn oublic sharing on"]


  const submitToGoogle = async (image) => {
    try {
      let body = JSON.stringify({
        requests: [
          {
            features: [
              // { type: 'LABEL_DETECTION', maxResults: 2 },
              // { type: 'LANDMARK_DETECTION', maxResults: 5 },
              // { type: 'FACE_DETECTION', maxResults: 5 },
              // { type: 'LOGO_DETECTION', maxResults: 5 },
              // { type: 'TEXT_DETECTION', maxResults: 5 },
              // { type: 'DOCUMENT_TEXT_DETECTION', maxResults: 5 },
              // { type: 'SAFE_SEARCH_DETECTION', maxResults: 5 },
              // { type: 'IMAGE_PROPERTIES', maxResults: 5 },
              // { type: 'CROP_HINTS', maxResults: 5 },
              { type: 'WEB_DETECTION', maxResults: 2 }
            ],
            image: {
              source: {
                imageUri: image
              }
            }
          }
        ]
      });


      let response = await fetch(
        'https://vision.googleapis.com/v1/images:annotate?key=' +
        Environment['GOOGLE_CLOUD_VISION_API_KEY'],
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: body
        }
      );
      let responseJson = await response.json();
      console.log(responseJson);
      addState(responseJson.responses[0].webDetection)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">

      <header className="App-header">
        <div>
          {imageArray.map((item, i) =>
            <div>
              <ul key={i}>
                <img src={item}
                  onClick={() => submitToGoogle(item)}
                />
                {results[i]}

              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
