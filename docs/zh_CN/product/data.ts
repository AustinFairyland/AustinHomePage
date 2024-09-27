/*
@File: data.ts
@Editor: WebStorm
@Author: Austin (From Chengdu.China) https://fairy.host
@HomePage: https://github.com/FairylandTech
@OperatingSystem: Windows 11 Professional Workstation 23H2 Canary Channel
@CreatedTime: 2024-01-12
*/

// @ts-ignore
import {NavLink} from "../.vitepress/theme/types";

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '🎉作者站点导航',
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/github.svg",
        title: 'Github',
        desc: '探索开源世界，发现充满创意和协作精神的代码库。',
        link: 'https://github.com/FairylandTech',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/gitlab.svg',
        title: 'GitLab',
        desc: '一个多功能的代码托管平台，致力于高效的软件开发流程。',
        link: 'https://gitlab.com/Austin.D',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/gitee.svg',
        title: 'Gitee',
        desc: 'Gitee，中国领先的开源代码托管平台，专注于高速下载和本地化服务。',
        link: 'https://gitee.com/AustinFairyland',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/gitbook.svg',
        title: 'GitBook',
        desc: '一个文档和知识共享的空间，充满了有用的技术指南和教程。',
        link: 'https://gitbook.fairy.host',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/docker.svg',
        title: 'DockerHub',
        desc: '在DockerHub上发现容器化应用和镜像，轻松实现软件的快速部署和扩展。',
        link: 'https://hub.docker.com/u/austinfairyland',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/telegram.svg',
        title: 'Telegram',
        desc: '即时获取最新消息和动态，与社区成员实时互动，分享您的想法和反馈。',
        link: '/',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/twitter.svg',
        title: 'Twitter',
        desc: '紧跟最新动态，参与话题讨论，发现有关行业趋势的即时讯息和观点分享。',
        link: '/',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/youtube.svg',
        title: 'YouTube',
        desc: '观看内容丰富的视频，包括教程、产品评测和行业洞察，深入了解我们的世界。',
        link: '/',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/instagram.svg',
        title: 'Instagram',
        desc: '享受视觉盛宴，从独特的角度探索我们的故事和创新时刻。',
        link: '/',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/csdn.svg',
        title: 'CSDN',
        desc: 'CSDN的博客，分享最新的编程技术、IT资讯和个人见解。',
        link: 'https://alicehome.blog.csdn.net',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/cnblogs.svg',
        title: '博客园',
        desc: '博客园，深入探索编程心得和技术难题的解决方案。',
        link: 'https://www.cnblogs.com/alicehome',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/zhihu.svg',
        title: '知乎',
        desc: '加入知乎的讨论，探讨热门技术话题和行业趋势。',
        link: 'https://www.zhihu.com/people/lao-gong-da-da',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/OfficialAccount.svg',
        title: '微信公众号',
        desc: '关注微信公众号，获取最新技术动态、教程和个人观点。',
        link: 'https://txcos.service.fairy.host/qrcode/qrcode_official_account_12x12.jpg',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/bilibili.svg',
        title: '哔哩哔哩',
        desc: '观看最新的视频内容，包括独家教程、行业解读和创意分享。',
        link: '/',
      },
    ],
  },
  {
    title: "🎉个人服务站点导航",
    items: [
      {
        icon: 'https://txcos.service.fairy.host/icon/siyuan.svg',
        title: 'Notebook',
        desc: 'SiyuanNotebook - 私人定制的数字记事本，记录您珍贵的思绪和灵感。',
        link: 'https://notebook.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/openwrt.svg',
        title: 'OpenWRT',
        desc: 'OpenWRT - 极致灵活的开源路由器操作系统，为您的网络连接提供无限可能。',
        link: 'https://openwrt.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/minio.jpeg',
        title: 'MinIO',
        desc: 'MinIO云存储 - 安全可靠的文件存储解决方案，守护您的数据安全。',
        link: 'https://minio.cloud.fairies.ltd/',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/nezha.svg',
        title: 'Dashboard',
        desc: 'NezhaDashboard - 监控和管理您的网络服务，确保性能和安全。',
        link: 'https://control.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/jupyter.svg',
        title: 'Jupyter Book',
        desc: 'JupyterBook - 探索数据科学和机器学习的强大工具，激发创新思维。',
        link: 'https://jupyterbook.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/portainer.svg',
        title: 'Portainer',
        desc: 'Portainer - 简化Docker容器管理，提高开发和部署效率。',
        link: 'https://portainer.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/nginx.svg',
        title: 'NginxProxyManager',
        desc: 'NginxProxyManager - 轻松管理和优化您的Web服务器配置。',
        link: 'https://proxy.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/nginx.svg',
        title: 'NginxProxy(PVT)',
        desc: 'NginxProxyManager - 私有Nginx代理，提供安全可靠的网络代理和加速服务。',
        link: 'https://privateproxy.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/redhat.svg',
        title: 'RedHat WebUI',
        desc: 'RedHat WebUI - 全面的Web界面，让您能够轻松管理和自动化您的RHEL。',
        link: 'https://redhat.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/image.svg',
        title: 'Picsur',
        desc: 'Picsur - 创新的在线图片分享和编辑平台，方便快捷地分享和编辑图片。',
        link: 'https://pic.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/ittools.svg',
        title: 'IT Tools',
        desc: 'IT Tools - 综合性的信息技术工具集合网站，提供各种IT资源和工具，提高效率。',
        link: 'https://ittools.cloud.fairies.ltd',
      },
      {
        icon: 'https://cdn.minioshare.cloud.fairies.ltd/images/icon/pingvin.png',
        title: 'Pingvin Share',
        desc: 'Pingvin Share - 文件共享服务，专注于数据安全和高效传输。',
        link: 'https://pingvin.cloud.fairies.ltd',
      },
      {
        icon: 'https://txcos.service.fairy.host/icon/bitwarden.svg',
        title: 'Bitwarden',
        desc: '密码管理工具，提供安全存储和跨设备同步您的密码、登录信息和其他敏感数据。',
        link: 'https://bitwarden.cloud.fairies.ltd',
      },
    ]
  },
  {
    title: "🎉个人作品展示",
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/homepage.ico",
        title: "个人主页",
        desc: "探索Austin的个人主页，了解更多关于他的专业技能和项目经历。",
        link: "/"
      },
      {
        icon: "/logo.jpg",
        title: "豆瓣电影数据可视化",
        desc: "豆瓣电影数据可视化 - 探索电影世界的趋势和洞见，图形化展示丰富数据。",
        link: "/"
      }
    ]
  },
  {
    title: "Python Modules",
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "Austin Framework",
        desc: "Austin Framework - 一个灵活的Python框架，助力快速开发和创新。",
        link: "https://github.com/FairylandTech/AustinFramework"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "Austin Daily Module - PyPI",
        desc: "每日更新的Python模块，提供实用的功能和工具。",
        link: "https://github.com/FairylandTech/AustinModuleDaily"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "Austin Fairyland Module - PyPI",
        desc: "Austin Fairyland的Python模块集，充满创新和实用性。",
        link: "https://github.com/FairylandTech/AustinFairylandRepository"
      },
    ]
  },
  {
    title: "PyPI",
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/pypi.svg",
        title: "Austin Daily Module",
        desc: "每日更新的Python模块，提供实用的功能和工具。",
        link: "https://pypi.org/project/austin-module-daily/"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/pypi.svg",
        title: "Austin Fairyland Module",
        desc: "Austin Fairyland的Python模块集，充满创新和实用性。",
        link: "https://pypi.org/project/pyfairyland/"
      },
    ]
  },
  {
    title: "Docker Image",
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/docker.svg",
        title: "Auto commit git",
        desc: "自动Git提交工具，确保代码的持续集成和版本控制。",
        link: "https://hub.docker.com/r/austinfairyland/auto-git-commit"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/docker.svg",
        title: "Douban API",
        desc: "豆瓣API - 接入丰富的电影和书籍信息，拓展您的应用功能。",
        link: "https://hub.docker.com/r/austinfairyland/douban-api"
      },
    ]
  },
  {
    title: "Python Project",
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "自动提交Git",
        desc: "自动化Git提交流程，优化您的代码管理和合作。",
        link: "https://github.com/FairylandTech/AustinPersAutoGitCommit"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "豆瓣电影数据爬虫",
        desc: "高效爬取豆瓣电影数据，为数据分析和应用开发提供强大支持。",
        link: "https://github.com/FairylandTech/AustinPersDoubanFilmSpider"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "豆瓣电影数据可视化API",
        desc: "提供豆瓣电影数据的可视化接口，增强数据展示的直观性和互动性。",
        link: "https://github.com/FairylandTech/AustinPersDoubanFilmAPI"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "天翼云 - 边缘云计算",
        desc: "探索天翼云的边缘计算能力，为应用提供高效和可靠的云服务。",
        link: "https://github.com/FairylandTech/AceProjectCTCloudEOPAuth"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "天气识别API",
        desc: "实时天气识别API，为您的应用提供准确的气象信息。",
        link: "https://github.com/FairylandTech/work_weather_identify_runnet_backend"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "空域安全区域绘制",
        desc: "精确绘制空域安全区域，保障航空安全和航线规划。",
        link: "https://github.com/FairylandTech/work_safe_runnet_service"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "订餐微信小程序API",
        desc: "微信小程序API - 为订餐系统提供高效、稳定的后端支持。",
        link: "https://github.com/FairylandTech/work_order_food_jid_service"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/python.svg",
        title: "订餐数据清洗分析与可视化",
        desc: "清洗和分析订餐数据，提供直观的可视化报告和洞察。",
        link: "https://github.com/FairylandTech/work_order_food_data_clean_jid_service"
      }
    ]
  },
  {
    title: "GoLong Project",
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/golang.svg",
        title: "Goland",
        desc: "Goland项目 - 探索Go语言的高效编程和应用开发。",
        link: "https://github.com/FairylandTech/other_none_golang_go1"
      },
    ]
  },
  {
    title: "Java Project",
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/java.svg",
        title: "基于鸿蒙OS的记账本",
        desc: "利用鸿蒙OS开发的记账本应用，管理财务更简单高效。",
        link: "https://github.com/FairylandTech/other_none_harmony_android"
      },
    ]
  },
  {
    title: "Vue&Vite Project",
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/vite.svg",
        title: "个人主页",
        desc: "使用VitePress构建的个人主页，展示Austin的技术实力和创意。",
        link: "https://github.com/FairylandTech/AustinHomePage"
      },
      {
        icon: "https://txcos.service.fairy.host/icon/vue.svg",
        title: "豆瓣电影数据可视化",
        desc: "基于Vue的豆瓣电影数据可视化项目，图形化展现电影世界的多样性。",
        link: "https://github.com/FairylandTech/AustinPersDoubanFilmWeb"
      }
    ]
  },
  {
    title: "Mini Project",
    items: [
      {
        icon: "https://txcos.service.fairy.host/icon/miniprogram.svg",
        title: "微信小程序 - 订餐系统",
        desc: "微信小程序 - 便捷的订餐系统，提供快速点餐和管理功能。",
        link: "https://github.com/FairylandTech/work_order_food_jid_mini_program"
      },
    ]
  },
]
