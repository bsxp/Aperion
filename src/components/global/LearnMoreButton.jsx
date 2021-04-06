import React from 'react'
import PropTypes from 'prop-types'
import { Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        color: 'white',
        backgroundColor: 'var(--theme-main)',
        borderRadius: '2px',
        marginTop: '32px',
        transition: '0.2s',
        '&:hover': {
            backgroundColor: 'var(--theme-main-darkened)'
        }
    },
}))

function LearnMoreButton(props) {

    const classes = useStyles()

    const { style, children, ...rest} = props

    return (
        <Button className={classes.root}>
            Learn more
        </Button>
    )
}

LearnMoreButton.propTypes = {

}

export default LearnMoreButton

