import sinon from 'sinon'
import { expectSaga } from 'redux-saga-test-plan'
import * as signupSaga from './signup'
import * as api from './api'
import * as actions from '../actions/signup'
import Router from 'next/router'
// import { select } from 'redux-saga/effects'

import { userInfoSelector } from '../selectors/user'

describe('Signup SagaTask', () => {
  describe('SagaTask:putSignup', () => {
    it('passwordが正常にpostされるべき', async () => {
      Router.push = sinon.spy()

      sinon.stub(api, 'putSignup').callsFake(() => {
        return {}
      })

      await expectSaga(signupSaga.putSignup)
        .provide({
          select({ selector }, next) {
            if (selector === userInfoSelector) {
              return {
                email: 'aaa@gmail.com'
              }
            }
          }
        })
        .dispatch(actions.putSignup())
        .run()

      expect(Router.push.callCount).toBe(1)
      expect(Router.push.firstCall.args[0]).toBe('/')
    })
  })
})
