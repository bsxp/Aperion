import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import HoverTextSection from '../../global/HoverTextSection'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            padding: '32px',

        },
        [theme.breakpoints.up('md')]: {
            marginTop: '128px',
            padding: '32px',
            paddingLeft: '196px',
            paddingRight: '196px'

        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '300px',
            paddingRight: '300px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '16px',
        },
        marginTop: '100px'
    },
    container: {
        borderRadius: '2px',
        border: '0.5px solid rgb(200,200,200)',
        [theme.breakpoints.up('sm')]: {
            padding: '32px',

        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '16px',
            paddingBottom:'16px',


        }
    },
    textField: {
        borderRadius: '2px',
        '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'var(--theme-main)',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--theme-main)',
            },
          },
    },
    submit: {
        textTransform: 'none',
        borderRadius: '2px',
        backgroundColor: 'var(--theme-main)',
        color: 'white',
        width: '100%',
        fontWeight: '900',
        transition: '0.2s',
        '&:hover': {
            backgroundColor: 'var(--theme-main-darkened)'
        }
    }
}))

function ContactForm(props) {

    const classes = useStyles()

    const { register, errors, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log({data})
    }

    console.log({errors})

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container className={classes.container} spacing={2}>
                    <Grid item xs={12}>
                        <HoverTextSection header="CONTACT US" body=""/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={errors.name}
                            fullWidth
                            name="name"
                            variant="outlined"
                            placeholder="Name"
                            label="Name"
                            inputRef={register({
                                required: true,
                                minLength: 2,
                                pattern: /^[\w'\-,.][^0-9_!¡?÷?¿/\\.+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
                            })}
                            helperText={errors.name ? "Name must be at least 2 characters long and only contain word characters." : null}
                            
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={errors.company}
                            fullWidth
                            name="company"
                            variant="outlined"
                            placeholder="Company"
                            label="Company"
                            inputRef={register({
                                pattern : /^[\w'\-,.][^0-9_!¡?÷?¿/\\.+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                            })}
                            helperText={errors.company ? "Please enter a valid company name" : null}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={errors.email}
                            fullWidth
                            name="email"
                            variant="outlined"
                            placeholder="email@example.com"
                            label="Email"
                            inputRef={register({
                                required: true,
                                minLength: 5,
                                pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                            })}
                            helperText={errors.email ? "Please enter a valid email address." : null}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={errors.message}
                            fullWidth
                            name="message"
                            variant="outlined"
                            placeholder="Message"
                            label="Message"
                            rows={6}
                            multiline
                            rowsMax={6}
                            inputRef={register({
                                required: true,
                                minLength: 10
                            })}
                            helperText={errors.message ? "Message must be at least 10 characters long." : null}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.submit} type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

ContactForm.propTypes = {

}

export default ContactForm

