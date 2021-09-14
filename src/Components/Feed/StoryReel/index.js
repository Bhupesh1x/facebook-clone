import React from "react";
import "./StoryReel.css";
import Story from "./Story";

import { useStateValue } from "../../../StateProvider";
import { IconButton } from "@material-ui/core";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const StoryReel = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="storyReel">
      {/* <Story
        profileSrc='https://instagram.fbey4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/64543472_400523757481104_8253502120007827456_n.jpg?_nc_ht=instagram.fbey4-1.fna.fbcdn.net&_nc_ohc=m9OhBU01v_0AX-ux-Wz&tp=1&oh=7313ac35f1516929c072e8d436287a23&oe=605CE663'
        title='Cristiano Ronaldo'
        image='https://instagram.fbey4-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.322.828.828a/152947452_176276740695785_5420408323133371727_n.jpg?_nc_ht=instagram.fbey4-1.fna.fbcdn.net&amp;_nc_cat=1&amp;_nc_ohc=Gre6po2Hr60AX8NwRGh&amp;tp=1&amp;oh=d1f4e4cd62ec50bc8336c636b94d0291&amp;oe=60374A96&amp;ig_cache_key=MjUxNTAxNDM5NzQ0MTc4MjY2NQ%3D%3D.2'
      /> */}

      <Story
        profileSrc="https://cdn.britannica.com/42/193142-050-F69B1A23/Sundar-Pichai-Google.jpg"
        title="Sundar Pichai"
        image="https://images.livemint.com/img/2019/12/05/1600x900/8f055fb2-1675-11ea-b389-32c55aa780de_1575515772691_1575515802603.jpg"
      />

      <Story
        profileSrc="https://static.toiimg.com/thumb/msid-83311484,imgsize-321235,width-400,resizemode-4/83311484.jpg"
        title="Jeff Bazos"
        image="https://static.toiimg.com/thumb/msid-83311484,imgsize-321235,width-400,resizemode-4/83311484.jpg"
      />

      <Story
        profileSrc="https://static.toiimg.com/thumb/msid-85855402,imgsize-69076,width-400,resizemode-4/85855402.jpg"
        title="Ronaldo"
        image="https://images.indianexpress.com/2021/09/Untitled-design-4.jpg"
      />

      <Story
        profileSrc="https://instagram.fbey4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44329317_268583430479565_454483638147350528_n.jpg?_nc_ht=instagram.fbey4-1.fna.fbcdn.net&_nc_ohc=OOcYgdBqzwcAX-NEDky&tp=1&oh=350d32219bb35ac8e5e9db39e9234f26&oe=605DD830"
        title="Elon Musk"
        image="https://i.guim.co.uk/img/media/bb2fe725bc74f451d5bcbdcbee027c7fdfabaa76/0_100_5000_3002/master/5000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=09982b4628d5d748dab682f8f77173a7"
      />

      <div className="next__story">
        <IconButton>
          <ArrowForwardRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default StoryReel;
