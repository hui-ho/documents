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

#### 创建项目

创建项目并安装 `swoole-ide-helper` 代码提示辅助依赖包：

```bash
$ mkdir swoole_tcp_test && cd swoole_tcp_test
$ composer require --dev "eaglewu/swoole-ide-helper:dev-master"
```

#### 服务端代码

`server.php`：

```php
<?php

use Swoole\Server;

require_once './vendor/autoload.php';

// 监听本地 9503 端口，等待客户端请求
$server = new Server("127.0.0.1", 8990);

// 建立连接时输出提示
$server->on('connect', function ($serv, $fd) {
    echo "Client:Connect.\n";
});

// 接收消息时返回内容
$server->on('receive', function ($serv, $fd, $from_id, $data) {
    $serv->send($fd, 'Swoole：' . $data);
    $serv->close($fd);
});

// 连接关闭时输出
$server->on('close', function ($serv, $fd) {
    echo "Client：Close.\n";
});

// 启动 TCP 服务器
$server->start();
```

#### 客户端代码

`client.php`：

```php
<?php

use Swoole\Coroutine\Client;

require_once './vendor/autoload.php';

go(function () {
    $client = new Client(SWOOLE_SOCK_TCP);

    // 尝试与指定 TCP 服务端建立连接（IP和端口号需要与服务端保持一致，超时时间为0.5秒）
    if ($client->connect("127.0.0.1", 8990, 0.5)) {
        // 建立连接后发送内容
        $client->send("hello world");

        // 打印接收到的消息
        echo $client->recv();

        // 关闭连接
        $client->close();
    } else {
        echo "connect failed.";
    }
});
```

#### 测试服务

终端 1:

```bash
$ php server.php
```

终端 2:

```bash
$ php client.php
Swoole：hello world
```

当启动客户端后，终端 1:

```bash
$ php server.php
Client:Connect.
Client：Close.
```

### WebSocket 服务

#### 服务端代码

`server.php`：

```php
<?php

use Swoole\WebSocket\Server;

require_once './vendor/autoload.php';

// 初始化 WebSocket 服务器，在本地监听 8001 端口
$server = new Server("127.0.0.1", 8001);

// 建立连接时触发
$server->on('open', function (Server $server, $request) {
    echo "server: handshake success with fd{$request->fd}\n";
});

// 收到消息时出发推送
$server->on('message', function (Server $server, $frame) {
    echo "receive from {$frame->fd}:{$frame->data},opcode:{$frame->opcode},fin:{$frame->finish}\n";
    $server->push($frame->fd, "this is server");
});

// 关闭 WebSocket 连接时触发
$server->on('close', function ($ser, $fd) {
    echo "client {$fd} closed\n";
});

// 启动 WebSocket 服务器
$server->start();
```

#### 客户端

`client.html`：

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Chat Client</title>
</head>

<body>
    <script>
        window.onload = function () {
            var nick = prompt("Enter your nickname");
            var input = document.getElementById("input");
            input.focus();

            // 初始化客户端套接字并建立连接
            var socket = new WebSocket("ws://localhost:8001");

            // 连接建立时触发
            socket.onopen = function (event) {
                console.log("Connection open ...");
            }

            // 接收到服务端推送时执行
            socket.onmessage = function (event) {
                var msg = event.data;
                var node = document.createTextNode(msg);
                var div = document.createElement("div");
                div.appendChild(node);
                document.body.insertBefore(div, input);
                input.scrollIntoView();
            };

            // 连接关闭时触发
            socket.onclose = function (event) {
                console.log("Connection closed ...");
            }

            input.onchange = function () {
                var msg = nick + ": " + input.value;
                // 将输入框变更信息通过 send 方法发送到服务器
                socket.send(msg);
                input.value = "";
            };
        }
    </script>
    <input id="input" style="width: 100%;">
</body>

</html>
```

#### 测试服务

通过浏览器访问 `http://localhost/client.html` 进行测试。
