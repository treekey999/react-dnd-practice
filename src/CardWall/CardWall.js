import React from 'react'
import PropTypes from 'prop-types'

class CardWall extends React.Component {
  render() {
    const {
      children,
      status,
    } = this.props

    return (
      <div className='card-wall'>
        <div className='card-wall-wrapper'>
          <p>{ status }</p>
          <div className='card-wall-content'>
            { children }
          </div>
        </div>
      </div>
    )
  }
}

CardWall.propTypes = {
  children: PropTypes.node,
  status: PropTypes.string.isRequired,
}

CardWall.defaultProps = {
}

export default CardWall
