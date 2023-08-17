// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import highchartsBellCurve from 'highcharts/modules/histogram-bellcurve';

// const BellCurve = () => {
//   if (typeof Highcharts === 'object') {
//     highchartsBellCurve(Highcharts); // Execute the bell curve module
//   }

//   const options = {
//     title: {
//       text: 'Bell curve',
//     },

//     xAxis: [
//       {
//         title: {
//           text: 'Data',
//         },
//         alignTicks: false,
//       },
//       {
//         title: {
//           text: 'Bell curve',
//         },
//         alignTicks: false,
//         opposite: true,
//       },
//     ],

//     yAxis: [
//       {
//         title: { text: 'Data' },
//       },
//       {
//         title: { text: 'Bell curve' },
//         opposite: true,
//       },
//     ],

//     series: [
//       {
//         name: 'Bell curve',
//         type: 'bellcurve',
//         xAxis: 1,
//         yAxis: 1,
//         baseSeries: 1,
//         zIndex: -1,
//       },
//       {
//         name: 'Data',
//         type: 'line',
//         data: data,
//         accessibility: {
//           exposeAsGroupOnly: true,
//         },
//         marker: {
//           radius: 1.5,
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// };

// export default BellCurve;
