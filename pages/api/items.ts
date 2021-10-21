// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  // data: object
}

const data = [
  {
    user: {
      pic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "tracymcgrady",
    },
    item: {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000",
      title: "Leaf iPhone Case Hard Plastic",
      description: "Lorem Ipsum is simply dummy text.",
      isFavourite: false,
      likes: 12,
      price: 230,
      comments: 32,
      tags: ["#phones", "#apple", "#oneplus", "#smartphones", "#photography", "#cellphone", "#mobilephotography"]
    }
  },
  {
    user: {
      pic: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
      name: "amaliasaedx",
    },
    item: {
      image: "https://media.wired.com/photos/5d803f5dc891950008ce3447/master/pass/iphone-11_6175-Edit.jpg",
      title: "Leaf iPhone Case Hard Plastic",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavourite: true,
      likes: 43,
      price: 233,
      comments: 44,
      tags: ["#phones", "#apple", "#oneplus"]
    }
  },
  {
    user: {
      pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "lsiofef_djwow__",
    },
    item: {
      image: "https://s.yimg.com/uu/api/res/1.2/EJBjzSxkOgUGP4NURZ18lg--~B/aD0xMjAxO3c9MjQwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/dyOwPcwvcP2s53a9.6CixA--~B/aD0xMjAxO3c9MjQwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-09%2F7e257820-d832-11e9-befd-69226dd6b94b&client=a1acac3e1b3290917d92&signature=2135d2844d8ce3fb28f241a98e0f71a155d58938.cf.jpg",
      title: "Leaf iPhone Case Hard Plastic",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavourite: true,
      likes: 54,
      price: 2330,
      comments: 322,
      tags: ["#phones", "#apple", "#oneplus", "#smartphones", "#photography", "#cellphone", "#mobilephotography"]
    }
  },
  {
    user: {
      pic: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "iuewew_2",
    },
    item: {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000",
      title: "Leaf iPhone Case Hard Plastic",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavourite: false,
      likes: 2,
      price: 3233,
      comments: 333,
      tags: ["#phones", "#apple", "#oneplus", "#smartphones", "#photography", "#cellphone", "#mobilephotography"]
    }
  },
  {
    user: {
      pic: "https://backlightblog.com/images/2020/10/instagram-profile-picture-header-1160x760.jpg",
      name: "sada_dnjne",
    },
    item: {
      image: "https://www.cnet.com/a/img/TOVBoerScgysNMpehvQrVPoL65Y=/940x0/2021/09/14/610e0eaf-9960-4daa-a34b-470826204e15/apple-event-091421-iphone-13-34.jpg",
      title: "Leaf iPhone Case Hard Plastic",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavourite: false,
      likes: 76,
      price: 453,
      comments: 23,
      tags: ["#phones", "#apple", "#oneplus", "#smartphones", "#photography", "#cellphone", "#mobilephotography"]
    }
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
