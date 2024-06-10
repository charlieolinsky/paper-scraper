import scrapy

class NewsSpider(scrapy.Spider):
    name = "news"
    seen = set() #Prevent duplicate tokens

    start_urls = [
        'https://www.ign.com/articles/elden-ring-shadow-of-the-erdtree-first-impressions-of-the-big-dlc'
    ]

    def parse(self, response):
        for news in response.css('div'):
            
            #Find all text stored in <p> tags
            text = ' '.join(news.xpath('.//p//text()').getall())
            
            #If text is not empty and not a duplicate, add it to the set of seen tokens and yield the text
            if text and text not in self.seen:
                self.seen.add(text)
                yield {
                    'p': text,
                }