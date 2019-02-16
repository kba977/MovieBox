var id = "{YOUR_CHAT_ID}";

function start(payload) {
  var dataToTelegram = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  }
  
  UrlFetchApp.fetch("https://api.telegram.org/bot{YOUR_BOT_TOKEN}/", dataToTelegram);
}

function sendMovie() {
  var resp = UrlFetchApp.fetch("http://{YOUR_SCRAPYRT_IP}/crawl.json?start_requests=true&spider_name=movie");
  var item = JSON.parse(resp).items[0];
  
  var payload = {
    "method": "sendMessage",
    "chat_id": id,
    "parse_mode": "Markdown",
    "text": "["+item.title+"](" + item.image + ")" + "\n" + item.date + "\n" + item.content + "\n" + "◎下载地址 \n `"
+ item.download_url + "`"
  }
  
  start(payload);
}
