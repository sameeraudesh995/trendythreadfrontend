// import { Button, Grid, Typography } from "@mui/material";
// import React from "react";
// import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
// import FacebookIcon from '@mui/icons-material/Facebook';

// const Footer = () => {
//   return (
//     <div>
//       <Grid
//         className="bg-black text-white text-center mt-10"
//         container
//         sx={{ bgcolor: "black", color: "white", py: 3 }}
//       >
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Company
//           </Typography>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               About
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Blog
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               press
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Jobs
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Partners
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Solution
//           </Typography>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Marketing
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//              Analytics
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Commerce
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Insights
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Support
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Documentation
//           </Typography>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Guides
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               API Status
//             </Button>
//           </div>
          
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Legal
//           </Typography>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Claim
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Privacy
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//              Terms
//             </Button>
//           </div>
          
//         </Grid>
//         <Grid>
//         <FacebookIcon/>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Footer;
'use client';

import { Footer } from 'flowbite-react';
import {  BsFacebook, BsTiktok, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterSitemapLinks() {
  return (
    <Footer className='rounded-none bg-blue-200 text-white text-center justify-normal mt-10  mb-0 '>
      <div className="w-full mb-0  ">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 font-weight: 400 " >
          <div className='space-y-2 ' >
            <Footer.Title title="Company" className='font-bold'/>
            <Footer.LinkGroup col className='space-y-2'>
              <Footer.Link href="#">
                About
              </Footer.Link>
              <Footer.Link href="#">
                Careers
              </Footer.Link>
              <Footer.Link href="#">
                Brand Center
              </Footer.Link>
              <Footer.Link href="#">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          
          <div className='space-y-2'>
            <Footer.Title title="help center" className='font-bold'/>
            <Footer.LinkGroup col className='space-y-2'>
              <Footer.Link href="#">
                Discord Server
              </Footer.Link>
              <Footer.Link href="#">
                Twitter
              </Footer.Link>
              <Footer.Link href="#">
                Facebook
              </Footer.Link>
              <Footer.Link href="#">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className='space-y-2'>
            <Footer.Title title="legal" className='font-bold' />
            <Footer.LinkGroup col className='space-y-2'>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Licensing
              </Footer.Link>
              <Footer.Link href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className='space-y-2'>
            <Footer.Title title="download" className='font-bold' />
            <Footer.LinkGroup col className='space-y-2'>
              <Footer.Link href="#">
                iOS
              </Footer.Link>
              <Footer.Link href="#">
                Android
              </Footer.Link>
              <Footer.Link href="#">
                Windows
              </Footer.Link>
              <Footer.Link href="#">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className=" w-full bg-blue-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className='font-bold text-black'
            by="SameeraUdesh"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-black">
            <Footer.Icon
            className=' text-black'
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
            className=' text-black'
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
            className=' text-black'
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
            className=' text-black'
              href="#"
              icon={BsTiktok}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}



