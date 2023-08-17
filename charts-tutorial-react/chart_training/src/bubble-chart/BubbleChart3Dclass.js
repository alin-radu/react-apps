// https://codesandbox.io/s/l5qmzj68x9?from-embed=&file=/src/BubbleChart.js

import React from 'react';
import * as d3 from 'd3';

import './BubbleChart3Dclass.css';

class BubbleChart3Dclass extends React.Component {
  constructor(props) {
    super(props);

    this.minValue = 1;
    this.maxValue = 100;
    this.mounted = false;

    this.state = {
      data: [],
    };

    this.radiusScale = this.radiusScale.bind(this);
    this.simulatePositions = this.simulatePositions.bind(this);
    this.renderBubbles = this.renderBubbles.bind(this);
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.minValue = d3.min(this.props.data, (item) => {
        return item.v;
      });

      this.maxValue = d3.max(this.props.data, (item) => {
        return item.v;
      });

      this.simulatePositions(this.props.data);
    }
  }

  // componentWillUnmount() {
  //   this.mounted = false;
  // }

  radiusScale = (value) => {
    const fx = d3
      .scaleSqrt()
      .range([50, 100])
      .domain([this.minValue, this.maxValue]);

    return fx(value);
  };

  simulatePositions = (data) => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data)
      .velocityDecay(0.05)
      .force('x', d3.forceX().strength(0.009))
      .force('y', d3.forceY().strength(0.09))
      .force(
        'collide',
        d3.forceCollide((d) => {
          return this.radiusScale(d.v) + 2;
        })
      )
      .on('tick', () => {
        if (this.mounted) {
          // console.log(
          //   '%c-> developmentConsole: this.mounted= ',
          //   'color:#77dcfd',
          //   this.mounted
          // );
          this.setState({ data });
        }
      });
  };

  renderBubbles = (data) => {
    // console.log(
    //   '%c-> developmentConsole: renderBubbles------------------------------------> ',
    //   'color:#77dcfd'
    // );
    const minValue =
      1 *
      d3.min(data, (item) => {
        return item.v;
      });

    const maxValue =
      1 *
      d3.max(data, (item) => {
        return item.v;
      });

    const color = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .interpolate(d3.interpolateHcl)
      .range(['#DAC3FF', '#5B3A90']);

    // render circle and text elements inside a group
    const texts = data.map((item, index) => {
      const props = this.props;
      const fontSize = this.radiusScale(item.v) / 3;
      return (
        <g
          key={index}
          transform={`translate(${props.width / 2 + item.x}, ${
            props.height / 2 + item.y
          })`}>
          <circle
            r={this.radiusScale(item.v)}
            fill={color(item.v)}
            // stroke={d3.rgb(color(item.v)).brighter(2)}
            // strokeWidth='2'
            onMouseOver={() => console.log('enter')}
            onMouseLeave={() => console.log('leave')}
          />
          <text
            dy='0'
            fill='#fff'
            textAnchor='middle'
            fontSize={`${fontSize}px`}
            fontWeight='bold'>
            {item.v}
          </text>
          <text
            dy='27'
            fill='#fff'
            textAnchor='middle'
            fontSize={`${fontSize}px`}
            fontWeight='bold'>
            {item.v}
          </text>
        </g>
      );
    });

    return texts;
  };

  render() {
    return (
      <div className='class-section'>
        <div>
          <svg width={this.props.width} height={this.props.height}>
            {this.renderBubbles(this.state.data)}
          </svg>
        </div>
      </div>
    );
  }
}
export default BubbleChart3Dclass;
