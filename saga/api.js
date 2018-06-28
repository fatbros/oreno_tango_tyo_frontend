import axios from 'axios'
const _ax = axios.create({
  timeout: 3000
})

// テストコードでstubする必要があるためAPI通信箇所は別ファイル

export const getAuthorizationUrl = async () => {
  try {
    const res = await _ax.get('/api/google/authorization_url')
    return res.data
  } catch (err) {
    throw err
  }
}

export const sendAuthorizationCallbackUrl = async callbackUrl => {
  try {
    const res = await _ax.post('/api/google/credentials')
    return res.data
  } catch (err) {
    throw err
  }
}

export const postSignup = async userInfo => {
  try {
    const { password, objectid } = userInfo
    console.log(password, objectid)
    const res = await _ax.post('/api/password', {
      password,
      objectid
    })
    return res.data
  } catch (err) {
    throw err
  }
}
