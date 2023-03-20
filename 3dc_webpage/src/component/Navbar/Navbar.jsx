import React from 'react'
import Logo3DC from './Logo3DC'
import Logo3DCHover from './Logo3DCHover'
import SutdLogo from './SutdLogo'


const sxButton = {
  height: '64px',
  width: 'auto',
  margin: '0px',
  border: 'none',
  marginRight: '2em',
  padding: '0px',
  paddingTop: '16px',
  backgroundColor: 'transparent',
  color: 'white',
  fontFamily: 'Google Sans',
  fontSize: '1.5em',
  fontWeight: '400'
}

function Navbar ({ Page, setPage }) {
  

  return (
    <>
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          paddingTop: '17px',
          border: 'none',
          textAlign: 'center',
          minHeight: '7em',
          // height: '500px',
          // backgroundImage: `url(../team_photo.png)`,
        }}
      >
        <div>
          <div>
            <button style={sxButton} onClick={() => setPage('Home')}>
              Home
            </button>
            <button style={sxButton} onClick={() => setPage('About')}>
              About
            </button>
            <button style={sxButton} onClick={() => setPage('Events')}>
              Event
            </button>
            <button style={sxButton} onClick={() => setPage('Workshops')}>
              Workshops
            </button>
            <button style={sxButton} onClick={() => setPage('Project')}>
              Projects
            </button>
            <button style={sxButton} onClick={() => setPage('Member')}>
              Members
            </button>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '0px',
            marginLeft: '35px',
            marginTop: '17px',
          }}
        >
          <SutdLogo />
        </div>
        {/* Logo */}
      </div>
      {/* <div>{Page}</div> */}
    </>
  )
}

export default Navbar
