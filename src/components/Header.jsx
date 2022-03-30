import PropTypes from 'prop-types'

function Header({ text, backgroundColor, color }) {
  const myStyle = { backgroundColor, color }

  return (
    <header style={myStyle}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}

export default Header
