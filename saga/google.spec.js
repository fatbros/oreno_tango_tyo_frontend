import sinon from 'sinon'
import { expectSaga } from 'redux-saga-test-plan'
import * as googleSaga from './google'
import * as api from './api'
import * as actions from '../actions/google'
import * as userActions from '../actions/user'
import Router from 'next/router'

describe('Google SagaTask', () => {
  describe('SagaTask:authorizationUrl', () => {
    it('authorizationUrlが正常に取得されるべき', async () => {
      const res = {
        authorization_url: 'https://www.test.com/'
      }

      sinon.stub(api, 'getAuthorizationUrl').callsFake(() => {
        return res
      })

      await expectSaga(googleSaga.authorizationUrl)
        .dispatch(actions.getAuthorizationUrl())
        .run()

      expect(window.location.href).toBe(res.authorization_url)
    })
  })

  describe('SagaTask:sendAuthorizationCallbackUrl', () => {
    it('callbackUrlが正常に送信されるべき', async () => {
      const email = 'aaa@gmail.com'

      Router.push = sinon.spy()

      sinon.stub(api, 'sendAuthorizationCallbackUrl').callsFake(() => {
        return { email }
      })

      await expectSaga(googleSaga.sendAuthorizationCallbackUrl)
        .put(userActions.setUserInfo({ email }))
        .dispatch(actions.sendAuthorizationCallbackUrl())
        .run()

      expect(Router.push.callCount).toBe(1)
      expect(Router.push.firstCall.args[0]).toBe('/signup')
    })
  })
})
