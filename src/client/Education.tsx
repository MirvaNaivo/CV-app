import { useEffect, useState } from 'react';

import UpsideDown from './images/Upsidedown.jpg'

/* Mui */
import { Divider, Grid, Paper, Typography } from '@mui/material'

export default function Education() {

    const [data, setData] = useState([{ name: "", date: "", field: "", description: "" }])

    useEffect(() => {
        async function getEducation() {
            try {
                const response = await fetch("/api/education")
                if (!response.ok) {
                    throw new Error("Failed to fetch education: " + response.statusText)
                }
                const education = await response.json()
                setData(education)
            } catch (error) {
                console.error(error);
            }
        }
        getEducation()
    }, [])

    return (
        <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
                <Paper elevation={1} sx={{ p: 2 }}>
                    <img src={UpsideDown} width='325px' />
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                {data.map((education) => (
                    <>
                        <Typography variant='h6' gutterBottom>
                            {education.name}
                        </Typography>
                        <Divider />
                        Date:
                        <Typography variant='subtitle1'>
                            {education.date}
                        </Typography>
                        Role:
                        <Typography variant='subtitle1'>
                            {education.field}
                        </Typography>
                        <Typography sx={{ my: '16px' }}>
                            {education.description}
                        </Typography>
                    </>
                ))}
            </Grid>
        </Grid>
    )

}