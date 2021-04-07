import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import LearnMoreButton from '../../../global/LearnMoreButton'
import StoryBlockText from './StoryBlockText'
import WomanPortrait from '../../../../resources/images/portrait-1.jpeg'


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

function StoryBlockA(props) {

    const { story } = props 

    const classes = useStyles()

    return (
        <Grid container style={{marginBottom: '32px'}}>
                <StoryBlockText story={story} isLeftText={true}/>
                <Grid item xs={6}>
                    <div className={classes.imageContainer}>
                        <img src={WomanPortrait} className={classes.image} />
                        <div className={classes.imageBackdrop}/>
                    </div>
                </Grid>
            </Grid>
    )
}

StoryBlockA.propTypes = {

}

export default StoryBlockA

