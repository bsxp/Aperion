import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import LearnMoreButton from '../../../global/LearnMoreButton'

const useStyles = makeStyles(theme => ({
    storyHeader: {
        fontSize: 14,
        fontWeight: '700'
    },
    subheader: {
        fontSize: 12,
        color: 'var(--theme-main)',
        marginBottom: '16px'
    },
    body: {
        fontSize: 14,
        color: 'rgb(40,40,40)'
    },
}))

function StoryBlockText({style, ...props}) {

    const { isLeftText } = props
    const { header, subheader, body } = props.story

    const classes = useStyles()

    return (
        <React.Fragment>
            <Grid item xs={6} style={{...style }}>
                    <Typography className={classes.storyHeader}>
                        {header}
                    </Typography>
                    <Typography className={classes.subheader}>
                        {subheader}
                    </Typography>
                    <Typography className={classes.body}>
                        {body}
                    </Typography>
                    <LearnMoreButton style={{textTransform: 'none', fontWeight: '900'}}>
                        Read more
                    </LearnMoreButton>
                </Grid>
        </React.Fragment>
    )
}

StoryBlockText.propTypes = {

}

export default StoryBlockText

