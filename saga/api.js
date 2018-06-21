import axios from 'axios'

// テストコードでstubする必要があるためAPI通信箇所は別ファイル

export const getRequestTokenToAPI = async () => {
  try {
    const res = await axios.post('/api/v1/auth/twitter_request_token')
    return res.data
  } catch (err) {
    throw err
  }
}

export const getAccessTokenToAPI = async params => {
  try {
    const res = await axios.post('/api/v1/auth/twitter_access_token', params)
    return res.data
  } catch (err) {
    throw err
  }
}
