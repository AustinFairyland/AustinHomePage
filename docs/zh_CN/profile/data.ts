// @ts-ignore
import {NavLink} from "../.vitepress/theme/types";

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '作者站点导航',
    items: [
      {
        icon: '/logo.jpg',
        title: 'Github',
        desc: '',
        link: 'https://github.com/FairylandTech',
      },
    ],
  }
]
