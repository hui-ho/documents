# Docker

## 基础篇

### 基本概念

#### 镜像

#### 容器

#### 仓库

### 安装 Docker

#### macOS

Homebrew 的 Cask 已经支持 Docker Desktop for Mac：

```shell script
$ brew cask install docker
```

#### CentOS 7

##### 卸载旧版本

```shell script
$ sudo yum remove docker \
    docker-client \
    docker-client-latest \
    docker-common \
    docker-latest \
    docker-latest-logrotate \
    docker-logrotate \
    docker-selinux \
    docker-engine-selinux \
    docker-engine
```

##### 使用 yum 安装

执行以下命令安装依赖包：

```shell script
$ sudo yum install -y yum-utils \
    device-mapper-persistent-data \
    lvm2
```

执行下面的命令添加 yum 软件源：

```shell script
$ sudo yum-config-manager \
    --add-repo \
    https://mirrors.ustc.edu.cn/docker-ce/linux/centos/docker-ce.repo
```

##### 安装 Docker CE

更新 `yum` 软件源缓存，并安装 `docker-ce`：

```shell script
$ sudo yum makecache fast
$ sudo yum install docker-ce
```

##### 启动 Docker CE

```shell script
$ sudo systemctl enable docker
$ sudo systemctl start docker
```

#### Ubuntu 16.04

##### 卸载旧版本

```shell script
$ sudo apt-get remove docker \
    docker-engine \
    docker.io
```

##### 使用 apt 安装

由于 apt 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。

```bash
$ sudo apt-get update
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
```

为了确认所下载软件包的合法性，需要添加软件源的 GPG 密钥。


```bash
$ curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

然后，我们需要向 source.list 中添加 Docker 软件源

```bash
$ sudo add-apt-repository \
    "deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \
    $(lsb_release -cs) \
    stable"
```

##### 安装 Docker CE

更新 apt 软件包缓存，并安装 docker-ce：

```bash
$ sudo apt-get update
$ sudo apt-get install docker-ce
```

##### 启动 Docker CE

```bash
$ sudo systemctl enable docker
$ sudo systemctl start docker
```

### 加速器

Ubuntu 16.04+、CentOS 7

对于使用 systemd 的系统，请在 `/etc/docker/daemon.json` 中写入如下内容（如果文件不存在请新建该文件）

```json
{
  "registry-mirrors": [
    "https://dockerhub.azk8s.cn",
    "https://reg-mirror.qiniu.com"
  ]
}
```

之后重新启动服务。

```shell script
$ sudo systemctl daemon-reload
$ sudo systemctl restart docker
```

对于使用 macOS 的用户，在任务栏点击 Docker Desktop 应用图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址 `https://dockerhub.azk8s.cn`。修改完成之后，点击 Apply & Restart 按钮，Docker 就会重启并应用配置的镜像地址了。

执行 `$ docker info`，如果从结果中看到了如下内容，说明配置成功。

```
Registry Mirrors:
 https://dockerhub.azk8s.cn/
```

## 镜像篇

### 基本操作

#### 获取镜像

#### 列出镜像

#### 设置标签

#### 运行镜像

#### 虚悬镜像

#### 删除镜像

### 理解 Commit

### 镜像构建

### 多阶段构建

## 容器篇

### 基本操作

### 进入容器

### 备份与还原

## 仓库篇

### Docker Hub

### 阿里云仓库

## 网络篇

### 网络类型

### 容器互联

### 端口映射

## 数据篇

### 数据卷

### 映射目录
