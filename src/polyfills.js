import classNames from 'classnames'

/**
 | ------------------
 | String
 | ------------------
*/

String.cx = classNames

/**
 | ------------------
 | Promise
 | ------------------
*/

Promise.delay = (duration, value) => {
  return new Promise((resolve) => setTimeout(() => resolve(value), duration))
}

Promise.allSettled = (promises) => {
  return Promise.all(
    promises.map((p) =>
      Promise.resolve(p).then(
        (value) => ({
          state: 'fulfilled',
          value,
        }),
        (reason) => ({
          state: 'rejected',
          reason,
        })
      )
    )
  )
}
