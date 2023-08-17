// https://codesandbox.io/s/l5qmzj68x9?from-embed=&file=/src/BubbleChart.js

import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';

import './BubbleChart3Dfunction.css';

const BubbleChart3Dfunction = ({ data, width, height, xPos, yPos }) => {
  const minValueRef = useRef(null);
  minValueRef.current = d3.min(data, (item) => {
    return item.val;
  });
  const maxValueRef = useRef(null);
  maxValueRef.current = d3.max(data, (item) => {
    return item.val;
  });
  const mountedRef = useRef(null);

  mountedRef.current = true;

  const [dataState, setDataState] = useState([]);

  const radiusScaleCustom = (value) => {
    const fx = d3
      .scalePow()
      .exponent(0.5)
      .range([50, 100])
      .domain([minValueRef.current, maxValueRef.current]);

    return fx(value);
  };

  const simulatePositions = useCallback((data) => {
    const nodes = data.map((item) => ({ ...item }));
    return d3
      .forceSimulation(nodes)
      .nodes(nodes)
      .velocityDecay(0.5)
      .force('x', d3.forceX().strength(0.01))
      .force('y', d3.forceY().strength(0.09))
      .force(
        'collide',
        d3.forceCollide().radius((d) => {
          return radiusScaleCustom(d.val) + 1;
        })
      )
      .on('tick', () => {
        if (mountedRef.current) {
          setDataState([...nodes]);
        }
      });
  }, []);

  const renderBubbles = (data, minVal, maxVal, width, height) => {
    const color = d3
      .scaleLinear()
      .domain([minVal * 2, maxVal])
      .interpolate(d3.interpolateHcl)
      .range(['#DAC3FF', '#5B3A90']);

    // render circle and text elements inside a group
    const texts = data.map((item, index) => {
      // const fontSize = radiusScaleCustom(item.v) / 3;

      return (
        <g
          key={index}
          transform={`translate(${width / 2 + item.x + xPos}, ${
            height / 2 + item.y + yPos
          })`}>
          <circle
            r={radiusScaleCustom(item.val)}
            fill={color(item.val)}
            // stroke={d3.rgb(color(item.v)).brighter(2)}
            // strokeWidth='2'
            onMouseOver={() => console.log('enter')}
            onMouseLeave={() => console.log('leave')}
          />
          <switch>
            <foreignObject x={-40} y={-40} width={80} height={80}>
              <p
                xmlns='http://www.w3.org/1999/xhtml'
                style={{ textAlign: 'center' }}>
                {item.val}
                <br></br>
                {item.label}
              </p>
            </foreignObject>
          </switch>
        </g>
      );
    });

    return texts;
  };

  useEffect(() => {
    simulatePositions(data);
  }, [data, simulatePositions]);

  useEffect(() => {
    return () => (mountedRef.current = false);
  }, []);

  return (
    <div className='function-section'>
      <div>
        <svg width={width} height={height}>
          {renderBubbles(
            dataState,
            minValueRef.current,
            maxValueRef.current,
            width,
            height
          )}
        </svg>
      </div>
    </div>
  );
};
export default BubbleChart3Dfunction;
