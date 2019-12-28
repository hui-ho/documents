# Swoole 基础

## 快速入门

### 安装扩展

#### macOS

直接使用 `pecl` 进行安装：

```bash
$ pecl install swoole
```

运行 `php -m` 查看 `swoole` 是否在扩展列表。

### HTTP 服务

#### 创建项目

创建项目并安装 `swoole-ide-helper` 代码提示辅助依赖包：

```bash
$ mkdir swoole_http_test && cd swoole_http_test
$ composer require --dev "eaglewu/swoole-ide-helper:dev-master"
```

#### 服务器代码

`server.php`：

```php
<?php

require_once './vendor/autoload.php';

// 创建一个 HTTP 服务器，并监听本地 8781 端口
$server = new swoole_http_server('127.0.0.1', 8781);

// 服务器启动时返回响应
$server->on("start", function ($server) {
    echo "Swoole http server is started at http://127.0.0.1:8781\n";
});

// 向服务器发送请求时返回响应
// 可以获取请求参数，也可以设置响应头和响应内容
$server->on("request", function ($request, $response) {

    $uri = $request->server['request_uri'];
    $response->header("Content-Type", "text/plain");

    if ($uri == '/hello') {
        $response->end("Hello World\n");
    } else {
        $response->end("Nothing\n");
    }

});

// 启动 HTTP 服务器
$server->start();
```

#### 测试服务

```bash
$ curl http://127.0.0.1:8781
Nothing

$ curl http://127.0.0.1:8781/hello
Hello World
```

### TCP 服务

### WebSocket 服务
