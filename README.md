# Attendance
範例網址 : https://zxc58.github.io/attendance/
![image](https://raw.githubusercontent.com/zxc58/attendance/main/public/demo-picture.png)
### 專案使用框架
VUE3<br/>
pinia<br/>
Element-Plus
### 產品說明
此專案為公司內部打卡系統(前台)，需與後端系統一起使用
後端網址: https://github.com/zxc58/attendance-system
### 功能
- 打卡功能需使用GPS定位服務
- 員工可用的一般打卡功能
- 員工可以查看近期出勤狀況
- 員工可以更改個人資料
- 員工可用的QRcode打卡功能
- 管理者可以進行帳號解鎖
- 管理者可以修改出勤異常
### 使用須知
- 下載專案
```
$ git clone https://github.com/zxc58/attendance.git
```
- 建立環境變數(參考:https://github.com/zxc58/attendance/blob/main/.env.example)
```
touch .env.local
```
- 開始專案
```
$ npm run build && npm run preview
```
