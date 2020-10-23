export function getBeforeMoveIndex (Glide, Components) {
  const newIndex = Glide.index
  return newIndex
}

export function performMoveAnimation (Glide, Components, beforeMoveIndex) {
  const directionStr = determineMovingDirection(Glide, Components, beforeMoveIndex)
  let animationStyle = ''

  let slides = Components.Html.slides
  let swipeAnimation = Glide.settings.swipeAnimation
  const animationDuration = Glide.settings.animationDuration

  if (!swipeAnimation) {
    return
  }

  switch (directionStr) {
    case '<': {
      animationStyle = `${swipeAnimation}-left`
      break
    }
    case '>': {
      animationStyle = `${swipeAnimation}-right`
      break
    }
  }

  slides.forEach(_slide => {
    void _slide.offsetWidth
    _slide.classList.add(`glide__slide--anim-${animationStyle}`)
    _slide.style.animation = `anim-${animationStyle} ${animationDuration}ms ease-in-out both`
  })
}

export function completeMoveAnimation (Glide, Components) {
  let slides = Components.Html.slides
  slides.forEach(_slide => {
    _slide.className.split(' ').forEach(className => {
      if (className.match(/^glide__slide--anim-/)) {
        _slide.classList.remove(className)
        _slide.style.animation = ''
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
