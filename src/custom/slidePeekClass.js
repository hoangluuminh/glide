export function addSlidePeekClass (Glide, Components) {
  let { perView, focusAt } = Glide.settings
  const index = Glide.index
  const classes = Glide.settings.classes

  let rangeStart = 0
  let rangeEnd = 0
  if (focusAt === 'center') {
    rangeStart = index - Math.floor(perView / 2)
    rangeEnd = index + Math.floor(perView / 2)
    if (perView % 2 === 0) { // For even number of perView => Decrease range
      rangeStart++
      rangeEnd--
    }
  } else {
    rangeStart = index - focusAt
    rangeEnd = index - focusAt + perView - 1
  }

  for (let i = 0; i < Components.Html.slides.length; i += 1) {
    const slide = Components.Html.slides[i]
    slide.classList.remove(classes.slide.peek)

    if (!isInRange(i, rangeStart, rangeEnd)) {
      slide.classList.add(classes.slide.peek)
    }
  }
}

function isInRange (value, rangeStart, rangeEnd) {
  return (value >= rangeStart && value <= rangeEnd)
}
