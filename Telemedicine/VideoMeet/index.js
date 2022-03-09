import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { MeetingProvider } from "@videosdk.live/react-native-sdk";
import MeetingContainer from "./MeetingContainer";
import { getToken, createMeeting } from "./api";

const VideoMeet = props => {
  const [token, setToken] = useState("");
  const [meetingId, setMeetingId] = useState("");

  useEffect(async () => {
    const token = await getToken();
    const meetingId = await createMeeting({ token });
    setToken(token);
    setMeetingId(meetingId);
  }, []);

  return token ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6FF" }}>
      <MeetingProvider
        config={{
          meetingId: meetingId,
          micEnabled: false,
          webcamEnabled: true,
          name: "Test User",
          notification: {
            title: "Code Sample",
            message: "Meeting is running.",
          },
        }}
        token={token}
      >
        <MeetingContainer setToken={setToken} />
      </MeetingProvider>
    </SafeAreaView>
  ) : null;
};

export default VideoMeet;
