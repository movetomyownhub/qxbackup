/***********************************

> 应用名称：Not Boring 四件套（天气、习惯、日历、时间）
> 软件版本：2.13
> 下载地址：https://apps.apple.com/cn/app
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：解锁高级会员权限
> 更新时间：2022-11-23
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 特别提醒：如需引用请注明出处，谢谢合作！
> 特别说明：⛔⛔⛔
           本脚本仅供学习交流使用（低调），禁止转载、售卖
           ⛔⛔⛔
           
[rewrite_local]
  
# ～ Not Boring 四件套[天气、习惯、日历、时间] 解锁会员权限（2022-11-23）@ddgksf2013
^https?:\/\/api-weather\.andy\.works\/v\d\/\w{13,18}$ url reject-dict
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/*) url script-echo-response https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Crack/notboring.js

[mitm] 

hostname=api-weather.andy.works,api.revenuecat.com

***********************************/
