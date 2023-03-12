
##  前端面试计算机网络部分总结
_____

本笔记由作者在复习八股文之计算机网络部分的相关的一些总结, 如果有什么错误的地方或者有什么相关的建议欢迎联系我

这份笔记借鉴了很多网上的文章, 如果有雷同或者相似的地方, 不用怀疑, 那就是搬得, 如果你是当中一些文章得作者,
如果觉得这种行为不恰当, 请与我联系, 收到消息后我会尽快处理

邮箱: zwn_fobj@foxmail.com

QQ: 1879154660  
QQ昵称: 只为你乱了浮生

感谢各位观看者的支持, 希望能对正在面临面试的你有所帮助,
____

<!--TOC-->
- [前端面试计算机网络部分总结](#前端面试计算机网络部分总结)
- [1. osi七层模型](#1-osi七层模型)
- [2. HTTP协议是哪层通信协议](#2-http协议是哪层通信协议)
- [3. HTTP标头(header)](#3-http标头header)

<!--/TOC-->

____

## 1. osi七层模型

![img.png](img.png)

- **物理层:**   
  解决两个硬件之间怎么通信的问题,常见的物理媒介由光纤,电缆,中继器等;它主要定义物理设备标准,如网线的接口类型,光纤的接口类型,各种传输介质的传输速率等   
  它的主要作用是传输比特流(就是由1,0转换为电流强弱来进行传输,到达目的地后再转化为1,0,也就是我们常说的数模转换与模数转换)这一层的数据叫做比特

- **数据链路层:**  
  再计算机网络中由于各个干扰的存在,物理链路是不可靠的;该层的主要功能是:通过各种控制协议,将有差错的物理信道变为无差错的,能可靠传输数据帧的数据链路  
  它的具体工作是接收来自物理层的位流形式的数据,并封装成帧,传送到上一层;同样,也将来自上层的数据帧,拆装为位流式的数据转发到物理层,这一层的数据叫做帧

- **网络层:**  
  计算机网络中如果有堕胎计算机,怎么找到要发的那台?如果中间有多个节点,怎么选择路径?这就是路由该做的事  
  该层的主要任务就是:通过路由选择算法,为报文(该层的数据单位,由上一层数据打包而来)通过通信子网选择最适当的路径,这一层的定义是IP地址,通过IP地址寻址,所以产生了IP协议  


- **传输层:**  
  当发送大量数据时,很可能会出现先丢包的状况,另一台电脑要告诉是否完整接收到全部的包,如果缺了,就告诉丢了哪些包,然后再重发一次,直至全部接收为止,  
  简单来说,传输层的主要功能就是: 监控数据传输服务的质量,保证报文的正确传输 

- **会话层:**  
  虽然已经可以实现给正确的计算机发送正确的封装过后的信息了,但我们总不可能每次都要调用传输层协议去打包,然后再嗲用IP协议去找路由,所以我们要建立一个自动收发包,自动自动寻址的功能,于式会话层出现了:它的作用就是建立和管理应用程序之间的通信  

- **表示层:**  
  表示层负责数据格式的转换,将应用处理的信息转换为适合网络传输的格式,或者将来下一层的数据转换为上层能处理的格式

- **应用层:**    
 应用层是计算机用户,以各种应用程序和网络之间的接口,其功能是直接项用户体提供服务,完成用户希望再网络上完成的各种工作 

- TCP/IP 4层模型,5层模型和OSI七层模型的差别

![img_1.png](img_1.png)

简单记一下他们的作用:  

|发送端| |接收端|
|:---:|:---:|:---:|
| 人做好信息往下发|**应用层**|看信息 | 
|翻译一下|**表示层**| 翻译一下 |
|打包|**会话层**| 看看包送全了没,没全就叫送缺的那个 |
| 把包发给下层|**传输层**|把包发给下层|
|给包贴IP地址的标签|**网络层**|报文--整理成包,看看送对了没|
|帧：查表ip转mac，然后转成电信号|**数据链路层**|信号: 整理成帧,看看不全送上去|
|定义好各种信号的意思，线路和插口的格式，发送吧|**物理层**|收到信号，送上去|

## 2. HTTP协议是哪层通信协议

HTTP协议处于TCP/IP协议体系的应用层, 它与FTP DNS等协议工作在同一层
  ![img_2.png](img_2.png)

应用层(Application Layer) 包含所有的高层协议,包括: 

1. 虚拟终端协议（TELNET，TELecommunications NETwork）；
2. 文件传输协议（FTP，File Transfer Protocol）；
3. 电子邮件传输协议（SMTP，Simple Mail Transfer Protocol）；
4. 域名服务（DNS，Domain Name Service）；
5. 网上新闻传输协议（NNTP，Net News Transfer Protocol）；超文本5. 传送协议（HTTP，HyperText Transfer Protocol）。


HTTP协议被用于WWW服务器传输超文本到本地浏览器的传输    
它可以使浏览器更加高效,使网络传输减少;它不仅保证计算机正确快速地传输超文本文档,还确定传输文档中的哪一部分,以及哪部分内容首先显示等

在TCP/IP协议的应用层中包含了大量人们普遍需要的协议  

不同的我呢见系统又不同的文件命名原则;此外,应用层还有虚拟终端,电子邮件和新闻组等各种通用和专用的功能
  
## 3. HTTP标头(header)  

**HTTP标头**(header)是HTTP请求和响应的核心,它承载了关于客户端浏览器,请求页面,服务器等相关的信息  

当你在浏览器地址栏里键入一个URL,你的浏览器将会将类似如下的HTTP请求:
```
GET /tutorials/other/top-20-mysql-best-practices/ HTTP/1.1
Host: net.tutsplus.comUser-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Cookie: PHPSESSID=r2t5uvjq435r4q7ib3vtdjq120Pragma: no-cacheCache-Control: no-cache
```
第一行被称为"Request Line"它描述的是这个请求的基本信息,剩下的就是HTTP headers了.

请求完之后,你的浏览器可能会收到如下HTTP响应:
```
HTTP/1.x 200 OK
Transfer-Encoding: chunkedDate: Sat, 28 Nov 2009 04:36:25 
GMTServer: LiteSpeedConnection: closeX-Powered-By: W3 Total Cache/0.8Pragma: publicExpires: Sat, 28 Nov 2009 05:36:25 GMTEtag: "pub1259380237;gz"Cache-Control: max-age=3600, public
Content-Type: text/html; charset=UTF-8
Last-Modified: Sat, 28 Nov 2009 03:50:37
 GMTX-Pingback: http://net.tutsplus.com/xmlrpc.php
Content-Encoding: gzipVary:
 Accept-Encoding, 
 Cookie, User-Agent<!-- ... rest of the html ... 
```
第一行被称为"State Line", 它之后就是http headers, 空行完了就开始输出内容了

**HTTP header 常用属性**  

1. Host:  
   请求报头域域主要用于指定被请求资源的internet主机和端口号,它通常从HTTP URL中提取出来的,例如我们在浏览器输入: https://www.baidu.com,浏览器发送的请求消息中,就会包含Host请求报头域;

   `HOST: www.baidu.com(此处使用缺省端口443)`

2. Referer  
   当浏览器项web服务器发送请求的时候,一般会带上Referer,告诉服务器该请求从哪个页面链接过来的,服务器借此可以获得一些信息用于处理,比如从我的主页链接到另一台别人的网站那里,它的服务器就能够从HTTP Referer中统计出每天有多少用户带年纪我主页上的链接访问它的网站

3. User-Agent  
   - 这个对于爬虫比较重要, 因为一般都需要加该属性,否则稍微处理过的网站都无法爬取  
  告诉HTTP服务器,客户端使用的操作系统和浏览器的名称以及版本  
  我们上网登录论坛的时候,往往会看到一些欢迎信息,其中列出了你的操作系统的名称和版本, 实际上,服务器应用程序就是从User-Agent这个请求报头域中获取到这些信息,User-Agent请求报头域允许客户端将它的操作系统,浏览器和它的属性告诉服务器 

例如: 
```
User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; CIBA; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; InfoPath.2; .NET4.0E)

1. 应用程序版本“Mozilla/4.0”表示：你使用Maxthon 2.0 浏览器使用 IE8 内核；  
2. 版本标识“zhiMSIE 8.0”
3. 平台自身的dao识别信息“Windows NT 5.1”表示“操作系统为:Windows XP”
Trident内核版本“Trident/4.0”，浏览器的一种内核，还有一种就是WebKit内核
```
4. Conent-type  
   表示后面的文档属于什么MIME类型,  
   常间的媒体格式类型如下:

```
text/html ： HTML格式
text/plain ：纯文本格式
text/xml ： XML格式
image/gif ：gif图片格式
image/jpeg ：jpg图片格式
image/png：png图片格式
以application开头的媒体格式类型：

application/xhtml+xml ：XHTML格式
application/xml ： XML数据格式
application/atom+xml ：Atom XML聚合格式
application/json ： JSON数据格式
application/pdf ：pdf格式
application/msword ： Word文档格式
application/octet-stream ： 二进制流数据（如常见的文件下载）
application/x-www-form-urlencoded ： 中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
另外一种常见的媒体格式是上传文件之时使用的：

multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式。
```

5. Accept-Language  
   Accept-Language:指出浏览器可以接受的语言类型如en或en-us指英语,zh或者zh-cn指中文  

6. Cookie  
   Cookie:浏览器用这个属性向服务器发送Cookie,Cookie是在浏览器中寄存的小型数据题,它可以记载和服务器相关的用户信息,也可以来实现会话功能

7. headers常见的安全攻击

![img_3.png](img_3.png)






