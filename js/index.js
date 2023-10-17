const { createApp, ref, watchEffect } = Vue

const RELEASES_URL =
  "https://gitee.com/api/v5/repos/StarVase/DiaryTodo2/releases/latest"

// 获取元素的绝对位置坐标（像对于页面左上角）
function getElementPagePositionY(element) {
  //计算y坐标
  var actualTop = element.offsetTop
  var current = element.offsetParent
  while (current !== null) {
    actualTop += current.offsetTop + current.clientTop
    current = current.offsetParent
  }
  //返回结果
  return actualTop
}
// const appConfig = ref(null)

/*fetch(RELEASES_URL, { cache: "force-cache" })
  .then(response => response.json())
  .then(json => (appConfig.value = json))
  .catch(function (error) {
    console.warn(error)
  })*/

var app = createApp({
  data: () => {
    return {
      pathname: window.location.pathname,
      name: "日记与待办",
      description: "简洁高效的 Markdown 日记软件",
      menus: [
        {
          title: "首页",
          href: "/",
          target: "_self",
          type: "menu",
        },
        /*{
          title: '插件下载',
          href: '/plugins.html',
          target: '_blank',
          type: 'menu'
        },
        {
          title: '使用文档',
          href: 'https://aidelua.github.io/AideLua/',
          target: '_self',
          type: 'menu'
        },*/
        {
          type: "divider",
        },
        {
          title: "Gitee 仓库",
          href: "https://gitee.com/StarVase/DiaryTodo2",
          target: "_blank",
          type: "menu",
        },
        {
          title: "GitHub 仓库",
          href: "https://github.com/StarVase/DiaryTodo2",
          target: "_blank",
          type: "menu",
        },
      ],
      screenshot: [
        {
          title: "加密文件",
          summary: "支持编写日记并加密文件，保护你的隐私",
          src: "images/screenshots/template_screenshot.webp",
        },
        {
          title: "编写待办",
          summary: "支持编写待办，让生活更有条理",
          src: "images/screenshots/template_screenshot.webp",
        },
        {
          title: "随手记录",
          summary: "可以随手记录灵感，留下脑海中的每一瞬间",
          src: "images/screenshots/template_screenshot.webp",
        },
        {
          title: "查看文章",
          summary: "可以查看好文章，空闲时间不再空虚",
          src: "images/screenshots/template_screenshot.webp",
        },
        {
          title: "收藏文字",
          summary: "可以将生活中喜欢的文字收藏起来以后再看",
          src: "images/screenshots/template_screenshot.webp",
        },
        {
          title: "多种主题",
          summary: "多种主题供你挑选，夜间写作不再刺眼睛了",
          src: "images/screenshots/template_screenshot.webp",
        },
        {
          title: "Markdown 支持",
          summary:
            "支持 Markdown 语法，轻松地编写多彩文档，更拓展了 highlight 和 katex 等功能，俨然是一个强大的 markdown 编辑器",
          src: "images/screenshots/template_screenshot.webp",
        },
        {
          title: "外部 Markdown 文档",
          summary: "支持打开外部的 markdown 文档",
          src: "images/screenshots/template_screenshot.webp",
        },
        {
          title: "自定义字体",
          summary: "支持自定义字体文件，更美好的写作体验等你来",
          src: "images/screenshots/template_screenshot.webp",
        },
      ],
      developers: [
        {
          name: "StarVase",
          summary: "软件开发",
          avatar: "https://q1.qlogo.cn/headimg_dl?dst_uin=2134204847&spec=100",
        },
        {
          name: "Eddie",
          summary: "网站开发",
          avatar: "https://q1.qlogo.cn/headimg_dl?dst_uin=2140125724&spec=100",
        },
      ],
      contact: [
        /*{
          title: '电子邮件',
          icon: 'email-outline',
          href: 'mailto:jesse205@qq.com',
          tooltip: {
            content: '邮箱：jesse205@qq.com'
          }
        },*/
        {
          title: "QQ 群",
          icon: "account-group-outline",
          href: "https://qm.qq.com/q/VSH7v7SeYw",
          tooltip: {
            content: "群号：485652458 ",
          },
        },
      ],
      links: [
        {
          name: "MDUI",
          href: "https://www.mdui.org/",
        },
      ],
      isTop: true,
    }
  },
  setup() {
    return {
      // appConfig,
    }
  },
  mounted() {
    this.isTop = getTopState(window)
    let infoSpaceY = getElementPagePositionY(
      document.getElementById("appInfoSpace")
    )
    window.addEventListener(
      "scroll",
      () => (this.isTop = window.scrollY <= infoSpaceY)
    )
    mdui.mutation()
  },
  updated() {
    mdui.mutation()
  },
})
