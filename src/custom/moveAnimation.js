export function getBeforeMoveIndex (Glide, Components) {
  const newIndex = Glide.index
  return newIndex
}

export function performMoveAnimation (Glide, Components, beforeMoveIndex) {
  const directionStr = determineMovingDirection(Glide, Components, beforeMoveIndex)
  let animationStyle = ''

  let slides = Components.Html.slides
  const animationDuration = Glide.settings.animationDuration

  switch (directionStr) {
    case '<': {
      animationStyle = 'pendulum-left'
      break
    }
    case '>': {
      animationStyle = 'pendulum-right'
      break
    }
  }

  slides.forEach(_slide => {
    void _slide.offsetWidth
    _slide.classList.add(`glide__slide--anim-${animationStyle}`)
  })
}

export function completeMoveAnimation (Glide, Components) {
  let slides = Components.Html.slides
  slides.forEach(_slide => {
    _slide.className.split(' ').forEach(className => {
      if (className.match(/^glide__slide--anim-/)) {
        _slide.classList.remove(className)
      }
    })
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
