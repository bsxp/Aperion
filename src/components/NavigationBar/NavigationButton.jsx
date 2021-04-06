import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

function NavigationButton(props) {

    const { children, style, path, ...rest} = props
        
    return (
        <Button style={{color: 'var(--theme-gray)', textTransform: 'none', ...style}} {...rest}> 
            {children} 
        </Button>
    )
}

NavigationButton.propTypes = {

}

export default NavigationButton

