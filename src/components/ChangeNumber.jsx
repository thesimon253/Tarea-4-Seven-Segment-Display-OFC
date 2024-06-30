import '../scss/styles.scss';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ChangeNumber({ digit }) {
  const [count, setCount] = useState(digit);
  const [segmentOpacity, setSegmentOpacity] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0
  });

  useEffect(() => {
    const updateSegmentOpacity = () => {
      switch (count) {
        case 0:
          setSegmentOpacity({
            one: 1,
            two: 1,
            three: 1,
            four: 1,
            five: 1,
            six: 1,
            seven: 0
          });
          break;
        case 1:
          setSegmentOpacity({
            one: 0,
            two: 1,
            three: 1,
            four: 0,
            five: 0,
            six: 0,
            seven: 0
          });
          break;
        case 2:
          setSegmentOpacity({
            one: 1,
            two: 1,
            three: 0,
            four: 1,
            five: 0,
            six: 1,
            seven: 1
          });
          break;
        case 3:
          setSegmentOpacity({
            one: 1,
            two: 1,
            three: 1,
            four: 1,
            five: 0,
            six: 0,
            seven: 1
          });
          break;
        case 4:
          setSegmentOpacity({
            one: 0,
            two: 1,
            three: 1,
            four: 0,
            five: 1,
            six: 0,
            seven: 1
          });
          break;
        case 5:
          setSegmentOpacity({
            one: 1,
            two: 0,
            three: 1,
            four: 1,
            five: 1,
            six: 0,
            seven: 1
          });
          break;
        case 6:
          setSegmentOpacity({
            one: 1,
            two: 0,
            three: 1,
            four: 1,
            five: 1,
            six: 1,
            seven: 1
          });
          break;
        case 7:
          setSegmentOpacity({
            one: 1,
            two: 1,
            three: 1,
            four: 0,
            five: 0,
            six: 0,
            seven: 0
          });
          break;
        case 8:
          setSegmentOpacity({
            one: 1,
            two: 1,
            three: 1,
            four: 1,
            five: 1,
            six: 1,
            seven: 1
          });
          break;
        case 9:
          setSegmentOpacity({
            one: 1,
            two: 1,
            three: 1,
            four: 1,
            five: 1,
            six: 0,
            seven: 1
          });
          break;
        default:
          break;
      }
    };

    updateSegmentOpacity();
  }, [count]);

  const { one, two, three, four, five, six, seven } = segmentOpacity;

  const handleClick = () => {

     let newCount = count + 1;
     if (newCount > 9) {

     newCount = 0;

     }
    
     setCount(newCount);

  };


  return (
    <div>
      <div className="numberbody">
        <div className={one === 1 ? 'one_active' : 'one'}></div>
        <div className={two === 1 ? 'two_active' : 'two'}></div>
        <div className={three === 1 ? 'three_active' : 'three'}></div>
        <div className={four === 1 ? 'four_active' : 'four'}></div>
        <div className={five === 1 ? 'five_active' : 'five'}></div>
        <div className={six === 1 ? 'six_active' : 'six'}></div>
        <div className={seven === 1 ? 'seven_active' : 'seven'}></div>
      </div>
      <button className="btn_counter" onClick={handleClick}>
        +1 Digit
      </button>
    </div>
  );
}

ChangeNumber.propTypes = {
  digit: PropTypes.number.isRequired
};

export default ChangeNumber;