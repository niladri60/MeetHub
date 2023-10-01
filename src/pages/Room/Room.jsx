import React from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
export default function Room() {
  const { roomID } = useParams();
  const myMeeting = async (element) => {
    const appID = 1464528361;
    const serverSecret = "88f61dfe312d26f8e2134b2f63396d5c";
    const kitToken = await ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Niladri Nandy"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      constainer: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showTextChat: true,
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
}
