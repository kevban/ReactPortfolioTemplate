import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import Style from './PortfolioBlock.module.scss'

function PortfolioBlock({ image, live, source, title, description, skills }) {
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} sx={
            {
               width: {lg:'36rem', md:'26rem', sm: '28rem', xs:'22rem'},
               height: {lg:'22rem', md:'18rem', sm: '20rem', xs:'16rem'},
               borderRadius: '1rem',
               objectFit: 'cover',
               boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
               mb: '2rem',
               imageRendering: 'crisp-edges'
            }
         } />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <h3 style={{ fontSize: '1rem' }}>{description}</h3>
         <Box display={'flex'} flexDirection={'row'} gap={'0.5rem'}
            alignItems={'center'} justifyContent={'center'} fontSize={'1.5rem'} mt={'1rem'} sx={{
               flexWrap: 'wrap'
            }}>
            {
               skills.map((skill, idx) => {
                  return <div key={idx} className={Style.chip}><span className={Style.chipLabel}>{skill}</span></div>
               })
            }
         </Box>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;