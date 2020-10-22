export function getBeforeMoveIndex (Glide, Components) {
  const newIndex = Glide.index
  return newIndex
}

export function performMoveAnimation (Glide, Components, beforeMoveIndex) {
  const directionStr = determineMovingDirection(Glide, Components, beforeMoveIndex)
  let animationStyle = ''

  let slides = Components.Html.slides
  let slide = Components.Html.slides[Glide.index]

  switch (directionStr) {
    case '<': {
      console.log('i am moving left')
      animationStyle = 'pendulum-left'
      break
    }
    case '>': {
      console.log('i am moving right')
      animationStyle = 'pendulum-left'
      break
    }
  }

  slides.forEach(_slide => {
    _slide.classList.add(`glide__slide--anim-${animationStyle}`)
  })
}

function determineMovingDirection (Glide, Components, oldIndex) {
  let directionStr = ''

  if (Glide.index >= oldIndex) {
    directionStr = '>'
  } else {
    directionStr = '<'
  }

  return directionStr
}
