import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Typography, Grid } from '@material-ui/core'
import LearnMoreButton from '../../global/LearnMoreButton'
import { stories, storyHeader } from '../../../copyText/landingCopy'
import WomanPortrait from '../../../resources/images/portrait-1.jpeg'
import StoryBlockA from './StoryBlocks/StoryBlockA'
import StoryBlockB from './StoryBlocks/StoryBlockB'


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '64px',
        paddingLeft: '4%',
        paddingRight: '4%',
        overflow: 'hidden'
    },
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: '64px'
    },
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
    imageContainer: {
        position: 'relative',
    },
    imageBackdrop: {
        backgroundColor: 'var(--theme-gray)',
        position: 'absolute',
        top: 0,
        right: -20,
        height: '100px',
        width: '120px',
        zIndex: -1
    },
    image: {
        top: 20,
        right: 0,
        height: '230px',
        position: 'absolute',
        width: 'auto',
        borderRadius: '2px',
        boxShadow: '5px 5px 9px -2px rgba(0,0,0,0.16)'
    }
}))

function SuccessesSection(props) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <StoryBlockA story={stories[0]} />
            <StoryBlockB story={stories[0]} />
        </div>
    )
}

SuccessesSection.propTypes = {

}

export default SuccessesSection

