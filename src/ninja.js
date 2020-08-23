// import React, { Component } from 'react';

// class Ninjas extends Component {

//     render() {
//         const { ninjas, deleteNinja } = this.props;
//         const ninjalist = ninjas.map(ninja => {
//             if (ninja.name != null) {
//                 return (
//                     <div className="n" key={ninja.id}>
//                         <div>Name : {ninja.name}</div>
//                         <div>Age : {ninja.age}</div>
//                         <div>belt : {ninja.belt}</div>
//                         <button onClick={() => { deleteNinja(ninja.id) }}>Delete</button>
//                     </div>
//                 )
//             }
//             else {
//                 return null
//             }
//         })

//         return (
//             <div className="ninjas">
//                 <h2>hello ninjas {this.props.name}</h2>
//                 {ninjalist}
//             </div>
//         );
//     }
// }

// export default Ninjas;