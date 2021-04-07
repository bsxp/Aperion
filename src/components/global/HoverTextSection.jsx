import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Typography, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    hoverLine: {
        height: '2px',
        borderRadius: '0.5px',
        width: '100px',
        transition: '0.2s ease',
        backgroundColor: 'var(--theme-main)',
        marginBottom: '16px',
        marginTop: '4px'
    },
    hoverLineActivated: {
        width: '180px'
    }
}))


function HoverTextSection({style, ...props}) {

    const [ hovered, setHovered ] = React.useState(false)

    const classes = useStyles()

    const { header, body } = props

    const lineClasses = clsx({
        [classes.hoverLine]: true,
        [classes.hoverLineActivated]: hovered
    })

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{...style}}>
            <Typography className={classes.header}>
                {header}
            </Typography>
            <div className={lineClasses}/>
            <Typography className={classes.body}>
                {body}
            </Typography>
        </div>
    )
}

HoverTextSection.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default HoverTextSection

