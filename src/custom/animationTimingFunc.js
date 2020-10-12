const predefinedAnimations = {
  '$$linear': 'linear',
  '$$ease': 'ease',
  '$$ease-in': 'ease-in',
  '$$ease-out': 'ease-out',
  '$$ease-in-out': 'ease-in-out',
  '$$bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'

};

export function generateAnimationTimingFunc (timingFuncStr) {
  let newTimingFuncStr = ''

  if (predefinedAnimations[timingFuncStr] != null) {
    newTimingFuncStr = predefinedAnimations[timingFuncStr]
  } else {
    newTimingFuncStr = timingFuncStr
  }

  return newTimingFuncStr
}