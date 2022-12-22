// export const ButtonsBlock = ({result}) => {
//   const buttons = [
//     7, 8, 9, 'del', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', 'reset', '=' 
//   ];

//   const setResult = (num) => {
//     return result += num;
//   }
//     return (
//       <div 
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-between',
//           borderRadius: '5px',
//           backgroundColor: 'hsl(223, 31%, 20%)',
//           margin: 'auto',
//           padding: '10px',
//           height: '300px',
//           marginTop: '15px'}}>
        
//         {buttons.map((button) => (
//           <button 
//             type="button" 
//             style={{
//               width: '70px',
//               height: '40px',
//               borderRadius: '5px',
//               backgroundColor: 'hsl(30, 25%, 89%)',
//               border: 0,
//               borderBottom: 'hsl(28, 16%, 65%) solid 3px',
//               margin: '10px',
//               color: 'hsl(223, 31%, 20%)',
//               fontWeight: '900',
//               fontSize: '20px'
//             }}

//             onClick={()=>setResult(button)}>
//               {button}
//           </button>

//         ))}

//       </div>
//     );
//   };