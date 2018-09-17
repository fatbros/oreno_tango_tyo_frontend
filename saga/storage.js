export const setJwtToken = jwtToken => {
  try {
    window.localStorage.setItem('jwtToken', jwtToken)
  } catch (err) {
    throw err
  }
}

export const getJwtToken = () => {
  try {
    return window.localStorage.getItem('jwtToken')
  } catch (err) {
    throw err
  }
}
