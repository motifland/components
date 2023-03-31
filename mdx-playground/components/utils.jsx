import React from 'https://esm.sh/react'
import ReactDOMClient from 'https://esm.sh/react-dom/client'
import { transform } from 'https://cdn.skypack.dev/sucrase@3.20.3'

export const copyToClipboard = (text) => {
  navigator?.clipboard && navigator.clipboard.writeText(text)
}

export const toTextContent = (element) => {
  if (!element) {
    return ''
  }
  if (typeof element === 'string') {
    return element
  }
  const children = element.props && element.props.children
  if (children instanceof Array) {
    return children.map(toTextContent).join('')
  }
  return toTextContent(children)
}

export const jsxToJs = (jsx, createElementOnly) => {
  const js = transform(jsx, { transforms: ['jsx'] }).code
  if (createElementOnly) {
    return js
      .replace('const _jsxFileName = "";', '')
      .replace(/fileName: _jsxFileName, /g, '')
  }
  return js
}

export const renderJsx = (jsx, containerId, scope, delay) => {
  const js = jsxToJs(jsx, true)
  let _scope = scope || {}
  const scopeKeys = Object.keys(_scope)
  const scopeValues = scopeKeys.map((key) => _scope[key])
  return new Function(
    'React',
    'ReactDOMClient',
    ...scopeKeys,
    `
    const render = () => {
      const el = document.getElementById("${containerId}")
      try {
        const root = ReactDOMClient.createRoot(el)
        root.render(${js})
        return true
      } catch (e) {
        return false
      }
    }

    setTimeout(() => {
      let success = render()
      if (!success) {
        // Give it a second try, e.g. if the root
        // element is not ready.
        setTimeout(() => {
          success = render()
          if (!success) {
            // Last try!
            setTimeout(render, 500)
          }
        }, 300)
      }
    }, ${delay || 200})`
  )(React, ReactDOMClient, ...scopeValues)
}
