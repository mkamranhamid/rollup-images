/**
 * @class ExampleComponent
 */

import * as React from 'react'

import Star from './star.svg'
import styles from './styles.css'

export type Props = { text: string }

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const {
      text
    } = this.props

    return (
      <div>
        <div className={styles.test}>
          Example Component: {text}
        </div>
        <img src={Star} alt="image" />
        <span className={styles.star}></span>
      </div>
    )
  }
}
