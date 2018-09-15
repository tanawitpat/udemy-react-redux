import React from 'react'
import {mount} from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'root'

let component

beforeEach(() => {
    component = mount(
        <Root>
            <CommentBox/>
        </Root>
    )
})

afterEach(() => {
    component.unmount()
})

it('has a text area and a button', () => {
    expect(component.find('textarea').length).toEqual(1)
    expect(component.find('button').length).toEqual(1)
})

describe('the text area', () => {
    beforeEach(() => {
        component.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        })
        component.update()
    })

    it('has a text area that users can type in', () => {
        expect(component.find('textarea').prop('value')).toEqual('new comment')
    })

    it('When form is submitted, text area gets emptied', () => {
        component.find('form').simulate('submit')
        component.update()
        expect(component.find('textarea').prop('value')).toEqual('')
    })
})