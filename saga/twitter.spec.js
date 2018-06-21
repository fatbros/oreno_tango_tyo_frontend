import sinon from 'sinon'
import { expectSaga } from 'redux-saga-test-plan'
import * as twitterSaga from './twitter'
import * as api from './api'
import * as actions from '../actions/twitter'
import Router from 'next/router'

describe('Twitter SagaTask', () => {
  describe('SagaTask:getRequestToken', () => {
    it('requestTokenが正常に取得されるべき', async () => {
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

  describe('SagaTask:getAccessToken', () => {
    it('accessTokenが正常に取得されるべき', async () => {
      const accessToken = {
        oauth_token: 'ccc',
        oauth_token_secret: 'ddd'
      }

      Router.push = sinon.spy()

      sinon.stub(api, 'getAccessTokenToAPI').callsFake(() => {
        return accessToken
      })

      await expectSaga(twitterSaga.getAccessToken)
        .put(actions.setAccessToken(accessToken))
        .dispatch(actions.getAccessToken())
        .run()

      expect(Router.push.callCount).toBe(1)
      expect(Router.push.firstCall.args[0]).toBe('/')
    })
  })
})
