import {describe, it} from 'mocha'
import {expect} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import {List} from 'immutable'
import Voting from '../../../client/components/Voting'

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const pair = List.of('Trainspotting', '28 Days Later')
    const component = renderIntoDocument(
      <Voting pair={pair} />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(2)
    expect(buttons[0].textContent).to.equal('Trainspotting')
    expect(buttons[1].textContent).to.equal('28 Days Later')
  })

  it('invokes callback when a button is clicked', () => {
    let votedWith
    const vote = (entry) => votedWith = entry

    const pair = List.of('Trainspotting', '28 Days Later')

    const component = renderIntoDocument(
      <Voting pair={pair}
              vote={vote}/>
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    Simulate.click(buttons[0])

    expect(votedWith).to.equal('Trainspotting')
  })

  it('disables buttons when user has voted', () => {
    const pair = List.of('Trainspotting', '28 Days Later')
    const component = renderIntoDocument(
      <Voting pair={pair}
              hasVoted='Trainspotting' />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(2)
    expect(buttons[0].hasAttribute('disabled')).to.equal(true)
    expect(buttons[1].hasAttribute('disabled')).to.equal(true)
  })

  it('adds label to the voted entry', () => {
    const pair = List.of('Trainspotting', '28 Days Later')
    const component = renderIntoDocument(
      <Voting pair={pair}
              hasVoted='Trainspotting' />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons[0].textContent).to.contain('Voted')
  })

  it('renders just the winner when there is one', () => {
    const component = renderIntoDocument(
      <Voting winner='Trainspotting' />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons.length).to.equal(0)

    const winner = ReactDOM.findDOMNode(component.refs.winner)
    expect(winner).to.be.ok
    expect(winner.textContent).to.contain('Trainspotting')
  })

  it('renders as a pure component', () => {
    const pair = List.of('Trainspotting', '28 Days Later')
    const container = document.createElement('div')
    let component = ReactDOM.render(
      <Voting pair={pair} />,
      container
    )

    let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]
    expect(firstButton.textContent).to.equal('Trainspotting')

    pair[0] = 'Sunshine'
    component = ReactDOM.render(
      <Voting pair={pair} />,
      container
    )
    firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]
    // the pair should be immutable - so it should not be re-rendered!
    expect(firstButton.textContent).to.equal('Trainspotting')
  })

  it('does update DOM when prop changes', () => {
    const pair = List.of('Trainspotting', '28 Days Later')
    const container = document.createElement('div')
    let component = ReactDOM.render(
      <Voting pair={pair} />,
      container
    )

    let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]
    expect(firstButton.textContent).to.equal('Trainspotting')

    const newPair = pair.set(0, 'Sunshine')
    component = ReactDOM.render(
      <Voting pair={newPair} />,
      container
    )
    firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]
    expect(firstButton.textContent).to.equal('Sunshine')
  })
})
