const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={500}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>{createRoutes(routes)}</Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default AnimatedSwitch;
