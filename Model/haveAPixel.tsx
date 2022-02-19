import { CookieValueTypes } from 'cookies-next/lib/types';
import jwt from 'jwt-decode'
import { NextRouter } from 'next/router';
import { apiPixel } from '../api/api';

async function HaveAPixel(
    token: CookieValueTypes,
    router: NextRouter
  ) {
    const user:any = jwt(token as string);
    
    await apiPixel.get('/pixel/by-mail/?email=' + user.email).then(res => {
      router.push('/pixellife')
    }).catch(err => {
      console.log(err)
    })
  }

export default HaveAPixel