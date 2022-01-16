/**
 * Reconfigure default HMR behavior, now it clears your console on every
 * codebase update
 */
if (true) {
  if (module.hot) {
    module.hot.accept();
    module.hot.addStatusHandler(status => {
      if (status === 'prepare') console.clear();
    });
  }
}
