import { useEffect, useState } from 'react'
import Professional from './images/Professional.jpg'

/* Mui */
import { Grid, Link, Paper, Typography } from '@mui/material'

export default function Personal() {

    const [data, setData] = useState({ name: "", email: "", linkedin: "", github: "" })

    useEffect(() => {
        async function getPersonalInfo() {
            try {
                const response = await fetch("/api/personal_info")    
                console.log(response.body)
                if (!response.ok) {
                    throw new Error("Failed to fetch personal info: " + response.statusText)
                }
                const info = await response.json()
                setData(info)
            } catch (error) {
                console.error(error);
            }
        }
    
        getPersonalInfo()
    }, [])

    return (
        <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
                <Paper elevation={1} sx={{ p: 2, marginBottom: 2 }}>
                    <Typography variant='h6' gutterBottom>
                        Contact me
                    </Typography>
                    <Typography>{data.name}</Typography>
                    <Typography>{data.email}</Typography>
                    <Link href={data.linkedin}>LinkedIn</Link> <br />
                    <Link href={data.github}>Github</Link>
                </Paper>
                <Paper elevation={1} sx={{ p: 2 }}>
                    <img src={Professional} width='325px' />
                </Paper>
            </Grid>
            <Grid item xs={12} md={8} >
                <Typography variant='h4' gutterBottom>
                    About me
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I'm a new talent in developing looking for the next adventure in Fullstack Development. I have a wide experience in different fields
                    and I find it to be great base for developing software for different types of customers and understanding what they need.
                </Typography><br />
                <Typography variant='h6' gutterBottom>
                    My Specialities
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I love to solve problems, improve myself and the ways I work. I always think of the big picture, even though I love to focus on the smallest details.
                    I'm very analytical and pedantic.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I'm great at explaining technical things understandably to end users and communicating with stakeholders. I'm an exceptionally fast learner and
                    becoming professional in my own field is one of the things I strive for.
                </Typography><br />
                <Typography variant='h6' gutterBottom>
                    Feedback from managers and collegues
                </Typography>
                <Typography variant='body1' gutterBottom>
                    The qualities my managers and collegues appriciate about me are reliability, efficiecy, calm and clear way of explaining things and being approachable.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I make sure to do the things assigned to me on time and as efficiently as possible. I do things carefully and according to the standards.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    As a team leader trainee my team appriciated that I was available and understanding.
                    I made sure that I had time for them and did my best at solving problems with the ways of working.
                </Typography><br />
                <Typography variant='h6' gutterBottom>
                    Hobbies
                </Typography>
                <Typography variant='body1' gutterBottom>
                    In my freetime I try to do things that don't involve sitting at the computer. I love to go hiking with my dog, playing the cello,
                    doing puzzles and playing boardgames. I also like to do DIY projects like small facelifts at the house or renovate furniture.
                </Typography>
            </Grid>
        </Grid>
    )
}