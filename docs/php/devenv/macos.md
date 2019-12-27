# macOS

目前我的主力机为 MacBook Pro 2015 13in，系统版本为 `10.15.2`，拿来写 PHP 是绰绰有余了，本开发环境方案同样适合其他的机型。

## Homebrew

[Homebrew](https://brew.sh/) 是 Mac 下的一个包管理工具,类似于 CentOS 下的 `yum`，可以很方便地进行安装、卸载、更新各种软件包。

### 安装 Homebrew

```shell script
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 更换 Homebrew 源

使用国内镜像源可加快下载速度，推荐使用 [阿里云](https://opsx.alibaba.com/mirror?lang=zh-CN) ，也可以选择 [清华](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/) ，以阿里云为例：

```shell script
# 替换 brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

# 替换 homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

# 应用生效
brew update

# 替换 homebrew-bottles:
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

刷新一下：

```bash
brew update --verbose
```

## Composer

[Composer](https://www.phpcomposer.com/) 是 PHP 用来管理依赖（dependency）关系的工具。你可以在自己的项目中声明所依赖的外部工具库（libraries），Composer 会帮你安装这些依赖的库文件。

### 安装 Composer

```shell script
brew update
brew install composer
```

### 更换 Composer 源

推荐使用[阿里云](https://developer.aliyun.com/composer)的镜像。

使用 Composer 镜像加速有两种选项：

- 全局配置（推荐）

```shell script
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

> 取消全局配置：`composer config -g --unset repos.packagist`

- 单独使用

```shell script
composer config repo.packagist composer https://mirrors.aliyun.com/composer/
```

> 取消配置：`composer config --unset repos.packagist`

### 多线程加速下载

Composer 下载依赖包是单线程下载，即使使用了国内的镜像源有时依然会非常慢。使用 Composer 多线程下载的工具 [hirak/prestissimo](https://github.com/hirak/prestissimo) 可大大加快下载时间。

```shell script
composer global require hirak/prestissimo
```

## Valet

Valet 是 Mac 极简主义者的 Laravel 开发环境。没有 Vagrant，不需要配置 `/etc/hosts` 文件。甚至可以使用本地隧道公开共享你的站点。

### 安装 Valet

安装 PHP：

```shell script
brew update
brew install php
```

全局安装 `valet` 的包：

```shell script
composer global require laravel/valet
valet install
```

> 如果出现 `zsh: command not found: valet` 的错误，请将 `～/.composer/vendor/bin` 加入系统的环境变量。
> zsh 的命令为：`echo 'export PATH=$HOME/.composer/vendor/bin:$PATH' > ~/.zshrc`

### 常用命令

- `valet start` 开启 Valet 守护进程
- `valet stop` 停止 Valet 守护进程
- `valet links` 查看所有的项目
- `valet link app-name` 增加一个项目
- `valet unlink app-name` 删除一个项目

更多使用方法可以查看 [Vlate 文档](https://learnku.com/docs/laravel/6.0/valet/5128)。

## MySQL

当前 MySQL 的最新版本的 `8.0`，但目前对于我来说还是 `5.7` 更合适，因此不可以直接 `brew install mysql` 安装，需要多几个步骤。

### 清除残留

```bash
brew uninstall mysql
brew uninstall mysql@5.7
rm -rf /usr/local/var/mysql
rm /usr/local/etc/my.cnf
```

> 未安装过的可以跳过。

### 安装指定版本

```bash
brew install mysql@5.7
brew link --force mysql@5.7
```

启动 MySQL 服务并完成初始化：

```bash
brew services start mysql@5.7
mysql_secure_installation
```
