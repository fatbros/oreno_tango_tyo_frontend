import reducer from './twitter'
import * as actions from '../actions/twitter'

describe('Twitter reducer', () => {
  it('初期stateが返却されるべき', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('requestTokenがstateに挿入されるべき', () => {
    const requestToken = '4BCCB6D126'

    expect(reducer(undefined, actions.setRequestToken(requestToken))).toEqual({
      requestToken: requestToken
    })
  })

  it('accessTokenがstateに挿入されるべき', () => {
    const accessToken = {
      oauth_token:
        '7ECF1BA1800219E0E2DA6DF4C065D78C1CB3D2DE869C7A627DE92A4F0FD7B74C',
      oauth_token_secret:
        '98437340941CB5B1115853200407D69C3D3F80A59536338454EA423F3311DAC6'
    }

    const accessTokenCamel = {
      oauthToken: accessToken.oauth_token,
      oauthTokenSecret: accessToken.oauth_token_secret
    }

    expect(reducer(undefined, actions.setAccessToken(accessToken))).toEqual(
      accessTokenCamel
    )
  })
})
