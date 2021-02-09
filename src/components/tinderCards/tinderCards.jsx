import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import { getTinderCards } from '../../store/actions/tinderCardsActions'
import { useStore } from '../../store/store'
import './tinderCards.css'

function TinderCards () {
  const [people, setPeople] = useState([])
  let { state, dispatch } = useStore()

  useEffect(() => {
    getTinderCards(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let currentReducer = state.tinderCardsReducer

    if (currentReducer.cards.length > 0) {
      setPeople(currentReducer.cards)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.tinderCardsReducer])

  const onSwipe = (direction, nameOfPerson) => {
    console.log(`You swiped:${nameOfPerson} in ${direction} direction`)
  }

  const onCardLeftScreen = name => {
    console.log(name + ' left the screen')
  }
  return (
    <div className='tinder_card'>
      <div className='tinder_card_container'>
        {people.map((person, index) => (
          <TinderCard
            key={index}
            className='swipe'
            preventSwipe={['up', 'down']}
            onCardLeftScreen={() => onCardLeftScreen(person.name)}
            onSwipe={dir => onSwipe(dir, person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
