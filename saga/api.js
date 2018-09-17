import { getJwtToken } from './storage'
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

export const sendAuthorizationCallbackUrl = async () => {
  try {
    const res = await _ax.post('/api/google/credentials')
    return res.data
  } catch (err) {
    throw err
  }
}

export const putSignup = async password => {
  try {
    const jwtToken = getJwtToken()
    const res = await _ax.put('/api/password', {
      password,
      jwt_token: jwtToken
    })
    return res.data
  } catch (err) {
    throw err
  }
}
