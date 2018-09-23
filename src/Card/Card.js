import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
  render() {
    const {
      name,
    } = this.props

    return (
      <div className='card'>
        { name }
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string,
}

Card.defaultProps = {
}

export default Card
