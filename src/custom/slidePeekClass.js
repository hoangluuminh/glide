export function addSlidePeekClass (Glide, Components) {
  const { perView, focusAt } = Glide.settings
  const index = Glide.index
  const classes = Glide.settings.classes

  const pivotRange = Math.floor(perView / 2)
  let pivotIndex = 0

  if (focusAt === 'center') {
    pivotIndex = index
  } else if (!isNaN(focusAt)) {
    pivotIndex = pivotRange + index
  }

  for (let i = 0; i < Components.Html.slides.length; i += 1) {
    const slide = Components.Html.slides[i]
    slide.classList.remove(classes.slide.peek)

    if (!isInRange(i, pivotIndex, pivotRange)) {
      slide.classList.add(classes.slide.peek)
    }
  }
}

function isInRange (value, pivot, range) {
  return (value >= pivot - range && value <= pivot + range)
}
