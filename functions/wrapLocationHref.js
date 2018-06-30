const wrapLocationHref = url => {
  if (!url) {
    return window.location.href
  }

  if (process.env.NODE_ENV === 'test') {
    jsdom.reconfigure({
      url
    })
  } else {
    window.location.href = url
  }
}

export default wrapLocationHref
