export function getIndex (elem) {
  let parent = elem.parentNode
  let elems = parent.childNodes

  for (var i = 0; i < elems.length; i++) {
    if (elems[i] === elem) {
      return i
    }
  }
}
