import sys
import os
import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.settings import Settings
from twisted.internet import reactor

# Ensure the scraper module can be found
sys.path.append(os.path.join(os.path.dirname(__file__), '../..'))

# Import the settings module after adjusting the path
from server.scraper.scraper import settings as my_settings

class NewsSpider(scrapy.Spider):
    name = "news"
    start_urls = [
        'https://www.ign.com/articles/doom-the-dark-ages-announced-confirmed-for-ps5-xbox-games-showcase-2024'
    ]
    
    #Initialize the set of seen texts as part of the class constructor to ensure each instance has its own set. 
    def __init__(self, *args, **kwargs):
        super(NewsSpider, self).__init__(*args, **kwargs)
        self.seen_text = set()

    def parse(self, response):
        for news in response.css('div'):
            
            #Find all text stored in <p> tags
            text = ' '.join(news.xpath('.//p//text() | .//blockquote//text()').getall()).strip()
            
            #If text is not empty and not a duplicate, add it to the set of seen tokens and yield the text
            if text and text not in self.seen_text:
                self.seen_text.add(text)
                yield {
                    'paragraph': text,
                }

def run_spider():
    # Load settings from the settings module
    settings = Settings()
    settings.setmodule(my_settings)

    # Initialize and configure the crawler process
    process = CrawlerProcess(settings=settings)
    yield process.crawl(NewsSpider)
    reactor.stop()

