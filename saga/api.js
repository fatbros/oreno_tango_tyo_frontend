import axios from 'axios'

// テストコードでstubする必要があるためAPI通信箇所は別ファイル

export const getAuthorizationUrl = async () => {
  try {
    const res = await axios.get('/api/google/authorization_url')
    return res.data
  } catch (err) {
    throw err
  }
}

export const sendAuthorizationCallbackUrl = async callbackUrl => {
  try {
    const res = await axios.post('/api/google/credentials')
    return res.data
  } catch (err) {
    throw err
  }
}
