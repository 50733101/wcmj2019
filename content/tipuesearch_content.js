var tipuesearch = {"pages": [{'title': '課程認知及簡介', 'text': '網際內容管理，課程目的「利用網路快速運算及連結能力進行數位化協同設計」。 \n http://mde.tw/ \n \n \n 自我認知 \n \n 這學期雖然前半段都在懵懵懂懂中度過，影片看了無數次、上課認真聽都還是不懂，起先以為我是「自以為認真」所以才會如此，向其他學長詢問後，他們表示這是正常情況，但只要跟隨著上課進度以及影片內容慢慢架構起來就會步上軌道。目前看起來，大致正確。 \n', 'tags': '', 'url': '課程認知及簡介.html'}, {'title': '近端配置及管理', 'text': 'cd  - 由母資料夾轉換至子資料夾的指令，cd(空格)子資料夾名。 \n dir  - 查看資料夾中的檔案列表及相關資訊。 \n mkdir  - 新增新資料夾，如有遇到因為需用特殊字元當名稱無法新增資料夾的情況，可利用 mkdir(空格)新資料夾名來建立新資料夾。 \n git clone \xa0- 將Github倉儲內容複製到隨身系統中。 \n ssh-keygen -t rsa -b 4096 -C "This is my key"  - 建立成對的SSH鑰匙，並將公開的上傳至Github，此後即可利用SSH進行資料推送，""中可輸入指令以便辨識多組鑰匙。 \n \n \n Github倉儲設立及git clone 相關過程 \n \n https://www.youtube.com/watch?v=XPNyL6OEfUc&t=1s \n', 'tags': '', 'url': '近端配置及管理.html'}, {'title': '網路連線設定', 'text': '遇無法順利上網應依序以下設定是否無誤；若還是不能發現獲解決問題，請立即舉手向老師詢問/求助於同組同學。 \n \n 檢查網路線是否連接正常 \n Windows Network Setting \n \n 大部分情況下，在BGA0810教室皆是 透過 IPv4 協定下的 DHCP 與 NAT 上網，且使用\xa0192.168.1.* 的網路位址。 \n \n ipconfig  - 查詢IP位置及相關資訊。 \n \n \n Chrome Proxy \n \n nslookup  - 查詢可用的porxy 地址。 \n (藉由Network Connect從家中進入校內取得140.130.1.2) \n \n 然後以 NAT 的一組外部 IP 上網, 通常必須設定 Proxy Server 為 http://proxy.kmol.info:3128 後上網會比較順暢，但第十三周為特殊情況僅剩下140.130.17.3可用。 \n', 'tags': '', 'url': '網路連線設定.html'}, {'title': '隨身系統', 'text': '隨身碟當中通常內設的格式為FAT32/exFAT ，若要載入大型檔案(4GB以上)將會受阻，所以在要放入Ubuntu 18.04 vdi 檔案之前, 需先將隨身碟格式化為 NTFS，否則就算隨身碟內仍有許多檔案仍會無法執行成功。 (格式化前記得先將資料備份!) \n \n FAT32(不建議使用) \n \n 兼容性佳，安全度不高，單一文件大小不能超過4GB、名稱不能超過225個字元。 \n \n exFAT(FAT64，適用行動設備) \n \n 兼容性佳，最大可容納不超過256GB的單位文件。 \n \n NTFS(適用存放數據) \n \n 管理方便、安全性佳、容錯率高、穩定性高，屬於微軟專利其他使用者須藉由第三方才可使用。 \n \n', 'tags': '', 'url': '隨身系統.html'}, {'title': '校園資源的應用', 'text': '\n https://www.youtube.com/watch?v=1zBHgscMpXo&feature=youtu.be \n \n', 'tags': '', 'url': '校園資源的應用.html'}, {'title': '虛擬主機配置與設定', 'text': '\n Virtual Box 虛擬主機架設 \n \n sudo halt  - 關機指令。 \n sudo apt install nginx \xa0- 安裝Nginx套件指令， Nginx 為一個網頁伺服器，它能反向代理 HTTP, HTTPS, SMTP, POP3, IMAP 的協議鏈接 。 \n ping -t 192.168.2.103 \xa0- 在實體主機命令提示字元中輸入，ping -t(空格)虛擬主機ip可查詢彼此之間的網路是否橋接成功。 \n \n https://www.youtube.com/watch?v=_6x7O2TtKZI \n \n \n 利用Virtual Box 以及 FileZillaPortable 進行改版 \n \n https://youtu.be/8wEBd0kwAMg \n', 'tags': '', 'url': '虛擬主機配置與設定.html'}, {'title': '倉儲內容改版', 'text': '\n 改版過程中重要指令整理 \n \n git status  - 查看改版後尚未推送前的資料。 \n git add .  - 將改版後的資料拍快照。 \n git\xa0 commit \xa0- 將快照資料展開，準備推送。 \n git commit -m "message" \xa0-\xa0 同git commit 功能，但可在""中輸入改版訊息。 \n git push  - 推送至遠端Github倉儲。 \n git pull  - 若在遠端倉儲進行了變更，但因為近端沒有變更到所以在推送時出現小錯誤，可藉由此指令將遠端更新資料載入近端，即可進行推送。 \n \n 額外注意事項 \n \n 若在校外無法使用校內proxy時，請將porxy設定加上"#"表示為註解，以免無法推送。 \n \n \n 改版過程影片 \n \n https://www.youtube.com/watch?v=HZTn_KjqBZg&t=3s \n', 'tags': '', 'url': '倉儲內容改版.html'}, {'title': '小彈出窗及亂數產生器', 'text': '甚麼?!竟然有考古題，太棒了~期中考不用擔心了，趕快按下按鈕取得考古題吧! \n \n \n \n 取得考古題 \n \n \n \n \n \n \n TRY IT \n \n \n \n \n 小彈窗程式碼如下 \n \n <div class="line number1 index0 alt2"><code class="html plain"></code></div>\n<p><button onclick="myFunction()">取得考古題</button></p>\n<p id="demo"></p>\n<p>\n<script>// <![CDATA[\nfunction myFunction() {\n //document.getElementById("demo").innerHTML = Math.floor(Math.random()*50 + 1);\n //document.getElementById("demo").innerHTML = \'\'按讚加分享此網頁，小編私訊你!";\n alert("按讚加分享此網頁，小編私訊你!");\n}\n// ]]></script>\n</p> \n \n 亂數抽取程式碼如下 \n \n <script>// <![CDATA[\nfunction myFunction2() {\n document.getElementById("demo").innerHTML = Math.floor(Math.random()*50 + 1);\n //document.getElementById("demo").innerHTML = \'\'按讚加分享此網頁，小編私訊你!";\n //alert("按讚加分享此網頁，小編私訊你!");\n}\n// ]]></script> \n \n', 'tags': '', 'url': '小彈出窗及亂數產生器.html'}, {'title': 'ROC Flag', 'text': 'Flag 1 \n  導入 Brython 標準程式庫  \n \n \n \n  啟動 Brython  \n \n \n Flag 1 程式碼如下 \n \n <!-- 導入 Brython 標準程式庫 -->\n<script src="./../static/brython.js"></script>\n<script src="./../static/brython_stdlib.js"></script>\n<p></p>\n<!-- 啟動 Brython -->\n<script>// <![CDATA[\nwindow.onload=function(){\n// 設定 data/py 為共用程式路徑\nbrython({debug:1, pythonpath:[\'./../data/py\']});\n}\n// ]]></script>\n<p><canvas height="400" id="plotarea" width="600"></canvas></p>\n<script type="text/python">// <![CDATA[\n# 導入 doc\nfrom browser import document as doc\nimport math\n\n# 準備繪圖畫布\ncanvas = doc["plotarea"]\nctx = canvas.getContext("2d")\n# 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點\n# ctx.setTransform(1, 0, 0, -1, 0, canvas.height)\n# 以下採用 canvas 原始座標繪圖\nflag_w = canvas.width\nflag_h = canvas.height\ncircle_x = flag_w/4\ncircle_y = flag_h/4\n# 先畫滿地紅\nctx.fillStyle=\'rgb(255, 0, 0)\'\nctx.fillRect(0,0,flag_w,flag_h)\n# 再畫青天\nctx.fillStyle=\'rgb(0, 0, 150)\'\nctx.fillRect(0,0,flag_w/2,flag_h/2)\n# 畫十二道光芒白日\nctx.beginPath()\nstar_radius = flag_w/8\nangle = 0\nfor i in range(24):\n    angle += 5*math.pi*2/12\n    toX = circle_x + math.cos(angle)*star_radius\n    toY = circle_y + math.sin(angle)*star_radius\n    # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i):\n        ctx.lineTo(toX, toY)\n    else:\n        ctx.moveTo(toX, toY)\nctx.closePath()\n# 將填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n# 白日:藍圈\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'rgb(0, 0, 149)\'\nctx.fill()\n# 白日:白心\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n// ]]></script> \n Flag 2 \n \n \n \n Flag 2 程式碼 \n <p><canvas height="400" id="plotarea2" width="600"></canvas></p>\n<script type="text/python">// <![CDATA[\n# 導入 doc\nfrom browser import document as doc\nimport math\n\n# 準備繪圖畫布\ncanvas = doc["plotarea2"]\nctx = canvas.getContext("2d")\ndef blueWhite(ctx, x, y, flag_w, flag_h):\n    # 再畫青天\n    ctx.fillStyle=\'rgb(127, 255, 212)\'\n    #ctx.fillRect(x-flag_w/2, y-flag_h/2, flag_w/4, flag_h/4)\n    ctx.fillRect(0, 0, flag_w, flag_h/2)\n    # 畫十二道光芒白日\n    ctx.beginPath()\n    star_radius = flag_w/8\n    angle = 0\n    for i in range(24):\n        angle += 5*math.pi*2/30\n        toX = x + math.cos(angle)*star_radius\n        toY = y + math.sin(angle)*star_radius\n        # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n        if (i):\n            ctx.lineTo(toX, toY)\n        else:\n            ctx.moveTo(toX, toY)\n    ctx.closePath()\n    # 將填色設為白色\n    ctx.fillStyle = \'rgb(0, 0, 0)\'\n    ctx.fill()\n    # 白日:藍圈\n    ctx.beginPath()\n    ctx.arc(x, y, flag_w*17/240, 0, math.pi*2, True)\n    ctx.closePath()\n    # 填色設為藍色\n    ctx.fillStyle = \'#fff\'\n    ctx.fill()\n    # 白日:白心\n    ctx.beginPath()\n    ctx.arc(x, y, flag_w/16, 0, math.pi*2, True)\n    ctx.closePath()\n    # 填色設為白色\n    ctx.fillStyle = \'rgb(0, 0, 0)\'\n    ctx.fill()\n# 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點\n# ctx.setTransform(1, 0, 0, -1, 0, canvas.height)\n# 以下採用 canvas 原始座標繪圖\nflag_w = canvas.width\nflag_h = canvas.height\ncircle_x = flag_w/2\ncircle_y = flag_h/2\n# 先畫滿地紅\nctx.fillStyle=\'rgb(255, 192, 203)\'\nctx.fillRect(0,0,flag_w,flag_h)\nblueWhite(ctx, circle_x, circle_y, flag_w, flag_h)\n// ]]></script> \n \n', 'tags': '', 'url': 'ROC Flag.html'}, {'title': '骰子遊戲', 'text': ' Your browser doesn\'t support the HTML5 element canvas.      Throw dice  \n Stage:   Point:   Outcome:  \n 遊戲程式碼如下 \n <script type="text/javascript">// <![CDATA[\nvar cwidth = 400;\n    var cheight = 300;\n    var dicex = 50;\n    var dicey = 50;\n    var dicewidth = 100;\n    var diceheight = 100;\n    var dotrad = 6;\n    var ctx;\n    var dx;\n    var dy;\n    var firstturn = true;\n    var point;\nfunction throwdice() {\n    var sum;\n    var ch = 1+Math.floor(Math.random()*6);\n    sum = ch;\n    dx = dicex;\n    dy = dicey;\n    drawface(ch);\n    dx = dicex + 150;\n    ch=1 + Math.floor(Math.random()*6);\n    sum += ch;\n    drawface(ch);\n    if (firstturn) {\n        switch(sum) {\n            case 7:\n            case 11:\n              document.f.outcome.value="You win!";\n              break;\n            case 2:\n            case 3:\n            case 12:\n              document.f.outcome.value="You lose!";\n              break;\n            default:\n              point = sum;\n              document.f.pv.value=point;\n              firstturn = false;\n              document.f.stage.value="Need follow-up throw.";\n              document.f.outcome.value="   ";\n        }\n    }\n    else {\n        switch(sum) {\n        case point:\n           document.f.outcome.value="You win!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n           break;\n        case 7:\n           document.f.outcome.value="You lose!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n        }\n            }\n}\nfunction drawface(n) {\n  ctx = document.getElementById(\'canvas\').getContext(\'2d\');  \n  ctx.lineWidth = 5;\n  ctx.clearRect(dx,dy,dicewidth,diceheight);\n  ctx.strokeRect(dx,dy,dicewidth,diceheight)\n  var dotx;\n  var doty;\n  ctx.fillStyle = "#009966";\n    switch(n) {\n        case 1:\n         draw1();\n         break;\n        case 2:\n         draw2();\n         break;\n        case 3:\n         draw2();\n         draw1();\n         break;\n        case 4:\n         draw4();\n         break;\n        case 5:\n         draw4();\n         draw1();\n         break;\n        case 6:\n         draw4();\n         draw2mid();\n         break;\n          \n    }\n}\nfunction draw1() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + .5*dicewidth;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw2() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw4() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + diceheight-3*dotrad;  //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+ 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill(); \n}\nfunction draw2mid() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy + .5*diceheight; //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\n// ]]></script>\n<p><canvas height="300" id="canvas" width="400"> Your browser doesn\'t support the HTML5 element canvas. </canvas> <br> <button onclick="throwdice();">Throw dice </button></p>\n<form id="f" name="f">Stage: <input name="stage" type="text" value="First Throw"> Point: <input name="pv" type="text" value="   "> Outcome: <input name="outcome" type="text" value="     "></form>\n \n \n', 'tags': '', 'url': '骰子遊戲.html'}, {'title': '期中報告', 'text': '影片網址: https://www.youtube.com/watch?v=wGmXj0XgLqU \n 開啟字幕，獲得註解 \n \n', 'tags': '', 'url': '期中報告.html'}, {'title': '期末報告', 'text': '\n 課程回顧 \n \n \n \n 期末報告影片 \n \n 影片網址:\xa0 https://www.youtube.com/watch?v=4npWGDd7vAg \n', 'tags': '', 'url': '期末報告.html'}]};