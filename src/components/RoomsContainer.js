import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
    
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//           const {loading,sortedRooms,rooms} = value
//           if(loading){
//                 return <Loading/>;
//           }
//         return (
//           <div>
//             loooo
//             <RoomFilter rooms ={rooms}/>
//             <RoomList rooms ={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
