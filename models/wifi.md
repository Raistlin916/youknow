WIFI连接指南-黄龙国际中心
=======
为提高公司网络安全性，连接公司办公WIFI需要使用[系统账号](http://cas.qima-inc.com)的用户认证，SSID为Youzan-office。具体连接方法如下：

一、MAC电脑
-------

1. 下载附件中的youzan-office.mobileconfig,保存至文档（后续变更CAS系统密码时需要使用）
2. 双击下载的文件，如下图，选择继续
![下载附件](http://img.yzcdn.cn/public_files/2016/05/15/bb5373dbc5490cf6abf9bb0c03b39e9a.png)
![下载附件2](http://img.yzcdn.cn/public_files/2016/05/15/650891c3a6dcc3cd3f34c5990ffa690d.png)
3. 在用户名和密码框中填入CAS系统的用户名和密码 ，点击安装
![输入帐号密码](http://img.yzcdn.cn/public_files/2016/05/15/acf42466c6c1cb3bbe74387af1246110.png)
4. 因为需要导入证书，所以在下面的提示框输入本机的电脑密码。
5. 安装完成后，即可以连接Youzan-office的wifi。
6. 如果变更了CAS系统密码，需要现在系统偏好设置---描述文件----删除Youzan-office描述文件，然后再重复2-5的步骤即可。

二、移动设备
-------

1. iOS系统（苹果手机iphone、平板电脑iPad）
  1. 下载附件中的youzan-office.mobileconfig
  2. 使用MAC电脑的airdrop将文件传送至iPhone  （建议大家在电脑上安装[apple configurator](https://itunes.apple.com/cn/app/apple-configurator-2/id1037126344?mt=12),然后打开下载的附件，在wifi一栏中将用户名和密码填写保存）
  3. 在iPhone上点击安装，输入手机密码后完成安装
  4. 在移动设备点击设置---无线网络----选择Youzan-office，按照提示输入用户名和密码（CAS系统账户信息）即可。
2. Android设备
  1. 下载附件中的证书cert for android.cer，放到android设备上（可以放到存储的根目录，如果是使用QQ传输到手机，则在/tencent/QQfile_recv/下面）
  2. 打开并安装证书。证书安装的大致方法是：打开设置->安全->凭据存储，从存储设备安装->选择刚才放上的cer文件，然后安装，证书安装用途请选择WLAN。（Android手机安装证书时需要设置锁屏密码，如果没有设置锁屏密码会提示输入密码）
  3. 选择设置----无线局域网-----选择Youzan-office
  4. 在弹出的界面按以下类型设置：  EAP方法—TTLS   身份验证-----PAP    CA证书----步骤2安装的证书    身份：CAS系统用户名    密码：CAS系统密码
  5. 点击连接，即可连接至Youzan-office。
