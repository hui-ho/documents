(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{210:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("h2",{attrs:{id:"基础篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础篇"}},[a._v("#")]),a._v(" 基础篇")]),a._v(" "),s("h3",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),s("h4",{attrs:{id:"镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[a._v("#")]),a._v(" 镜像")]),a._v(" "),s("h4",{attrs:{id:"容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[a._v("#")]),a._v(" 容器")]),a._v(" "),s("h4",{attrs:{id:"仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[a._v("#")]),a._v(" 仓库")]),a._v(" "),s("h3",{attrs:{id:"安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[a._v("#")]),a._v(" 安装 Docker")]),a._v(" "),s("h4",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" macOS")]),a._v(" "),s("p",[a._v("Homebrew 的 Cask 已经支持 Docker Desktop for Mac：")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ brew cask install docker\n")])])]),s("h4",{attrs:{id:"centos-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-7"}},[a._v("#")]),a._v(" CentOS 7")]),a._v(" "),s("h5",{attrs:{id:"卸载旧版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[a._v("#")]),a._v(" 卸载旧版本")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo yum remove docker \\\n    docker-client \\\n    docker-client-latest \\\n    docker-common \\\n    docker-latest \\\n    docker-latest-logrotate \\\n    docker-logrotate \\\n    docker-selinux \\\n    docker-engine-selinux \\\n    docker-engine\n")])])]),s("h5",{attrs:{id:"使用-yum-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-yum-安装"}},[a._v("#")]),a._v(" 使用 yum 安装")]),a._v(" "),s("p",[a._v("执行以下命令安装依赖包：")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo yum install -y yum-utils \\\n    device-mapper-persistent-data \\\n    lvm2\n")])])]),s("p",[a._v("执行下面的命令添加 yum 软件源：")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo yum-config-manager \\\n    --add-repo \\\n    https://mirrors.ustc.edu.cn/docker-ce/linux/centos/docker-ce.repo\n")])])]),s("h5",{attrs:{id:"安装-docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce"}},[a._v("#")]),a._v(" 安装 Docker CE")]),a._v(" "),s("p",[a._v("更新 "),s("code",[a._v("yum")]),a._v(" 软件源缓存，并安装 "),s("code",[a._v("docker-ce")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo yum makecache fast\n$ sudo yum install docker-ce\n")])])]),s("h5",{attrs:{id:"启动-docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce"}},[a._v("#")]),a._v(" 启动 Docker CE")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo systemctl enable docker\n$ sudo systemctl start docker\n")])])]),s("h4",{attrs:{id:"ubuntu-16-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04"}},[a._v("#")]),a._v(" Ubuntu 16.04")]),a._v(" "),s("h5",{attrs:{id:"卸载旧版本-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本-2"}},[a._v("#")]),a._v(" 卸载旧版本")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo apt-get remove docker \\\n    docker-engine \\\n    docker.io\n")])])]),s("h5",{attrs:{id:"使用-apt-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-apt-安装"}},[a._v("#")]),a._v(" 使用 apt 安装")]),a._v(" "),s("p",[a._v("由于 apt 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    apt-transport-https "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    ca-certificates "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    software-properties-common\n")])])]),s("p",[a._v("为了确认所下载软件包的合法性，需要添加软件源的 GPG 密钥。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -\n")])])]),s("p",[a._v("然后，我们需要向 source.list 中添加 Docker 软件源")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" add-apt-repository "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \\\n    '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(' \\\n    stable"')]),a._v("\n")])])]),s("h5",{attrs:{id:"安装-docker-ce-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce-2"}},[a._v("#")]),a._v(" 安装 Docker CE")]),a._v(" "),s("p",[a._v("更新 apt 软件包缓存，并安装 docker-ce：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce\n")])])]),s("h5",{attrs:{id:"启动-docker-ce-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce-2"}},[a._v("#")]),a._v(" 启动 Docker CE")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" docker\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start docker\n")])])]),s("h3",{attrs:{id:"加速器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加速器"}},[a._v("#")]),a._v(" 加速器")]),a._v(" "),s("p",[a._v("Ubuntu 16.04+、CentOS 7")]),a._v(" "),s("p",[a._v("对于使用 systemd 的系统，请在 "),s("code",[a._v("/etc/docker/daemon.json")]),a._v(" 中写入如下内容（如果文件不存在请新建该文件）")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://dockerhub.azk8s.cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://reg-mirror.qiniu.com"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("之后重新启动服务。")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl daemon-reload\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart docker\n")])])]),s("p",[a._v("对于使用 macOS 的用户，在任务栏点击 Docker Desktop 应用图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址 "),s("code",[a._v("https://dockerhub.azk8s.cn")]),a._v("。修改完成之后，点击 Apply & Restart 按钮，Docker 就会重启并应用配置的镜像地址了。")]),a._v(" "),s("p",[a._v("执行 "),s("code",[a._v("$ docker info")]),a._v("，如果从结果中看到了如下内容，说明配置成功。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Registry Mirrors:\n https://dockerhub.azk8s.cn/\n")])])]),s("h2",{attrs:{id:"镜像篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像篇"}},[a._v("#")]),a._v(" 镜像篇")]),a._v(" "),s("h3",{attrs:{id:"基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[a._v("#")]),a._v(" 基本操作")]),a._v(" "),s("h4",{attrs:{id:"获取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像"}},[a._v("#")]),a._v(" 获取镜像")]),a._v(" "),s("h4",{attrs:{id:"列出镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出镜像"}},[a._v("#")]),a._v(" 列出镜像")]),a._v(" "),s("h4",{attrs:{id:"设置标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置标签"}},[a._v("#")]),a._v(" 设置标签")]),a._v(" "),s("h4",{attrs:{id:"运行镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行镜像"}},[a._v("#")]),a._v(" 运行镜像")]),a._v(" "),s("h4",{attrs:{id:"虚悬镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚悬镜像"}},[a._v("#")]),a._v(" 虚悬镜像")]),a._v(" "),s("h4",{attrs:{id:"删除镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[a._v("#")]),a._v(" 删除镜像")]),a._v(" "),s("h3",{attrs:{id:"理解-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解-commit"}},[a._v("#")]),a._v(" 理解 Commit")]),a._v(" "),s("h3",{attrs:{id:"镜像构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像构建"}},[a._v("#")]),a._v(" 镜像构建")]),a._v(" "),s("h3",{attrs:{id:"多阶段构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多阶段构建"}},[a._v("#")]),a._v(" 多阶段构建")]),a._v(" "),s("h2",{attrs:{id:"容器篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器篇"}},[a._v("#")]),a._v(" 容器篇")]),a._v(" "),s("h3",{attrs:{id:"基本操作-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本操作-2"}},[a._v("#")]),a._v(" 基本操作")]),a._v(" "),s("h3",{attrs:{id:"进入容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[a._v("#")]),a._v(" 进入容器")]),a._v(" "),s("h3",{attrs:{id:"备份与还原"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份与还原"}},[a._v("#")]),a._v(" 备份与还原")]),a._v(" "),s("h2",{attrs:{id:"仓库篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仓库篇"}},[a._v("#")]),a._v(" 仓库篇")]),a._v(" "),s("h3",{attrs:{id:"docker-hub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub"}},[a._v("#")]),a._v(" Docker Hub")]),a._v(" "),s("h3",{attrs:{id:"阿里云仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里云仓库"}},[a._v("#")]),a._v(" 阿里云仓库")]),a._v(" "),s("h2",{attrs:{id:"网络篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络篇"}},[a._v("#")]),a._v(" 网络篇")]),a._v(" "),s("h3",{attrs:{id:"网络类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络类型"}},[a._v("#")]),a._v(" 网络类型")]),a._v(" "),s("h3",{attrs:{id:"容器互联"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器互联"}},[a._v("#")]),a._v(" 容器互联")]),a._v(" "),s("h3",{attrs:{id:"端口映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端口映射"}},[a._v("#")]),a._v(" 端口映射")]),a._v(" "),s("h2",{attrs:{id:"数据篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据篇"}},[a._v("#")]),a._v(" 数据篇")]),a._v(" "),s("h3",{attrs:{id:"数据卷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[a._v("#")]),a._v(" 数据卷")]),a._v(" "),s("h3",{attrs:{id:"映射目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#映射目录"}},[a._v("#")]),a._v(" 映射目录")])])}),[],!1,null,null,null);t.default=r.exports}}]);