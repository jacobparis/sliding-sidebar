/**
 * Original source: https://gist.github.com/adamwathan/3b9f3ad1a285a2d1b482769aeb862467
 * Author: Adam Wathan
 *
 * I modified the script to not remove the enterTo and leaveTo classes upon completing the transition
 * Instead they're removed when the opposite transition begins
 */
import { CSSTransition as ReactCSSTransition } from 'react-transition-group'
import * as React from 'react'

const TransitionContext = React.createContext({
  parent: {},
})

function useIsInitialRender() {
  const isInitialRender = React.useRef(true)
  React.useEffect(() => {
    isInitialRender.current = false
  }, [])
  return isInitialRender.current
}

function CSSTransition({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  children,
}) {
  const enterClasses = enter.split(' ').filter((s) => s.length)
  const enterFromClasses = enterFrom.split(' ').filter((s) => s.length)
  const enterToClasses = enterTo.split(' ').filter((s) => s.length)
  const leaveClasses = leave.split(' ').filter((s) => s.length)
  const leaveFromClasses = leaveFrom.split(' ').filter((s) => s.length)
  const leaveToClasses = leaveTo.split(' ').filter((s) => s.length)

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes)
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes)
  }

  return (
    <ReactCSSTransition
      appear={appear}
      unmountOnExit
      in={show}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false)
      }}
      onEnter={(node) => {
        removeClasses(node, [...leaveToClasses])
        addClasses(node, [...enterClasses, ...enterFromClasses])
      }}
      onEntering={(node) => {
        removeClasses(node, [...enterFromClasses])
        addClasses(node, [...enterToClasses])
      }}
      onEntered={(node) => {
        removeClasses(node, [...enterClasses])
      }}
      onExit={(node) => {
        removeClasses(node, [...enterToClasses])
        addClasses(node, [...leaveClasses, ...leaveFromClasses])
      }}
      onExiting={(node) => {
        removeClasses(node, [...leaveFromClasses])
        addClasses(node, [...leaveToClasses])
      }}
      onExited={(node) => {
        removeClasses(node, [...leaveClasses])
      }}
    >
      {children}
    </ReactCSSTransition>
  )
}

function Transition({ show, appear, ...rest }) {
  const { parent } = React.useContext(TransitionContext)
  const isInitialRender = useIsInitialRender()
  const isChild = show === undefined

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    )
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  )
}

export default Transition
