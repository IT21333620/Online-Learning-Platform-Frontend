import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box, Divider, Typography } from '@mui/material'
import { useKeycloak } from '@react-keycloak/web'
import { Icon } from '@iconify/react'

const UserDropdown = () => {
  const KEYCLOAK_REALM = process.env.REACT_APP_KEYCLOAK_REALM
  const KEYCLOAK_URL = process.env.REACT_APP_KEYCLOAK_URL

  const { keycloak } = useKeycloak()
  const roles = keycloak?.tokenParsed?.resource_access['realm-management']?.roles || []

  const userData = keycloak.tokenParsed

  // console.log('userData', keycloak)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    keycloak.logout()
    setAnchorEl(null)
  }

  const handleProfileClick = () => {
    // console.log('profile clicked')
    setAnchorEl(null)
    
    window.open(`${KEYCLOAK_URL}realms/${KEYCLOAK_REALM}/account`, '_blank')

    // keycloak.loadUserProfile().then(profile => {
    //   console.log('profile', profile)
    // })
  }

  const handleManageUsersClick = () => {
    setAnchorEl(null)

    window.open(`${KEYCLOAK_URL}admin/${KEYCLOAK_REALM}/console`, '_blank')
  }

  return (
    <>
      <img
        src='/images/userIcoDefault.png'
        alt='UserImage'
        width={45}
        height={45}
        id='user-icon'
        onClick={handleClick}
        draggable={false}
        onContextMenu={e => e.preventDefault()}
        style={{
          cursor: 'pointer',
          userDrag: 'none',
          WebkitUserDrag: 'none',
          userSelect: 'none',
          MozUserSelect: 'none',
          WebkitUserSelect: 'none',
          msUserSelect: 'none'
        }}
      />

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'user-icon'
        }}
        sx={{ mt: 2, '& .MuiMenu-paper': { minWidth: 200, p: 1 } }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            my: 1,
            mx: 2
          }}
        >
          <img
            src='/images/userIcoDefault.png'
            alt='UserImage'
            width={45}
            height={45}
            draggable={false}
            onContextMenu={e => e.preventDefault()}
            style={{
              userDrag: 'none',
              WebkitUserDrag: 'none',
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none',
              msUserSelect: 'none'
            }}
          />
          <Box sx={{ mx: 2, my: 1 }}>
            <Typography variant='body1'>{userData?.name}</Typography>
            <Typography variant='body2'>{userData?.email}</Typography>
          </Box>
        </Box>
        <Divider sx={{ mx: 2, my: 1 }} />
        <MenuItem onClick={handleProfileClick}>
          <Icon icon='gg:profile' className='appbar-icon' />
          Profile
        </MenuItem>

        {roles.includes('manage-users') && (
          <MenuItem onClick={handleManageUsersClick}>
            <Icon icon='uiw:user-add' className='appbar-icon' />
            Manage Keycloak Users
          </MenuItem>
        )}

        <MenuItem onClick={handleLogout}>
          <Icon icon='ic:baseline-logout' className='appbar-icon' />
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserDropdown
