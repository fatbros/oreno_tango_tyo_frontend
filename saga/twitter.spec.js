import sinon from 'sinon'
import { expectSaga } from 'redux-saga-test-plan'
import * as twitterSaga from './twitter'
import * as api from './api'
import * as actions from '../actions/twitter'

describe('Twitter SagaTask', () => {
  describe('SagaTask:getRequestToken', () => {
    it('requestToken正常取得', async () => {
      const requestToken = {
        oauth_token: 'aaa',
        oauth_token_secret: 'bbb'
      }

      const encodedRequestToken = encodeURI(requestToken)
      const authenticateUrl = `https://api.twitter.com/oauth/authenticate?oauth_token=${encodedRequestToken}`

      sinon.stub(api, 'getRequestTokenToAPI').callsFake(() => {
        return encodedRequestToken
      })

      await expectSaga(twitterSaga.getRequestToken)
        .put(actions.setRequestToken(encodedRequestToken))
        .dispatch(actions.getRequestToken())
        .run()

      expect(window.location.href).toBe(authenticateUrl)
    })
  })
})
