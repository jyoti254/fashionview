import React from "react";
import { useHistory } from "react-router";
import Card2 from "./Card2";
import { CoolData } from "./Constants/Cool";
import { FunkeyData } from "./Constants/Funkey";
import { GownData } from "./Constants/Gown";
import { MidiData } from "./Constants/Midi";
import { OnepieceData } from "./Constants/OnePiece";
import { ShortsData } from "./Constants/Shorts";
import { TraditionalData } from "./Constants/Traditional";
import { WesternData } from "./Constants/Western";

const Ser1 = () => {
  const history = useHistory();
  const URL = history.location.pathname.split('/')[2]
  var Data =[]
  switch (URL) {
    case 'traditional':
      Data = TraditionalData;
      break;
    case 'gown':
      Data =   GownData ;
      break;
    case 'western':
       Data = WesternData
      break;
    case 'funkey':
      Data = FunkeyData
      break;
    case 'shorts':
      Data =ShortsData;
      break;
    case 'midi':
      Data = MidiData;
      break;
    case 'cool':
      Data = CoolData;
      break;

    case 'onePiece':
        Data = OnepieceData;
        break;

    default:
        break;

  }
  return (
    <>
      <div className="container-fluid mt-5 pt-5">
        <div className="row ">
          <div className="col-10 mx-auto ">
            <div className="row gy-3 gx-7">
                {
                    
                    Data.map((item)=>{
                        return(
                        <Card2
                        imgsrc={item.imgsrc}
                        alt={item.alt}
                        title={<strong>{item.title}</strong>}
                        text={item.text}
                      />)
                    })
                }
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn "
            type="submit"
            onClick={() => history.goBack()}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};
export default Ser1;
