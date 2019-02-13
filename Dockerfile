FROM python:3.6

RUN pip install -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com --upgrade pip 
RUN pip install -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com scrapy scrapyrt
RUN pip install -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com Image

ADD Dytt /home/Dytt
ADD resources.py /usr/local/lib/python3.6/site-packages/scrapyrt/

WORKDIR /home/Dytt

EXPOSE 8000

CMD scrapyrt -i 0.0.0.0 -p 8000
