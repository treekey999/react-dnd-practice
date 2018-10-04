import React from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'

const dragSource = {
  beginDrag(props) {
    return {
      ...props,
    }
  }
}

function dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Card extends React.Component {
  render() {
    const {
      name,
      empty,
      isDragging, // Injected by React DnD
      connectDragPreview, // Injected by React DnD
      connectDragSource, // Injected by React DnD
    } = this.props


    return connectDragSource(
      <div
        className={`card ${ empty ? 'empty-card' : '' }`}
        style={{
          opacity: isDragging ? 0.6 : 1,
          cursor: isDragging ? 'grabbing' : 'pointer',
        }}
      >
        <span>{ name }</span>
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string,
  empty: PropTypes.bool,

  // Injected by React DnD
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
}

Card.defaultProps = {
}

export default DragSource('CONNECT_CARD', dragSource, dragCollect)(Card)
