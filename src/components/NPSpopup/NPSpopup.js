export default function NPSpopup({ open, onClose, chosenPark }) {
    if (!open) return null;
  
    return (
      <>
        <div className="overlay"></div>
        <div className="popupInfo">
          <button id="popupExit" onClick={onClose}>
            X
          </button>
          <h4>{chosenPark.fullName}</h4>
          <div className="popupMain">
            {Object.entries(chosenPark).map(([key, value, idx]) => {
              console.log(`abc`, chosenPark)
              if (typeof value != "object") { // If the item is not an object, go ahead and display key and value.
                return (
                  <div className="category" key={idx}>
                    <div className="name">{key}:</div>
                    <div className="value">{value}</div>
                  </div>
                );
              } else { // If it is an object,
                  if(value.length === 0) return undefined;
                  if(typeof value[0] == "array") return undefined;
                return (   // All objects and arrays use this code.
                  <div className="category" key={idx}>
                    <div className="name">{key}:</div>
                    <div className="value">
                    {Object.entries(value).map(([keyB, valueB]) => { // Map over the keys/values and display accordingly.
                      //console.log(valueB.name);
                      return <p>{valueB.name||valueB.description}</p>;
                    })}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
  