import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'

import Header from './index'

describe('Header Component', () => {
  describe('props:loginBtnClick', () => {
    test('ログインボタンをクリックした際にprops:loginBtnClick関数が発火するべき', () => {
      const onButtonClick = sinon.spy()
      const header = mount(<Header loginBtnClick={onButtonClick} />)
      header.find('button.button-login').simulate('click')

      expect(onButtonClick.callCount).toBe(1)
    })
  })
})
