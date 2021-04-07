import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import LearnMoreButton from '../../../global/LearnMoreButton'
import StoryBlockText from './StoryBlockText'
import BuildingImage from '../../../../resources/images/building-1.jpg'

const useStyles = makeStyles(theme => ({
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
        left: -20,
        height: '100px',
        width: '120px',
        zIndex: -1
    },
    image: {
        top: 20,
        right: 20,
        height: '230px',
        position: 'absolute',
        width: 'auto',
        borderRadius: '2px',
        boxShadow: '5px 5px 9px -2px rgba(0,0,0,0.16)'
    }
}))

function StoryBlockB(props) {

    const { story } = props 

    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={6}>
                <div className={classes.imageContainer}>
                    <img src={BuildingImage} className={classes.image} />
                    <div className={classes.imageBackdrop}/>
                </div>
            </Grid>
            <StoryBlockText story={story} isLeftText={false}/>
        </Grid>
    )
}

StoryBlockB.propTypes = {

}

export default StoryBlockB

