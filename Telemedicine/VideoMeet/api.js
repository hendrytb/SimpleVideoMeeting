import {
  Platform,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StatusBar,
  useWindowDimensions,
} from 'react-native';

const API_BASE_URL = 'https://api.videosdk.live';

export const getToken = async () => {
  // return Platform.OS === 'android'
  //   ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5ZTIwM2Q3Yi1mMTRmLTRmNDYtOTkzZC03Y2E0ZmY5MTJlYzAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIl0sImlhdCI6MTY0NTEyMDAzMX0.AYUm7JA-yoGeaDdA6VIwrxUA5CeuLDE92lAabLL4PQk'
  //   : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5ZTIwM2Q3Yi1mMTRmLTRmNDYtOTkzZC03Y2E0ZmY5MTJlYzAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIl0sImlhdCI6MTY0NTEyMDExMn0.4n2_0MDRNvkQRB9JoY0ozpL8l3wJIWhSH_MVIi1zfuk';

  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5ZTIwM2Q3Yi1mMTRmLTRmNDYtOTkzZC03Y2E0ZmY5MTJlYzAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIl0sImlhdCI6MTY0Njc2MjY1NCwiZXhwIjoxNjQ5MzkwNjU0fQ.22WhiY3RIE_Tn86VXbUwYhsbx5AplqSOZiGZkjr-k6M';
};

export const createMeeting = async ({token}) => {
  /**
   * android
   * {
    "meetingId": "0jk8-s3hd-7rm0",
    "userId": "620b807b4e28454ed68d6d36",
    "region": "sg001",
    "createdAt": "2022-02-17T17:51:03.474Z",
    "updatedAt": "2022-02-17T17:51:03.474Z",
    "id": "620e8b074e28454ed68d7832"
}
   */

  /**
 * ios
 * {
    "meetingId": "08ur-qdwp-p5jn",
    "userId": "620b807b4e28454ed68d6d36",
    "region": "sg001",
    "createdAt": "2022-02-17T17:51:39.663Z",
    "updatedAt": "2022-02-17T17:51:39.663Z",
    "id": "620e8b2b4e28454ed68d7837"
}
 */

  return 'rbcp-5ked-dyu1';

  // try {
  //   const VIDEOSDK_API_ENDPOINT = `${API_BASE_URL}/create-meeting`;
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       Authorization: token,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({token, region: 'sg001'}),
  //   };
  //   const response = await fetch(VIDEOSDK_API_ENDPOINT, options)
  //     .then(async result => {
  //       console.log(result);

  //       const {meetingId} = await result.json();
  //       return meetingId;
  //     })
  //     .catch(error => console.log('error', error));
  //   return response;
  // } catch (e) {
  //   console.log(e);
  // }
};

/** This API is for validate the meeting id  */
/** Not require to call this API after create meeting API  */
export const validateMeeting = async (token, meetingId) => {
  try {
    const VIDEOSDK_API_ENDPOINT = `${API_BASE_URL}/validate-meeting/${meetingId}`;
    const options = {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    };
    const response = await fetch(VIDEOSDK_API_ENDPOINT, options)
      .then(async result => {
        const {meetingId} = await result.json();
        return meetingId;
      })
      .catch(error => console.log('error', error));
    return response;
  } catch (e) {
    console.log(e);
  }
};
